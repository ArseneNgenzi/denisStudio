import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenuButton:boolean = true
  showCloseMenuButton:boolean = false

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  toggleMenu():void {
    this.showMenuButton = false
  }

  closeMenu():void {
    this.showMenuButton = true
  }

  get loggedInStatus() {
    return this.authService.isLoggedIn()
  }

}
