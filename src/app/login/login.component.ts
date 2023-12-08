import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword:boolean = false
  loginForm: FormGroup
  loggedIn: boolean

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  switchShowPassword(state:boolean) {
    
    this.showPassword = state
  }

  onCredentialsSubmit() {

    const {username, password} = this.loginForm.value

    if(username === 'HillNkoDe' && password === 'HillDeMpa@123!' ) {
      // console.log('Authenticated');
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedIn = true
      // localStorage.setItem('user', JSON.stringify(username))
      // console.log(this.authService.isLoggedIn());
      this.router.navigateByUrl('/dashboard')
      // this.loginForm.reset()
      // return true

    } else {
      this.loggedIn = false
      console.log('Not Authenticated');
      console.log(this.authService.isLoggedIn());
      this.router.navigate['/login']
      // return false

    }

    
  }

}
