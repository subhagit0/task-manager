import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2'
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

img_logo: string = "assets/images/logo-icon-shyam-steel.png";

taskBtn:boolean=true;
loginMenu:boolean=true;
token?: string | null;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.getTokenMessage();
  }
  
  getTokenMessage(): void {
    this.commonService.getTokenMessage().subscribe((data: any) => {
      this.token = data;
    })
  }
  logout() {
    this.commonService.logout();
  }
}

@Component({
  selector: 'app-after-login-header',
  templateUrl: './after-login-header.html',
  styleUrls: ['./header.component.css']
})
export class AfterLoginHeader implements OnInit {
constructor(private logindata:LoginService, private route:Router) { }
ngOnInit(): void {}

getDecodedAccessToken(token: string): any {
  try {
    return jwt_decode(token);
  } catch(Error) {
    return null;
  }
}

logout(){
  // gettting token from localstorage
  const user:any = localStorage.getItem("token"); 
  let s = this.getDecodedAccessToken(user);
  console.log(s);
  // then check token is exists or not
  if (user) {

    //  If exist then remove token and call logout service::-
    // localStorage.removeItem("token");
    // localStorage.clear();

//    let logoutstatus= this.logindata.logoutService();
//    console.log(logoutstatus.logout);
//    if(logoutstatus.logout===true){
// this.route.navigate(["/login"])
//    }
    // this is apicall part 
    // this.logindata.logoutService().subscribe((result)=>{
    //   console.log (result);
    // });

  }
}


}

