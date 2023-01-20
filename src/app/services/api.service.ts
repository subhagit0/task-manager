import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiEndpoint: string = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  httpGet<R>(url: string, headers?: HttpHeaders): Observable<R> {
    if (headers) {
      return this.http.get<R>(`${this.apiEndpoint}${url}`, {headers: headers})
    }
      return this.http.get<R>(`${this.apiEndpoint}${url}`);
  }

  httpPost<B,R>(url: string, body:B, headers?: HttpHeaders): Observable<R> {
    if (headers) {
      return this.http.post<R>(`${this.apiEndpoint}${url}`, body, {headers: headers});
    }
      return this.http.post<R>(`${this.apiEndpoint}${url}`, body);
  }

  httpPut<B,R>(url: string, body:B, headers?: HttpHeaders): Observable<R> {
    if (headers) {
      return this.http.put<R>(`${this.apiEndpoint}${url}`, body, {headers: headers});
    }
      return this.http.put<R>(`${this.apiEndpoint}${url}`, body);
  }

  httpPatch<B,R>(url: string, body:B, headers?: HttpHeaders): Observable<R> {
    if (headers) {
      return this.http.patch<R>(`${this.apiEndpoint}${url}`, body, {headers: headers});
    }
      return this.http.patch<R>(`${this.apiEndpoint}${url}`, body);
  }

  httpDelete<R>(url: string, headers?: HttpHeaders): Observable<R> {
    if (headers) {
      return this.http.delete<R>(`${this.apiEndpoint}${url}`, {headers: headers});
    }
      return this.http.delete<R>(`${this.apiEndpoint}${url}`);
  }

}
