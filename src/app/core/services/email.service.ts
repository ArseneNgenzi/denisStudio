import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl = environment.baseurl

  constructor(private http: HttpClient) { }

  sendOrderEmails(emailData: any) {
    return this.http.post(`${environment.baseurl}/sendOrderEmail`, emailData);
  }
}
