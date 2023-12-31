import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsManagementComponent } from './products-management/products-management.component';
import { CategoriesManagementComponent } from './categories-management/categories-management.component';
import { LoginComponent } from './login/login.component';
import { LoggedinGuard } from './auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
// import { authGuard } from './auth/auth.guard';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedinGuard],
    children: [
      {
        path: 'products-management', component: ProductsManagementComponent
      },
      {
        path: 'categories-management', component: CategoriesManagementComponent
      },
    ]
  },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'paintings', component: PaintingsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  // providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
