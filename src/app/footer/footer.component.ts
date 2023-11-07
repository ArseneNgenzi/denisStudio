import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

year:any

  ngOnInit():void {
    this.getCurrentYear()
  }

  getCurrentYear():void {
    this.year = new Date().getFullYear()
  }

//   goToLink(url: string){
//     window.open(url, "_blank");
// }

}
