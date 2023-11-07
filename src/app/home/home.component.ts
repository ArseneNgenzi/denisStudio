import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title = 'Denis Store';
  products:any = []
  categories:any = []
  selectedCategory:string = ''
  defaultCategory = 'All'
  selectedSortValue = ''
  defaultSort = 'Not selected'

  constructor(private http: HttpClient, private productsService: ProductsService, private router: Router) {

  }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
    
  }
  scrollToPaintings(el: HTMLElement) {
    // this.router.navigate([], { fragment: "paintings" });
    el.scrollIntoView({behavior: 'smooth'});
  }

  getProducts():void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res
      console.log(res);
    })
  }

  getCategories() {
    this.productsService.getCategories().subscribe((res:any) => {
      this.categories = res
      console.log(this.categories);
    })
  }

  onProductClick(product: any) {
    this.router.navigate(['product-details', product.id])
    // console.log(this.router);
  }

  ChangingCategory(category: string) {
    // console.log(category.toLowerCase());
    if(category!== 'All') {
      this.productsService.getProducts().subscribe((res:any) => {
        this.products = res.filter((item:any) => item.category === category.toLowerCase())
        console.log(this.products);
      })
    }

    else {
      this.getProducts()
    }
    
  }

  ChangingSortValue(sortValue: string) {

  }

}
