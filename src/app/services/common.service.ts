import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  tokenMessage?: Subject<boolean>;
  tokenObservable?: Observable<boolean> = this.tokenMessage?.asObservable();
  constructor(private fb: FormBuilder, private router: Router) { }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): any {
    return localStorage.getItem('token');
  }

  sendTokenMessage(data: boolean): void {
    this.tokenMessage?.next(data);
  }

  getTokenMessage():any {
   return this.tokenObservable;
  }

}