import { Component, OnInit } from '@angular/core';
import { Loginservice } from "src/app/login/Loginservice";
import { Globals } from "../globals";
import {ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Signupservice} from "src/app/signup/Signupservice";
import {ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

declare var $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
 // for validator if field is empty
  validatorSignUp = true;
  validatorSignIn = true;
  //validator end
  isLoggedIn = true;
  returnUrl: string;
// for sign up variables
  signUpUserName = "";
  signUpEmail = "";
  signUpCity = "";
  signUpPassword = "";
  signUpRepeatPassword = "";
  signUpContact = "";
  signUpAddress = "";

  //for logging in variables
  signInName = "";
  signInPassword = "";
  signInId = "";
  constructor(public loginservice: Loginservice, public globals: Globals, private router: Router, public authService: AuthService, public Signupservice: Signupservice, private cd : ChangeDetectorRef , private spinner: NgxSpinnerService) { }

  SignUp(){
    
   // var hide = divLoader();
    this.checkSignUpEmptyFields();
    var data = this.setSignUpFormData();
    if(this.validatorSignUp){
      this.spinner.show();
    this.Signupservice.SignUp(data).then(response => {
      this.spinner.hide();
    //  hide();
      $('#logreg-forms .form-signup').toggle();
      $('#logreg-forms .form-signin').toggle();
      this.isLoggedIn = false
       console.log(response.data)
   //    this.router.navigate(['/login']);  
    });
  }
  else{
    this.validatorSignUp = false
    //div to be hidden here
  }
}

  login() {
    
    this.checkSignInEmptyFields();
    //var hide = divLoader();
    var data = {
      name: this.signInName,
      password: this.signInPassword,
      id:this.signInId
    };
   
    $('#exampleModal').css('z-index','-1 !important');
    if(this.validatorSignIn){
    this.spinner.show();
    this.loginService(data);
    }
    else{
      this.validatorSignIn = false
      //loader to be hidedn here
    }
  }

  private loginService(data: { name: string; password: string; id: string; }) {
    //$('#exampleModal').css('z-index','-1 !important');
    this.loginservice.signIn(data).then(response => {
      this.spinner.hide();
      console.log(response.data);
      if(response.data == null){
        var msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >UserName or Password is invalid</div>';
        $('#signInResponsePanel').html(msg);
        setTimeout(function () {
          $('#signInResponsePanel .alert').slideToggle();
        }, 6000);
      }
      if (data.name == response.data.name && data.password == response.data.password) 
      {
        
        $('.modal-backdrop').toggle();
        
        //$('#exampleModal').hide();
        this.setGlobals(response);
        setLocalStorageVariable(response, data);
        this.router.navigate([this.returnUrl]);
        showAddUserOptionInNavBar();
        $('.modal-backdrop').attr('style','display:none !important');
        $('body').css({'overflow':'auto','padding-right':'0px'});
     //   this.getUserDetails();
      }

      else {
        this.isLoggedIn = false;
      }
      //$('.modal-backdrop').attr('style','display:none !important');
    });
  }

  private getUserDetails() {
    var getUserData = {
      userId: this.globals.userId
    };

    this.loginservice.getUserData(getUserData).then(response => {
      //  hide();
      console.log(response.data);
      alert(JSON.stringify(response.data));
    });
  }

  bronzeClick() {
    this.globals.paymentSchedule = "bronze";
    };
  silverClick() {
    this.globals.paymentSchedule = "silver";
    };
  goldClick() {
    this.globals.paymentSchedule = "gold";
    };
  trialClick() {
    this.globals.paymentSchedule = "trial";
    };

    closeAlert() {
      this.validatorSignIn = true;
      this.validatorSignUp = true;
       // this.alert.nativeElement.classList.remove('show');
      }
    private setSignUpFormData() {
  
      // if(this.globals.paymentSchedule == "trial"){
      //   this.signUpUserType = "trialUser"
      // }

      return {
        name: this.signUpUserName,
        email: this.signUpEmail,
        city: this.signUpCity,
        contactNumber: this.signUpContact,
        companyAddress: this.signUpAddress,
        password: this.signUpPassword,
        confirmpassword: this.signUpRepeatPassword,
        paymentSchedule: this.globals.paymentSchedule,
        companyId: this.globals.companyId
      };
    }

    private setGlobals(response) {
      this.globals.userId = response.data.userId;
      this.globals.userName = response.data.name;
      this.signInId = response.data.userId
      this.globals.companyId = response.data.companyId
    }
    private checkSignInEmptyFields() {
      if (this.signInName == "" || this.signInPassword == "") {
        this.validatorSignIn = false;
        var msg = '<div class="alert alert-danger"  id = "saveSuccess" role="alert" >Please Fill up All fields</div>';
        $('#signInResponsePanel').html(msg);
        setTimeout(function () {
          $('#signInResponsePanel .alert').slideToggle();
        }, 6000);
      }
      else{
        this.validatorSignIn = true;
      }
    }
    private checkSignUpEmptyFields() {
      if (this.signUpUserName == "" || this.signUpPassword == "" || this.signUpRepeatPassword == ""|| this.signUpCity == ""|| this.signUpContact == "") {
       
        this.validatorSignUp = false;
        var msg = '<div class="alert alert-danger  id = "saveSuccess" role="alert" >Please Fill up All fields</div>';
        $('#signUpResponsePanel').html(msg);
        setTimeout(function () {
          $('#signUpResponsePanel .alert').slideToggle();
        }, 6000);
      }
      else{
        this.validatorSignUp = true;
      }
    }
  divLoader() {
    var myDiv = document.getElementById("overlaylogin"),

        showww = function() {
            myDiv.style.display = "block";
            setTimeout(hide, 500); // 5 seconds
        },

        hide = function() {
            myDiv.style.display = "none";
        };

    showww();
};

  ngOnInit() {


    this.divLoader();
    this.returnUrl = '/home';
    this.authService.logout();
    //pass
    $('#user-pass, #user-repeatpass').on('keyup', function () {
      if ($('#user-pass').val() == $('#user-repeatpass').val()) {
        $('#message').html('Matching').css('color', 'green');
      } else 
        $('#message').html('Not Matching').css('color', 'red');
    });
    //pass

    $('.modal-backdrop').hide();

    (function($) {
    
    });
    
    $( document ).ready(function() {
      $('#mainNavBar').hide();
  });
  }
}
function setLocalStorageVariable(response, data: { name: string; password: string; id: string; }) {
  localStorage.setItem('isLoggedIn', "true");
  localStorage.setItem('userType', response.data.userType);
  localStorage.setItem('name', data.name);
  localStorage.setItem('pass', data.password);
  localStorage.setItem('userId', response.data.userId);
  localStorage.setItem('paymentSchedule', response.data.paymentSchedule);
  localStorage.setItem('companyId' , response.data.companyId);
}

function showAddUserOptionInNavBar() {
  if (localStorage.getItem('userType') == "company") {
    $('#addUSerOption').show();
    $('#firstTimeAdoptionTab').hide();
    

  }
  else {
    $('#addUSerOption').hide();
  }
}

function divLoader() {
  var myDiv = document.getElementById("overlaylogin"),

    showww = function () {
      myDiv.style.display = "block";
      //setTimeout(hide, 2000); // 5 seconds
    },
    hide = function () {
      myDiv.style.display = "none";
    };

  showww();
  return hide;
}

function getUserSavedData(userId) {

 
}

