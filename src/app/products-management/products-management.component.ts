import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from './create-product/create-product.component';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {

  products: any[] = []
  categories: any[] = []
  onProductHover: any
  kibamba: any

  constructor(private productsService: ProductsService, public dialog: MatDialog) {

  }


  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    // console.log('INIT', this.onProductHover);
  }

  showbtns(state: any) {
    this.onProductHover = state
    // console.log(this.onProductHover);
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res
    })
  }

  getCategories() {
    this.productsService.getCategories().subscribe((res: any) => {
      this.categories = res
    })
  }

  toggleProductModal(item?: any): void {
    // console.log(item);
    this.dialog.open(CreateProductComponent, {
        data: item,
        minWidth: '400px',
        minHeight: '65vh'
    });
}

deleteProduct(product:any) {
  this.productsService.deleteProduct(product.id).subscribe((res:any) => {
    // console.log(res);
    this.getProducts()
  })
}

}
