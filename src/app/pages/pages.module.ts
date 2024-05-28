import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopComponent } from './shop/shop.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    CartPageComponent
  ],
  imports: [
    PagesRoutingModule,
    FontAwesomeModule,
    CommonModule
  ]
})
export class PagesModule { }
