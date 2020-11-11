import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { Globals } from './globals'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  
}
