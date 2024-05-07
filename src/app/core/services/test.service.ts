import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

    getEverybody(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + this.localStorageService.getItem("token"),
          })
        };
        return this.http.get<any>("/apitest/everybody", httpOptions);
    }

    getRole1(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.localStorageService.getItem("token"),
          })
        };
        return this.http.get<any>("/apitest/role1", httpOptions);
    }

    getRole2(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.localStorageService.getItem("token"),
          })
        };
        return this.http.get<any>("/apitest/role2", httpOptions);
    }

    getAdmin(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.localStorageService.getItem("token"),
          })
        };
        return this.http.get<any>("/apitest/admin", httpOptions);
    }
}
