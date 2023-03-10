import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { TaskManagementPortalComponent } from './task-management/task-management-portal/task-management-portal.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { UserManagementPortalComponent } from './task-management/user-management-portal/user-management-portal.component';
import { DelayResolver } from './delay-resolver';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
// { path: '', component:TaskManagementComponent }
  { path: '', component: LoginComponent, resolve: {data: DelayResolver }},
  { path: 'task-management', component:TaskManagementComponent, resolve: {data: DelayResolver }},
  { path: 'task-management-portal', component:TaskManagementPortalComponent, resolve: {data: DelayResolver }},
  { path: 'user-management-portal', component:UserManagementPortalComponent, resolve: {data: DelayResolver }},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
