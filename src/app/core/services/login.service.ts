import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/login.model';
import { tokenReceiver } from '../models/tokenreciever.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(body : Login){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('client1:myClientSecretValue')
      })
    };
    return this.http.post<any>(`/api/login`, body, httpOptions);
  }

  getToken(code : string): Observable<tokenReceiver> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('client1:myClientSecretValue')
      }),
      withCredentials: false
    };
    
    let body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', 'https://127.0.0.1:4200/authorized');
    return this.http.post<tokenReceiver>(`/api/oauth2/token`, body, httpOptions);
  }

  refreshToken(refreshToken: string): Observable<tokenReceiver> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('client1:myClientSecretValue')
      }),
      withCredentials: false
    };
    
    let body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', refreshToken);
    body.set('redirect_uri', 'https://127.0.0.1:4200/authorized');
    return this.http.post<tokenReceiver>(`/api/oauth2/token`, body, httpOptions);
  }

  anonLogin(){
    return this.login({
      email: "anon",
      pwd: "anon"
    });
  }
}