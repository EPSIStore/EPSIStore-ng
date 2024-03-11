import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopComponent } from './shop/shop.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ShopComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
