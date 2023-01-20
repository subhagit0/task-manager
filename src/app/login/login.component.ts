import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2'
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { LoginBody, LoginResponse } from '../models/login';
import { CommonService } from '../services/common.service';

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

    constructor(private userlogindata: LoginService, private router: Router, private loginservice: AuthService,
        private apiService: ApiService, private commonService: CommonService) {

        this.loginvalue = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });

        this.taskBtn = true;
        this.loginMenu = true;

    }

    ngOnInit(): void { }

    public checkError = (controlName: string, errorName: string) => {
        return this.loginvalue.controls[controlName].hasError(errorName);
    }

    result: any
    error = false;
    loading = false;

    onSubmit(): void {
        this.apiService.httpPost<LoginBody, LoginResponse>('auth/login', this.loginvalue.value).subscribe((data: any) => {
            if (data.error) {
                Swal.fire('', data.details[0].msg);
            } else {
                localStorage.setItem("token", data.result[0].token);
                this.router.navigateByUrl('/task-management-portal')
                // this.router.navigate(['/task-management']);
                Swal.fire('', 'Successfully loged in');
                this.commonService.sendTokenMessage(true);
            }
        })
    }


    loginHeader(){
        this.loginMenu = true;
        this.taskBtn = true;
    }


}



