import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { AuthGuard } from './services/auth.guard';
import { UserClientInfoComponent } from './components/user-client-info/user-client-info.component';
export const USER_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'reset-password', component: PasswordResetComponent },
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'client-info', component: UserClientInfoComponent, canActivate: [AuthGuard]},
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
