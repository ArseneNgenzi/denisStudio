import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../core/services/email.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct: any = []
  showOrderForm: boolean = false

  orderForm: FormGroup
  showNotification: boolean = false



  constructor(
    private activatedRoute: ActivatedRoute, 
    private productsService: ProductsService, 
    private fb: FormBuilder, 
    private http: HttpClient,
    private emailService: EmailService
  ) {
    this.orderForm = this.fb.group({
      names: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: [''],
    })
  }


  ngOnInit(): void {
    // let id = (this.activatedRoute.snapshot.paramMap.get('id'))
    // console.log(id);
    this.getProductById()
  }

  getProductById() {
    let id = (this.activatedRoute.snapshot.paramMap.get('id'))
    // console.log(id);
    this.productsService.getProductById(id).subscribe((res: any) => {
      // console.log(res);
      this.currentProduct = res
    })
  }

  showForm() {
    this.showOrderForm = true
  }

  hideForm() {
    this.showOrderForm = false
  }

  onOrderSubmit() {
    this.currentProduct.forEach((el: any) => {
      for (const key in el) {
        this.orderForm.value[key] = el[key]
      }
    });

    // console.log(this.orderForm.value);

    const emailData = {
      from: this.orderForm.value.names,
      toName: "Denis",
      senderMessage: this.orderForm.value.message || 'N/A',
      senderEmail: this.orderForm.value.email,
      senderPhone: this.orderForm.value.phone,
      productImage: this.orderForm.value.image,
      productPrice: this.orderForm.value.currentPrice,
      productTitle: this.orderForm.value.title,
    };

    console.log(emailData);

    this.orderForm.reset()


    this.emailService.sendOrderEmails(emailData).subscribe((res:any) => {
      console.log(res);
      // this.orderForm.reset()
    })

    setTimeout(() => {
      this.showNotification = true
    }, 0);
    setTimeout(() => {
      this.showNotification = false
    }, 3000);

    // this.orderForm.reset()



  }



}
