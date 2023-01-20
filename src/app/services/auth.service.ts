import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 loginapiurl ='http://10.200.108.67:3100/auth/login';

  constructor(private http:HttpClient) { }

proceedLogin(usercred:any){
return this.http.post(this.loginapiurl, usercred);
}

isLoggedIn(){
  return localStorage.getItem('token')!=null;
}

}
