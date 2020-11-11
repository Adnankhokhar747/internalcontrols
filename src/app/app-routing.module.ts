import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guarrd'
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
