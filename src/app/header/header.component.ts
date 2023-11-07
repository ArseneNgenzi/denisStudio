import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showMenuButton:boolean = true
  showCloseMenuButton:boolean = false

  toggleMenu():void {
    this.showMenuButton = false
  }

  closeMenu():void {
    this.showMenuButton = true
  }

}
