import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
  
  taskshowhide:boolean = true;
  loginshowhide:boolean = true;

  constructor( ) { }

  ngOnInit(): void {
  }

  logout(){
   
  }


}