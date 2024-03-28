import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../models/user.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }
  
  postLogin(credentials: { email: string, pwd: string }): Observable<User[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this.http.post<User[]>(environment.apiUrl + "/login", credentials, { headers })
      .pipe(
        tap((response: any) => {
          // Stockez le token dans le local storage
          this.localStorageService.setItem('token', response.token);
        })
      );
  }
}