import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthorizeComponent } from './authorize/authorize.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: 'authorized', component: AuthorizeComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
