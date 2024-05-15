import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(private cookieService: CookieService) { }

    isAnon() {
      const token = this.cookieService.get("token");
      if(token == ""){
        return true;
      }
      const roles = (JSON.parse(atob(token.split('.')[1]))).roles;
      return roles[0] == "ROLE_ANON";
    }

    isAdmin() {
      const token = this.cookieService.get("token");
      if(token == ""){
        return false;
      }
      const roles = (JSON.parse(atob(token.split('.')[1]))).roles;
      var admin = false;
      for(let role of roles){
        if(role == "ROLE_ADMIN"){
            admin = true;
        }
      }
      return admin;
    }

    getToken(){
        return this.cookieService.get("token");
    }

    setToken(value : string){
        return this.cookieService.set("token", value);
    }

    getRefreshToken(){
        return this.cookieService.get("refToken");
    }

    setRefreshToken(value : string){
        return this.cookieService.set("refToken", value);
    }

    tokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }

    clearCookies(){
        this.cookieService.delete("JSESSIONID");
        this.cookieService.delete("token");
        this.cookieService.delete("refToken");
    }
}