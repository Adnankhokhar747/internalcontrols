import { Component, OnInit } from "@angular/core";
import { Signupservice } from "./Signupservice";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { allResolved } from "q";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
   constructor(public signupservice:Signupservice, public globals: Globals, private router: Router) {}
   isLoggedIn = true;
   isEmpty = true;
   isNotmatched = true;
   isPEmpty = true;

   name = "";
   password = "";
   Confirmpassword = "";
   ngOnInit() {

     }
 
    SignUp(){
    var data = {
      name: this.name ,
      password: this.password,
      confirmpassword: this.Confirmpassword,
    };
     if(this.name == "")
    {
      this.isEmpty =false
    }
    else if(this.password =="" && this.Confirmpassword=="")
    {
      this.isPEmpty =false
    }
    else if((this.password) != (this.Confirmpassword))
    {
      this.isNotmatched =false
    }
    else{
    
    this.signupservice.SignUp(data).then(response => {
       this.isLoggedIn = false
       alert(response.data)
       console.log(response.data)
       this.router.navigate(['/login']);  
    });

  }
}
  closeAlert() {
    this.isLoggedIn = true
    this.isEmpty = true
    this.isPEmpty = true
    this.isNotmatched = true;

    }
}