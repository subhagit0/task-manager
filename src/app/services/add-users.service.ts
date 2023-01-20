import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUsersService {

addUserapi ='http://10.200.108.67:3100/task/create';

constructor(private http:HttpClient) { }

addUserSave (data:any){
return this.http.post(this.addUserapi, data);
}

getusersavedata () {
return this.http.get(this.addUserapi);
}

}
