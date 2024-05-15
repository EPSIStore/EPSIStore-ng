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
    this.loginService.login(this.credentials)
    .subscribe({
      error: (e) => {
        console.log(e);
      },
      next: (v) => {
        document.location.href = "https://127.0.0.1:4200/api/auth/oauth2/authorize?response_type=code&client_id=client1&redirect_uri=https://127.0.0.1:4200/authorized&scope=openid read";
      }
    });
  }

  ToRegister(){
    this.router.navigate(['/register']);
  }

}
