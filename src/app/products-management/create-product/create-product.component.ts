import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  // image = ''
  currentId: any
  productTitle: string = ''
  productDescription: string = ''
  productImage: string = ''
  productCurrentPrice: string = ''
  productPreviousPrice: string = ''
  productSize: string = ''
  productstock: string = ''
  categories: any = []
  products: any = []
  selectedCategory: string = ''
  selectedStockStatus: string = 'yes'

  productForm: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateProductComponent>,
    public dialog: MatDialog,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) { 
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      currentPrice: ['', Validators.required],
      previousPrice: ['', ],
      size: ['', Validators.required],
      itemsNumber: ['', Validators.required],
      category: ['', Validators.required],
      inStock: ['', Validators.required],
      description: ['', Validators.required],
    })
  }


  ngOnInit() { 
    // console.log(this.data);
    if(this.data) {
      this.currentId = this.data.id
      this.productForm.patchValue(this.data)
    }

    this.getCategories()
  }

  close(): void {
    this.dialogRef.close();
  }

  ChangingCategory(category: string) {
    this.selectedCategory = category
    // console.log(this.selectedCategory);
  }

  ChangingStockStatus(status: string) {
    this.selectedStockStatus = status
  }

  getCategories() {
    this.productsService.getCategories().subscribe((res: any) => {
      this.categories = res
    })
  }

  onProductSubmit(){
   if(!this.data) {
    if(this.productForm.valid) {
      this.productsService.createProduct(this.productForm.value).subscribe((res:any) => {
      })
      this.close()
    }
    
   }

   else {
    if(this.productForm.valid) {
      this.productsService.editProduct(this.productForm.value, this.currentId).subscribe((res:any) => {
      })
      this.close()
    }
   }

  }

}
