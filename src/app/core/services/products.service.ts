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

}
