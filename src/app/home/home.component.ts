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
  selectedCategory:string = 'Filter by'
  defaultCategory = 'Filter by'
  selectedSortValue:string = 'Sort By'
  defaultSort = 'Sort By'
  searchText = ''
  // searchQuery: string = '';
  // searchResults: any[] = [];


  sortValues:any = [
    {name: 'Low To High Price', value: 'Low To High Price'},
    {name: 'High To Low Price', value: 'High To Low Price'},
    {name: 'A-Z', value: 'A-Z'},
    {name: 'Z-A', value: 'Z-A'},
  ]

  constructor(private http: HttpClient, private productsService: ProductsService, private router: Router) {

  }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
    
    
  }
  scrollToPaintings(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  getProducts():void {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res
    })
  }

  getCategories() {
    this.productsService.getCategories().subscribe((res:any) => {
      this.categories = res
    })
  }

  onProductClick(product: any) {
    this.router.navigate(['product-details', product.id])
  }

  ChangingCategory(category: string) {
    // console.log(category.toLowerCase());
    if(category!== 'Filter by') {
      this.productsService.getProducts().subscribe((res:any) => {
        // console.log(res.filter((item:any) => item.category ));
        this.products = res.filter((item:any) => item.category === category.toLowerCase())
      })
    }

    else {
      this.getProducts()
    }
    this.selectedSortValue = 'Sort By'
    
  }

  ChangingSortValue(sortValue: string) {
    if(sortValue === 'Low To High Price' && this.selectedCategory !== 'Filter by'  ) {
      this.productsService.getProducts().subscribe((res:any) => {
        let newArr = res.filter((item:any) => item.category === this.selectedCategory.toLowerCase())
        this.products = newArr.sort((a:any, b:any) => a.currentPrice - b.currentPrice)
      })
    }

    else if(sortValue === 'Low To High Price' && this.selectedCategory === 'Filter by'  ) {
      this.productsService.getProducts().subscribe((res:any) => {
        this.products = res.sort((a:any, b:any) => a.currentPrice - b.currentPrice)
      })
    }
    else if(sortValue === 'High To Low Price' && this.selectedCategory !== 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        let newArr = res.filter((item:any) => item.category === this.selectedCategory.toLowerCase())
        this.products = newArr.sort((a:any, b:any) => b.currentPrice - a.currentPrice)
      })
    }
    else if(sortValue === 'High To Low Price' && this.selectedCategory === 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        this.products = res.sort((a:any, b:any) => b.currentPrice - a.currentPrice)
      })
    }
    else if(sortValue === 'A-Z' && this.selectedCategory !== 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        let newArr = res.filter((item:any) => item.category === this.selectedCategory.toLowerCase())
        this.products = newArr.sort(function(a:any, b:any) {
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          }
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
          }
          return 0;
        })
      })
    }
    else if(sortValue === 'A-Z' && this.selectedCategory === 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        this.products = res.sort(function(a:any, b:any) {
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          }
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
          }
          return 0;
        })
      })
    }
    else if(sortValue === 'Z-A' && this.selectedCategory !== 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        let newArr = res.filter((item:any) => item.category === this.selectedCategory.toLowerCase())
        this.products = newArr.sort(function(a:any, b:any) {
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return -1;
          }
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return 1;
          }
          return 0;
        })
      })
    }
    else if(sortValue === 'Z-A' && this.selectedCategory === 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        this.products = res.sort(function(a:any, b:any) {
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return -1;
          }
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return 1;
          }
          return 0;
        })
      })
    }

    else if(sortValue === 'Sort By' && this.selectedCategory !== 'Filter by' ) {
      this.productsService.getProducts().subscribe((res:any) => {
        this.products  = res.filter((item:any) => item.category === this.selectedCategory.toLowerCase())
      })
    }

    else if(sortValue === 'Sort By' && this.selectedCategory === 'Filter by' ) {
      this.getProducts()
    }
  }


  searchProductName(name:any) {
      this.productsService.SearchProductName(name).subscribe((res:any) => {
        this.products = res
      })
    
  }

}
