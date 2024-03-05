import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/erp-main/homepage/homepage.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
    { path: 'login', component:LoginComponent },
    { path:'',redirectTo:"login", pathMatch:'full' },
    { path: 'home', component:HomepageComponent },
    { path: 'forgotpassword', component:ForgotPasswordComponent }
];
