import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [  

  { path: '', pathMatch: 'full',redirectTo: 'dashboard'},  
  { path: 'dashboard', component: TemplateComponent , canActivate:[AuthGuard]  },  
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
