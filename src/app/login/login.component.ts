import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2'
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    messageclass = ''
    message = ''
    customerid: any;
    editdata: any;
    responsedata: any;

    users: any

    taskBtn: boolean;
    loginMenu: boolean;

    public loginvalue: FormGroup;
    taskshowhide: boolean | undefined;
    loginshowhide: boolean | undefined;

    constructor(private userlogindata: LoginService, private router: Router, private loginservice: AuthService) {

       

        this.loginvalue = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });

        this.taskBtn = true;
        this.loginMenu = true;

    }

    public checkError = (controlName: string, errorName: string) => {
        return this.loginvalue.controls[controlName].hasError(errorName);
    }

    result: any
    error = false;
    loading = false;

    onSubmit() {
        this.userlogindata.userloingSave(this.loginvalue.value).subscribe((result: any) => {
            
            console.log(result,'result');

            if (result.error === false) {

                localStorage.setItem("token", result.result[0].token);
                Swal.fire('', 'Successfully loged in');
                this.router.navigate(['/task-management-portal']);
                
            } else {
                Swal.fire('', 'User Name and Password not valid');
                this.router.navigate(['/login']);
            }
        });
    }



    onLogout() {
        return localStorage.getItem('token');
        this.router.navigate(['/login']);
    }




    ngOnInit() { }

    // proceedLogin() {
    // this.loginservice.proceedLogin(this.loginvalue.value).subscribe((result:any)=>{
    // if (this.loginvalue.valid && result.error === false) {
    // Swal.fire('','Successfully loged in');
    // localStorage.setItem('token', result.result[0].token);
    // this.router.navigate(['/task-management-portal']);
    // } else {
    //   Swal.fire('','User Name and Password not valid');
    // }
    // })

    // }


    loginHeader(){
        this.loginMenu = true;
        this.taskBtn = true;
    }


}



