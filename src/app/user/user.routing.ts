import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
export const USER_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'reset-password', component: PasswordResetComponent },
];

@NgModule({
    imports: [RouterModule.forChild(USER_ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
export class UserRoutingModule {
    constructor(){
        console.log('user');
    }
}
