import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { UserInformation } from "../models/profile/user-information.model";
import { ChangeUsername } from "../models/profile/change-username.model";
import { ChangeEmail } from "../models/profile/change-email.model";
import { ChangePassword } from "../models/profile/change-password.model";
import { Body } from "../models/body.model";
import { FidelityReward } from "../models/profile/fidelity-rewards.model";
import { FidelityChange } from "../models/profile/fidelity-change.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private tokenService : TokenService) { }

    getUserInformations() : Observable<UserInformation>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<UserInformation>("/api/customer/user-information", httpOptions);
    }

    getMaxFidelityPoints() : Observable<Body<number>>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<Body<number>>("/api/customer/fidelity-points/maximum", httpOptions);
    }

    getFidelityRewards() : Observable<Body<Array<FidelityReward>>>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<Body<Array<FidelityReward>>>("/api/customer/fidelity-rewards", httpOptions);
    }

    getFidelityHistory() : Observable<Body<Array<FidelityChange>|string>>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.tokenService.getToken(),
          })
        };
        return this.http.get<Body<Array<FidelityChange>|string>>("/api/customer/fidelity-points/history", httpOptions);
    }

    changeUsername(body : ChangeUsername) : Observable<Body<string>>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.tokenService.getToken(),
        })
      };
      return this.http.post<any>("/api/customer/update-username", body, httpOptions);
    }

    changeEmail(body : ChangeEmail) : Observable<Body<string>>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.tokenService.getToken(),
        })
      };
      return this.http.post<any>("/api/customer/update-email", body, httpOptions);
    }

    changePassword(body : ChangePassword) : Observable<Body<string>>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.tokenService.getToken(),
        })
      };
      return this.http.post<any>("/api/customer/update-password", body, httpOptions);
    }
}