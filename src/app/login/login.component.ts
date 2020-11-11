import { Component, OnInit } from "@angular/core";
import { Loginservice } from "./Loginservice";
import { Globals } from "../globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
 export class LoginComponent implements OnInit {
  isLoggedIn = true;
  @ViewChild('alert', { static: true }) alert: ElementRef;
  constructor(public loginservice: Loginservice, public globals: Globals, private router: Router, public authService: AuthService) { }
  returnUrl: string;
  name = "";
  password = "";
  id = "";

  signIn() {


  }

  private setGlobals(response) {
    this.globals.userId = response.data.userId;
    this.globals.userName = response.data.name;
    this.id = response.data.userId
  }

  ngOnInit() {
    this.returnUrl = '/home';
    this.authService.logout();


  }
 
  login() {
 
    var data = {
      name: this.name,
      password: this.password,
      id:this.id
    };
    this.loginservice.signIn(data).then(response => {
      console.log(response.data)
      if (data.name == response.data.name && data.password == response.data.password) {
        alert("successful login")

        this.setGlobals(response);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('name', data.name);
        localStorage.setItem('pass', data.password);
        localStorage.setItem('userId', response.data.userId);

        this.router.navigate([this.returnUrl]);
        
      }

     else{
      this.isLoggedIn = false
   

     }
    });
  }
  closeAlert() {
  this.isLoggedIn = true
   // this.alert.nativeElement.classList.remove('show');
  }
}


