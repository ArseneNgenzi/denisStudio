import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInState:boolean = false

  constructor() { }

logIn(username:any, password:any):boolean {
    if (username === 'HillNkoDe' && password === '123' ) {
      localStorage.setItem('user', username)
      // this.logInState = true
      return true
    } else {
      // this.logInState = false
      return false
    }
  }

  isLoggedIn(): boolean {
    // const user = localStorage.getItem('user') === 'HillNkoDe';
    // return user ? true : false;
    if(localStorage.getItem('isLoggedIn')) {
      return true
    } else {
      return false;
    }
}
}
