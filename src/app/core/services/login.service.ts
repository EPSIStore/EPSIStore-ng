import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  postLogin(credentials: { email: string, pwd: string }): Observable<User[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this.http.post<User[]>(environment.apiUrl + "/login", credentials, { headers });
  }
}
