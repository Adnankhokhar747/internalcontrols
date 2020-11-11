import { Component, OnInit } from "@angular/core";
import { Globals } from "../globals";
import { AuthService } from '../auth.service';
import {Signupservice} from "src/app/signup/Signupservice";
import { NgxSpinnerService } from "ngx-spinner";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
declare var $: any 

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})


export class NavbarComponent implements OnInit {
  addUSerOption = false;
  signUpUserName = "";
  signUpEmail = "";
  signUpCity = "";
  signUpCurency ="";
  signUpPassword = "";
  signUpRepeatPassword = "";
  signUpUserType = "";
  signUpContact = "";
  signUpAddress = "";
  signUpCompany ;
  
  constructor(public globals: Globals ,public authService: AuthService ,private router: Router, public Signupservice: Signupservice , private spinner: NgxSpinnerService) {
  
  }
  name = localStorage.getItem('name');
  userId = localStorage.getItem('userId');
  
  SignUp(){
    this.spinner.show();
    this.signUpCompany = localStorage.getItem('companyId')
    if(this.signUpCompany ==null || this.signUpCompany == 0){
      this.logout();
    }
    
    // var hide = divLoader();
     var data = this.setSignUpFormData();
    
     this.Signupservice.SignUp(data).then(response => {

      this.spinner.hide();
        console.log(response.data)
        alert(response.data);
       var msg = '<div class="alert alert-info"  role="alert" >'+response.data +'</div>';

        $('#companyAddUserResponcePanel').html(msg);
        $('html, body').animate({
          'scrollTop' : $("#companyAddUserResponcePanel").offset().top
      });
        setTimeout(function () {
          $('#companyAddUserResponcePanel .alert').slideToggle();
        }, 6000);
        //$('#infoMessage span').text(JSON.stringify(response.data));
    //    this.router.navigate(['/login']);  
     });
   
 }


 private setSignUpFormData() {
  
    this.signUpUserType = "individual";


  // if(this.globals.paymentSchedule == "trial"){
  //   this.signUpUserType = "trialUser"
  // }

  return {
    name: this.signUpUserName,
    email: this.signUpEmail,
    city: this.signUpCity,
    contactNumber: this.signUpContact,
    companyAddress: this.signUpAddress,
    currency: this.signUpCurency,
    userType: this.signUpUserType,
    password: this.signUpPassword,
    confirmpassword: this.signUpRepeatPassword,
    paymentSchedule: this.globals.paymentSchedule,
    companyId: localStorage.getItem('companyId')
  };
}

  ngOnInit() {
    
    this.signUpCompany = this.globals.companyId;

    if(localStorage.getItem('userType') == "company" ){
      $('#addUSerOption').show();
      
    }
    else{
      $('#addUSerOption').hide();
    }
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  

  ngDoCheck(): void {
    if (this.name != this.globals.userName) {
      // this.name = this.globals.userName;
      this.name = localStorage.getItem('name')
    }

  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    localStorage.removeItem('name')
    localStorage.removeItem('pass')
    localStorage.clear();
    this.router.navigate(['/landing']);

  }
}
