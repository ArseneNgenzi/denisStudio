import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products:any[] = []
  categories:any[] = []

  links:any[] = [
    {
      name: 'Products',
      link: '/dashboard/products-management'
    },
    {
      name: 'Categories',
      link: '/dashboard/categories-management'
    }
  ]

  activeLink:string = ''

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res:any) => {
      this.products = res
    })
  }

  getCategories() {
    this.productsService.getCategories().subscribe((res:any) => {
      this.categories = res
    })
  }


  goToProductsManagement() {
    this.router.navigate(['products-management'], {relativeTo: this.route})
  }

  goToCategoriesManagement() {
    this.router.navigate(['categories-management'], {relativeTo: this.route})
  }

  onLogout() {
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['/login'])
  }

}
