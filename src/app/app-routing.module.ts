import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
