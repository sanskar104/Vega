import { Component, OnInit } from '@angular/core';
import { SignupVal } from "./signup.model";
import { SignupService } from "../signup.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  model=new SignupVal('','','');
  loginUrl=window.location.origin+"/login";
  signupUrl=window.location.origin+"/signup";
  goToLogin() {
    this.myRoute.navigate(['login']);
  }
  constructor(private signupService:SignupService,private myRoute:Router) {

   }
  ngOnInit() {
  document.getElementById("mNav").style.display = "none";

  }

}
