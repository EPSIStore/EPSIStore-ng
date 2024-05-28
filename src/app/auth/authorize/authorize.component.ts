import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent {

  constructor(private route: ActivatedRoute, private loginService: LoginService, private cookieService: CookieService, private router : Router) {  }

  ngOnInit(){
    this.route.queryParams
    .subscribe(params =>{
      var code = params['code'];
      if(code != null){
        this.loginService.getToken(code).subscribe({
          next: (v) =>{
            this.cookieService.set("token", v.access_token);
            this.cookieService.set("refToken", v.refresh_token);
            this.router.navigate(["/home"]);
          }
        });
      }
      else{
        const refToken = this.cookieService.get('refToken');
        this.loginService.refreshToken(refToken).subscribe({
          next: (v) =>{
            this.cookieService.set("token", v.access_token);
            this.cookieService.set("refToken", v.refresh_token);
            this.router.navigate(["/home"]);
          },
          error: (e) =>{
            this.router.navigate(["/login"]);
          }
        });
      }
    });
  }
}
