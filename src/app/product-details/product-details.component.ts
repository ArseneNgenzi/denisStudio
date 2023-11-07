import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct:any = []
  zoomed: boolean = false;
  // image = document.getElementById('#imageToZoom')

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {}


  ngOnInit(): void {
    // let id = (this.activatedRoute.snapshot.paramMap.get('id'))
    // console.log(id);
    this.getProductById()
  }

  getProductById() {
    let id = (this.activatedRoute.snapshot.paramMap.get('id'))
    // console.log(id);
    this.productsService.getProductById(id).subscribe((res:any) => {
      // console.log(res);
      this.currentProduct = res
    })
  }

  onMouseMove(event: MouseEvent) {
    const image = document.getElementById('zoomable-image');

    if (this.zoomed) {
      // Reset zoom when the mouse moves away
      image?.classList.remove('zoomed');
      this.zoomed = false;
    } else {
      // Zoom in when the mouse is over the image
      image?.classList.add('zoomed');
      this.zoomed = true;
    }
  }

}
