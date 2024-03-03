import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 
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
