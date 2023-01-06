import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any

  public userlogin: FormGroup; 

  constructor (private userlogindata:LoginService, private router:Router) {

    this.userlogin = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      });
      
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.userlogin.controls[controlName].hasError(errorName);
  }

  result:any

  onSubmit (){
    console.log(this.userlogin.value);
    this.userlogindata.userloingSave(this.userlogin.value).subscribe((result: any) => {
    localStorage.setItem("token", result.result[0].token);
    this.router.navigate(['/task-management']);
    console.log(result.result);
    })
}

  ngOnInit() {

  }

}
