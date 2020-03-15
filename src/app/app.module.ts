import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
    apiKey: "AIzaSyDcZ518X59VoYmJRcspes4B18ByNswUeXs",
    authDomain: "employee-profiling-system.firebaseapp.com",
    databaseURL: "https://employee-profiling-system.firebaseio.com",
    projectId: "employee-profiling-system",
    storageBucket: "employee-profiling-system.appspot.com",
    messagingSenderId: "261552848852",
    appId: "1:261552848852:web:2bc3b74e088a94d51be041",
    measurementId: "G-D69KNZTMF1"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
