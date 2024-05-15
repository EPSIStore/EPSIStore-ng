import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { TokenService } from '../../core/services/token.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent {

  constructor(private route: ActivatedRoute, private loginService: LoginService, private router : Router, private tokenService : TokenService) {  }

  ngOnInit(){
    this.route.queryParams
    .subscribe(params =>{
      var code = params['code'];
      if(code != null){
        this.loginService.getToken(code).subscribe({
          next: (v) =>{
            this.tokenService.setToken(v.access_token);
            this.tokenService.setRefreshToken(v.refresh_token);
            this.router.navigate(["/home"]);
          }
        });
      }
      else{
        const refToken = this.tokenService.getRefreshToken();
        this.loginService.refreshToken(refToken).subscribe({
          next: (v) =>{
            this.tokenService.setToken(v.access_token);
            this.tokenService.setRefreshToken(v.refresh_token);
            this.router.navigate(["/home"]);
          },
          error: (e) =>{
            this.tokenService.clearCookies();
            this.loginService.anonLogin().subscribe({
              error: (e) => {
                console.log(e);
              },
              next: (v) => {
                document.location.href = "https://127.0.0.1:4200/api/auth/oauth2/authorize?response_type=code&client_id=client1&redirect_uri=https://127.0.0.1:4200/authorized&scope=openid read";
              },
            });
          }
        });
      }
    });
  }
}
