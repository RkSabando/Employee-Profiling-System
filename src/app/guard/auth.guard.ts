import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private auth: AngularFireAuth
  ){
    this.auth.authState.subscribe(res => {
      if(res){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }
isLoggedIn:boolean = false;
  canActivate(){
    if(this.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
    
  
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
