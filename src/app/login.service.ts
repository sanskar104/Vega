import 'rxjs/Rx';﻿
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()

export class LoginService {
  loginError=false;
  loginErrorMsg="";
  userName;
  constructor(private http:Http,private myRoute:Router) { }
  loginValidate(user,pass) {

      const userdata= {
        name:user,
        password:pass
      };
    function toTimestamp(strDate){
         var datum = Date.parse(strDate);
         return datum/1000;
      }


     const header=new Headers();
      header.append('Content-type','application/json;charset=utf-8');
      //  header.append('data-type','json');
      let that=this;
      this.http.get('data.json').subscribe(
        data=>{
          
          JSON.parse(data["_body"]).map( function(item){
            if(item.name==userdata.name && item.password==userdata.password)
            
          {
            that.myRoute.navigate(['search']);
          
          }
          } 
        )
      
      },
  
        error=>{console.log("Error")}
      )
                

  }




}
