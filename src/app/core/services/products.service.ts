import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = environment.baseurl

  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get(`${environment.baseurl}/products`)
  }

  getProductById(id:any) {
    return this.http.get(`${environment.baseurl}/products/${id}`)
  }

  getCategories() {
    return this.http.get(`${environment.baseurl}/categories`)
  }

  SearchProductName(name:any) {
    // productsService.getProducts()
    return this.http.get(`${environment.baseurl}/search-products/${name}`);
  }

  createProduct(item:any) {
    return this.http.post(`${environment.baseurl}/addproducts`, item)
  }

  editProduct(item:any, id:any) {
    return this.http.put(`${environment.baseurl}/editproducts/${id}`, item)
  }

  deleteProduct(id:any) {
    return this.http.delete(`${environment.baseurl}/deleteproduct/${id}`)
  }

  createCategory(category:any) {
    return this.http.post(`${environment.baseurl}/newcategory`, {category})
  }

  editCategory(categoryName:any, categoryId:any) {
    return this.http.put(`${environment.baseurl}/editcategory/${categoryId}`, {categoryName})
  }

  deleteCategory(categoryId:any) {
    return this.http.delete(`${environment.baseurl}/deletecategory/${categoryId}`)
  }

}
