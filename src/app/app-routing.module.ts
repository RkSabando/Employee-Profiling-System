import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [  

 
  { path: '', component: TemplateComponent , canActivate:[AuthGuard],canActivateChild: [AuthGuard],
      children:[
        { path: '', pathMatch: 'full',redirectTo: 'dashboard'},  
        { path: 'dashboard', component: DashboardComponent},
        { path: 'employees', component: EmployeesComponent},
        { path: 'settings', component: SettingsComponent},
      ]
  },  
  { path: 'login', component: LoginComponent },  

];  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
