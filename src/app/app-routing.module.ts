import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { TaskManagementPortalComponent } from './task-management/task-management-portal/task-management-portal.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { UserManagementPortalComponent } from './task-management/user-management-portal/user-management-portal.component';

const routes: Routes = [
// { path: '', component:TaskManagementComponent }
  { path: '', component: LoginComponent},
  { path: 'task-management', component:TaskManagementComponent },
  { path: 'task-management-portal', component:TaskManagementPortalComponent},
  { path: 'user-management-portal', component:UserManagementPortalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
