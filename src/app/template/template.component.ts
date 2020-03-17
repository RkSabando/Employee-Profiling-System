import { Component, OnInit } from '@angular/core';


import { 
  faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
faBars=faBars;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  expandSideNav:boolean = true;
  showSideNavText:boolean = true;
  toggleSideNav(){
    this.expandSideNav = !this.expandSideNav;
    let that = this;
    if(this.showSideNavText){
      this.showSideNavText = false;
    }
    else{
      // that.showSideNavText = true;
      setTimeout(() => {
        that.showSideNavText = true;
      }, 50);
    }

  }

  logout(){
    
    this.auth.logout();
  }

}
