import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenService : TokenService) {}

  canActivate(): boolean|Observable<boolean> {
    const token = this.tokenService.getToken();
    if (token) {
      if(this.tokenService.tokenExpired(token)){
        const refToken = this.tokenService.getRefreshToken();
        if(refToken){
          if(!this.tokenService.tokenExpired(refToken)){
            this.router.navigate(['/authorized']); // Redirige vers la page de connexion si le token n'est pas présent
            return false;
          }
        }
      }
    } 
    return true;
  }
}
