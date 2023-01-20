import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private commonService: CommonService, private route:Router, private activatedRoute: ActivatedRoute) { }

  canActivate() {
  if (this.commonService.isLoggedIn()) {
    if (this.route.url === '/login') {
      this.route.navigate(['/task-management']);
      return false;
    }
    return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
  
  
}
