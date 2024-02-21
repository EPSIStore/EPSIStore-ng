import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule, 
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    LoginService 
  ]
})
export class LoginComponent {

  credentials = {
    email: '',
    pwd: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    console.log(this.credentials)
    this.loginService.postLogin(this.credentials).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
        this.router.navigate(['/home']);
      }
    )
  }

}
