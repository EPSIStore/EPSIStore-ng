import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  credentials = {
    email: '',
    pwd: '',
    repeatpwd: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    if(this.credentials.pwd == this.credentials.repeatpwd){
      this.loginService.register(this.credentials)
      .subscribe({
        error: (e) => {
          console.log(e);
        },
        next: (v) => {
          console.log(v);
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
      });
    }
  }

  ToLogin(){
    this.router.navigate(['/login']);
  }
}
