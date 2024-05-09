import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router, private loginService: LoginService) {}

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  canActivate(): boolean|Observable<boolean> {
    const token = this.cookieService.get('token');
    if (token) {
      if(this.tokenExpired(token)){
        const refToken = this.cookieService.get('refToken');
        if(refToken){
          if(this.tokenExpired(refToken)){
            this.router.navigate(['/login']); // Redirige vers la page de connexion si le token n'est pas présent
            return false;
          }
          else{
            this.router.navigate(['/authorized']); // Redirige vers la page de connexion si le token n'est pas présent
            return false;
          }
        }
        else {
          this.router.navigate(['/login']); // Redirige vers la page de connexion si le token n'est pas présent
          return false;
        }
      }
      else{
        return true;
      }
    } 
    else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si le token n'est pas présent
      return false;
    }
  }
}
