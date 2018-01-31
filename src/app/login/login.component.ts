import { Component, OnInit } from '@angular/core';
import { LoginVal } from "./login.model";
import { LoginService } from "../login.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model=new LoginVal('','');
  loginUrl=window.location.origin+"/login";
  signupUrl=window.location.origin+"/signup";
  getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
   }
  chceckAuth(){
      if(this.getCookie("authorization")) {
        this.myRoute.navigate(['search']);
      }
  }
  goToSignup() {
    this.myRoute.navigate(['signup']);
  }
  constructor(private loginService:LoginService,private myRoute:Router) {
    this.chceckAuth();
   }

  ngOnInit() {
  document.getElementById("mNav").style.display = "none";

  }
  //get currentVal(){
    //return JSON.stringify(this.model)
  //}

}
