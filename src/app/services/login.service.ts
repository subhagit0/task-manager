import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userlogin ='https://qangssml.shyamsteel.in/api/task/auth/login';
  logout_api = "http://10.200.108.67:3100/task/logout";
  
  constructor(private http:HttpClient) { }

  // userloingSave(data:any) {
  // let token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBfaWQiOjI1OSwiaWF0IjoxNjcyOTgyNTIzLCJleHAiOjE2NzMwMTQ5MjN9.9wTQXDCHXYLH6npnlPLGRh2pJagxa6MSkgvhYZrewaI";
  // // let head_obj= new HttpHeaders().set("Authorization", "" +token);
  // let head_obj= new HttpHeaders().set("Authorization", token);
  // return this.http.post(this.userlogin,data, {headers:head_obj});
  // }

  userloingSave(data:any) {
    return this.http.post(this.userlogin,data);
  } 
  
  logoutService(){
    // return this.http.get(this.logout_api);
    let status = {
      logout:true
    };
    return status;

}
}
