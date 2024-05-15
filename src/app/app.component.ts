import { Component } from '@angular/core';
import { LoginService } from './core/services/login.service';
import { Router } from '@angular/router';
import { TokenService } from './core/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EPSIStore-NG';

  constructor(private loginService : LoginService, private router : Router, private tokenService : TokenService){}

  ngOnInit(){
    const url = window.location.href.split('?')[0].split('/').pop();
    if(url != "authorized" && url != "login"){
      var token = this.tokenService.getToken();
      if(token == "" || this.tokenService.tokenExpired(token)){
        this.router.navigate(["/authorized"]);
      }
    }
  }
}
