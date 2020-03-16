import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms'


import { 
    faEye, 
    faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToasterService } from '../services/toaster.service';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guard/auth.guard';
import { Router } from '@angular/router';
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
  public userLoginForm: FormGroup;
  
  
  constructor(
    private auth: AuthService,
    private formbuilder: FormBuilder,
    private toast: ToasterService,
    private authGuard: AuthGuard,
    private router: Router
    ) { 
      
    }
    
    ngOnInit(): void {
      this.formBuild();
    }
    
    togglePass(){
      this.showPass = !this.showPass;
      this.passType = this.passType == 'password' ? 'text' : 'password';
    }
    
    signInUser(){
       if(this.userLoginForm.controls.email.value && this.userLoginForm.controls.password.value){
         if(this.email_pattern.test(this.userLoginForm.controls.email.value)){
          this.auth.login(
            this.userLoginForm.controls.email.value,
            this.userLoginForm.controls.password.value
          ).then(() => {
            this.authGuard.isLoggedIn = true;
            this.router.navigate(['']);

          }).catch(err => {
            console.log(err);
          })
         }
         else{
          this.toast.showWarning('Invalid email address!');
         }
       }
       else{
        this.toast.showWarning('All fields are required!');
       }

       this.auth.logout();
      
    }
    


    email_pattern = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    formBuild(){
      this.userLoginForm = this.formbuilder.group({
        email: new FormControl("",
          Validators.compose([
            Validators.required,
            Validators.pattern(this.email_pattern),
            Validators.maxLength(70)
          ])
        ),
        password: new FormControl("", 
          Validators.compose([
            Validators.required,
            Validators.maxLength(70)
          ])
        )

      })
    }
  }
  