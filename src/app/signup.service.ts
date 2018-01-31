import 'rxjs/Rx';﻿
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
declare var $: any;
@Injectable()
export class SignupService {
  loginURL='';
  signups=false;
  signupError=false;
  signupErrorMsg='';
  constructor(private http:Http) { }

  signupData(username,pass){
  //  alert("signup");
    //document.getElementById("username").value="";
    const userdata= {
      "name":username,
      "password":pass
    };
    console.log(userdata);
    
    
    

                  
                    this.signups=true;
                    $("#signupForm input").val("");
                    this.loginURL=window.location.origin+"/login";
                  

                
                
              
  }

}
