import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule,} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { IconsModule } from './icons/icons.module';
import { FeatherModule } from 'angular-feather'; 
import { allIcons } from 'angular-feather/icons';
import { PaintingsComponent } from './paintings/paintings.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthGuard } from './auth/auth.guard';
// import { SearchPipe } from './core/pipes/search.pipe';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ProductsManagementComponent } from './products-management/products-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { NgxImageMagnifierModule } from 'ngx-image-magnifier';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateProductComponent } from './products-management/create-product/create-product.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    // IconsModule,
    
    DashboardComponent,
    HomeComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    PaintingsComponent,
    AboutComponent,
    ContactComponent,
    BackToTopComponent,
    ProductsManagementComponent,
    CategoriesManagementComponent,
    CreateProductComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatherModule.pick(allIcons),
    FormsModule,
    NgxImageMagnifierModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  exports: [
    FeatherModule,
    
  ],
  // providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
