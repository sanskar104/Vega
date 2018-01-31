;
import { AssignmentComponent } from './assignment/assignment.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";
import { AppComponent } from './app.component';
import {LoggingService} from './logging.service';
import {LoginService} from './login.service';
import {SignupService} from './signup.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EqualValidator } from './equal-validator.directive';

// import '../../node_modules/angular2-polyfill/bundles/angular2-polyfill';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EqualValidator,
     AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [LoggingService,LoginService,SignupService],
  bootstrap: [AppComponent]
})

export class AppModule { }
