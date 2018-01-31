import 'rxjs/Rx';﻿
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
declare var $: any;
@Injectable()
export class LoggingService {
   messgeupdate=false;
   msgadded=false;
   msgadderror=false;


  constructor(private http:Http) { }

  fetchData(){
    console.log(localStorage.getItem('usernamelog'));
  // return this.http.get('/data.json').map(
    // (res) => res.json()
   //)
   console.log("dataFetched");
  
  }
  getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
   }
  



  updateEmployee(empnameval,positionval,empidval,locationval,emailval,assingnmentval) {
    //alert(empnameval+"  "+positionval+"  "+empidval+"  "+locationval+"  "+emailval+"  "+assingnmentval);
    const imagepathUpdate=$(".emp-pic-upload").attr("src");
    const empdataup= {
      name:empnameval,
      position:positionval,
      empid:empidval,
      location:locationval,
      email:emailval,
      assignment:assingnmentval,
      imageData:imagepathUpdate,
      
    };
    console.log(empdataup);
    let header=new Headers();
    header.append('Content-type','application/json;charset=utf-8');
    
  }


  addEmpInfo(empnameval,positionval,empidval,locationval,emailval,assingnmentval) {
    //alert(empnameval+"  "+positionval+"  "+empidval+"  "+locationval+"  "+emailval+"  "+assingnmentval);
    const imagepath=$("#imageBlob").val();
    console.log(imagepath);
    const empdata= {
      name:empnameval,
      position:positionval,
      empid:empidval,
      location:locationval,
      email:emailval,
      assignment:assingnmentval,
      imageData:imagepath,
      
    };
    console.log(empdata);
    let header=new Headers();
    header.append('Content-type','application/json;charset=utf-8');
    
  }

  log(){
    console.log("call from service");
  }

}
