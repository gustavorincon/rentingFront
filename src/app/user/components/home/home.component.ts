import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService,  
    private router: Router) { }

  ngOnInit(): void {
  }


  logout(){
    try{
      this.authService.logout()
      this.router.navigate(['/renta/usuario/login'])
    }
    catch (error) {  
      console.log('ERROR logout: ', error);  
    } 
    
  }

}
