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
import { FormsModule } from '@angular/forms';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatherModule.pick(allIcons),
    FormsModule
  ],
  exports: [
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
