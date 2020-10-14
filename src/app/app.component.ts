import { Component, OnInit } from '@angular/core';
import { Appservice } from "./Appservice";
import { Globals } from "./globals";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertsModule } from 'angular-alert-module';
import * as $ from 'jquery';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './style.css', './bootstrap.css']
})
export class AppComponent implements OnInit {
   title = 'internalcontrols';
   isLoggedIn = true;
   @ViewChild('alert', { static: true }) alert: ElementRef;
   constructor(public appservice: Appservice, public globals: Globals, private router: Router, public authService: AuthService) { }
   returnUrl: string;
   name: string = "";
   password: string = "";
   emailSignUp: string = "";
   passwordSignUp: string = ""; 

   signIn() {}
 
   jQuery(){
    $('.Company_login').hide();

    // function myFunction() {
    //     var checkBox = document.getElementById("company_checkbox");
    //     var text = document.getElementsByClassName("Company_login");
    //     if (checkBox.checked == true) {
    //         // text.style.display = "block";
    //         $('.Company_login').show();
    //         $('.individual_user_checkbox').hide();
    //     } else {
    //         $('.Company_login').hide();
    //         // text.style.display = "none";
    //     }
    // }

    // function myFunctionIndividual() {
    //     var checkBox = document.getElementById("individual_user_checkbox");
    //     var text = document.getElementsByClassName("individual_user_checkbox");
    //     if (checkBox.checked == true) {
    //         // text.style.display = "block";
    //         $('.individual_user_checkbox').show();
    //         $('.Company_login').hide();
    //     } else {
    //         $('.individual_user_checkbox').hide();
    //         // text.style.display = "none";
    //     }
    // }
    $("input:checkbox").on('click', function() {
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });

    function toggleResetPswd(e) {
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle() // display:block or none
        $('#logreg-forms .form-reset').toggle() // display:block or none
    }

    function toggleSignUp(e) {
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle(); // display:block or none
        $('#logreg-forms .form-signup').toggle(); // display:block or none
    }

    $(() => {
        // Login Register Form
        $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
        $('#logreg-forms #cancel_reset').click(toggleResetPswd);
        $('#logreg-forms #btn-signup').click(toggleSignUp);
        $('#logreg-forms #cancel_signup').click(toggleSignUp);
    });
   }
   private setGlobals(response) {
     this.globals.userId = response.data.userId;
     this.globals.userName = response.data.name;
   }
 
   ngOnInit() {
     this.returnUrl = '/home';
     this.authService.logout();
     var $: any;
 
   }
  
   login() {
    alert("hello");
     var data = {
       name: this.name,
       password: this.password
     };
     alert(JSON.stringify(data));
     this.appservice.signIn(data).then(response => {
       console.log(response.data)
       if (data.name == response.data.name && data.password == response.data.password) {
         alert("successful login")
 
         this.setGlobals(response);
         localStorage.setItem('isLoggedIn', "true");
         localStorage.setItem('name', data.name);
         localStorage.setItem('pass', data.password);
 
         this.router.navigate([this.returnUrl]);
         
       }
 
      else{
       this.isLoggedIn = false
    
 
      }
     });
   }
   closeAlert() {
   this.isLoggedIn = true
   }

   signUp() {
    alert("signUp");
     var data = {
       name: this.emailSignUp,
       password: this.passwordSignUp
     };
     alert(JSON.stringify(data));
     this.appservice.signUp(data).then(response => {
       console.log(response.data)
       if (data.name == response.data.name && data.password == response.data.password) {
         alert("successfully account created")
 
         this.setGlobals(response);
        //  localStorage.setItem('isLoggedIn', "true");
        //  localStorage.setItem('name', data.name);
        //  localStorage.setItem('pass', data.password);
 
         this.router.navigate([this.returnUrl]);
         
       }
 
      else{
       this.isLoggedIn = false
    
 
      }
     });
   }
}
