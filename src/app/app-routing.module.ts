import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  { path: 'registration', 
    component: RegistrationComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent


  }


];


export default routes;
