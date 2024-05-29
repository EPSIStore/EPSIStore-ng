import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    const url = `${environment.apiUrl}/products`;
    return this.http.get<any[]>(url, {});
  }
}
