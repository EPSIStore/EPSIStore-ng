import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AuthorizeComponent } from './auth/authorize/authorize.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'authorized', component: AuthorizeComponent},
  {path: 'test', component: TestComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
