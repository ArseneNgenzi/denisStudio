import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {

  products:any = []

  constructor(private http: HttpClient, private productsService: ProductsService, private router: Router) {

  }


  ngOnInit() {
    this.getProducts()
    
  }

  getProducts():void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res
      console.log(res);
    })
  }

  onProductClick(product: any) {
    this.router.navigate(['product-details', product.id])
    // console.log(this.router);
  }

}
