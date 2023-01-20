import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from 'https';



@Injectable({
    providedIn: 'root'
})

export class TaskManagementTableDataService  {

taskdata = "https://qangssml.shyamsteel.in/api/task/task/list";

constructor(private http: HttpClient) { };

token:any;

    getTaskData() {
        let token:any=localStorage.getItem("token");
        console.log('this',token);
        let head_obj = new HttpHeaders().set("Authorization", token);
        return this.http.get(this.taskdata, { headers: head_obj });
    }

}
