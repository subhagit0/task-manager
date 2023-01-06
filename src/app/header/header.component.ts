import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-after-login-header',
  templateUrl: './after-login-header.html',
  styleUrls: ['./header.component.css']
})
export class AfterLoginHeader implements OnInit {

constructor(private logindata:LoginService) { }

ngOnInit(): void {}

}

