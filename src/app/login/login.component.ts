import { Component, OnInit } from '@angular/core';
import { 
  faEye, 
  faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPass=false;
  passType="password"

  constructor(
    private auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  togglePass(){
    this.showPass = !this.showPass;
    this.passType = this.passType == 'password' ? 'text' : 'password';
  }

  signInUser(){
  
  }

}
