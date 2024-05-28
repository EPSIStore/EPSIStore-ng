import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorizeComponent } from './authorize/authorize.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthorizeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, 
    MatCardModule,
    AuthRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class AuthModule { }
