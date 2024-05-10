import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }

    getEverybody(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.cookieService.get("token"),
          })
        };
        return this.http.get<any>("/apitest/everybody", httpOptions);
    }

    getRole1(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get("token"),
          })
        };
        return this.http.get<any>("/apitest/role1", httpOptions);
    }

    getRole2(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get("token"),
          })
        };
        return this.http.get<any>("/apitest/role2", httpOptions);
    }

    getAdmin(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get("token"),
          })
        };
        return this.http.get<any>("/apitest/admin", httpOptions);
    }

    getUser(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.cookieService.get("token"),
          })
        };
        return this.http.get<any>("/apitest/user", httpOptions);
    }
}
