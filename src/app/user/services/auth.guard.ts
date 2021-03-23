import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,  
    private router: Router) { }  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      this.authService.isLogged().then(
        (val) => {
            if(!val){
              console.log('authService val ', val )
              this.router.navigate(['/renta/usuario/login'])
            }            
          }
      );

      return this.authService.isLogged()
    
  }
  
}
