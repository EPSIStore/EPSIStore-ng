import { Component } from '@angular/core';
import { LoginService } from './core/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EPSIStore-NG';

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  constructor(private loginService : LoginService, private cookieService: CookieService, private router : Router){}

  ngOnInit(){
    var token = this.cookieService.get("token");
    var refToken = this.cookieService.get("refToken");
    if(token == "" || this.tokenExpired(token)){
      if(refToken == "" || this.tokenExpired(refToken)){
        this.loginService.anonLogin().subscribe({
          error: (e) => {
            console.log(e);
          },
          next: (v) => {
            document.location.href = "https://127.0.0.1:4200/api/oauth2/authorize?response_type=code&client_id=client1&redirect_uri=https://127.0.0.1:4200/authorized&scope=openid read";
          },
        });
      }
      else{
        this.router.navigate(["/authorized"]);
      }
    }
    
  }
}
