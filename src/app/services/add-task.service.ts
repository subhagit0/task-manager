import { HttpClient, HttpHandler, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { addData} from '../task-management/task-management-portal/models/interfaceadddata';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  
// addUserapi = "https://qangssml.shyamsteel.in/api/task/task/create";

constructor(private http:HttpClient) { }


// token:any;

// adduserTask(data:any){
//   let token:any=localStorage.getItem("token");
//   console.log('this',token);
//   let head_obj = new HttpHeaders().set("Authorization", this.token);
//   return this.http.post(this.addUserapi, { headers: head_obj }); 
// //  return this.http.post(this.addUserapi, data);

// }


adduserTask(data:addData): Observable<any> {
  console.log(data);
  return this.http.post<any>(env.authUrl + "task/create", data, this.httpOptions).pipe(map(res => {
  return res;
    }), catchError(err => of(err)));
}


// getTaskData() {
//   let token:any=localStorage.getItem("token");
//   console.log('this',token);
//   let head_obj = new HttpHeaders().set("Authorization", token);
//   return this.http.get(this.taskdata, { headers: head_obj });
// }

}
