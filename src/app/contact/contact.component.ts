import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactUsForm: FormGroup

  showNotification: boolean = false

  constructor(private fb: FormBuilder) {
    // console.log(this.contactForm);
    this.contactUsForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required]],
      message: ['', Validators.required],
    })
  }

  async onFormSubmit() {
    // console.log('VALIDITY: ', this.contactUsForm.valid);
    // console.log('VALUE: ', this.contactUsForm.value);
    emailjs.init('3hZlJcvv2bhaMmHe-')
    let response = await emailjs.send("service_73a76fv","template_gj8cew8",{
    from_name: `${this.contactUsForm.value.firstname} ${this.contactUsForm.value.lastname}`,
    to_name: "Denis M.",
    message: this.contactUsForm.value.message,
    reply_to: this.contactUsForm.value.email,
    phone: this.contactUsForm.value.phone
    });

    // console.log('Message Sent');
    this.contactUsForm.reset()
    setTimeout(() => {
      this.showNotification = true
    }, 0);
    setTimeout(() => {
      this.showNotification = false
    }, 3000);



  }

  get contactForm() {
    return this.contactUsForm.controls
  }


}
