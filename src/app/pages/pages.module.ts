import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
