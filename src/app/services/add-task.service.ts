import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

addUserapi = ""

constructor(private http:HttpClient) { }

adduserTask(data:any){
 return this.http.post(this.addUserapi, data);
}

}
