import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient, private tokenService: TokenService) { }

    getEverybody(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<any>("/api/test/everybody", httpOptions);
    }

    getRole1(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<any>("/api/test/role1", httpOptions);
    }

    getRole2(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<any>("/api/test/role2", httpOptions);
    }

    getAdmin(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<any>("/api/test/admin", httpOptions);
    }

    getUser(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<any>("/api/test/user", httpOptions);
    }
}
