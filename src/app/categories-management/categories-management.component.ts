import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-categories-management',
  templateUrl: './categories-management.component.html',
  styleUrls: ['./categories-management.component.css']
})
export class CategoriesManagementComponent implements OnInit {

  categories: any[] = []
  currentCategory: string
  isEditing: boolean = false
  currentCategoryId:any

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.getCategories()
  }



  getCategories() {
    this.productsService.getCategories().subscribe((res: any) => {
      // console.log(res);
      this.categories = res
    })
  }
  createCategory() {
    if(!this.isEditing) {
      if (this.currentCategory) {
        // console.log(this.currentCategory);
        this.productsService.createCategory(this.currentCategory).subscribe((res: any) => {
          // console.log(res);
          this.currentCategory = ''
          this.getCategories()
        })
      }
    } else {
      if (this.currentCategory) {
        // console.log(this.currentCategory);
        this.productsService.editCategory(this.currentCategory, this.currentCategoryId).subscribe((res: any) => {
          // console.log(res);
          this.currentCategory = ''
          this.isEditing = false
          this.getCategories()
        })
      }
    }
    
  }

  editCategory(category:any) {
    this.isEditing = true
    this.currentCategoryId = category.id
    this.currentCategory = category.name
  }

  deleteCategory(id:any) {
    this.productsService.deleteCategory(id).subscribe((res:any) => {
      // console.log(res);
      this.getCategories()
    })
  }

}
