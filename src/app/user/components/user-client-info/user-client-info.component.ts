import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';
import { ClientManagerService } from '../../services/client-manager/client-manager.service';
import { Client, IClient } from '../../shared/models/client.model';

@Component({
  selector: 'app-user-client-info',
  templateUrl: './user-client-info.component.html',
  styleUrls: ['./user-client-info.component.css']
})
export class UserClientInfoComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private clientManagerService: ClientManagerService,  
    private router: Router) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        idType: ['', Validators.required],
        idNumber: ['', Validators.required],
        firstName: ['', Validators.required],
        secondName: [''],
        firstLastName: ['', Validators.required],
        secondLastName: [''],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', Validators.required],
        gender: ['', Validators.required],
        dniIssuedDate: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  private getClientModelForm(): IClient{
    return new Client(
    this.registerForm.get(['idType']).value,
    this.registerForm.get(['idNumber']).value,
    this.registerForm.get(['firstName']).value,
    this.registerForm.get(['secondName']).value,
    this.registerForm.get(['firstLastName']).value,
    this.registerForm.get(['secondLastName']).value,
    this.registerForm.get(['email']).value,
    this.registerForm.get(['phoneNumber']).value,
    this.registerForm.get(['address']).value,
    this.registerForm.get(['city']).value,
    this.registerForm.get(['gender']).value,
    this.registerForm.get(['dniIssuedDate']).value);
  }
  
 
  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      try {
        this.clientManagerService.create(this.getClientModelForm()).subscribe()
        //this.router.navigate(['renta/usuario/home']);   
      } catch (error) {
        console.log("Error registrando cliente => ",error)
      }
     
  }


  validateExists(dni: string): Observable<boolean>{
    try {
      return this.clientManagerService.get(dni).pipe(map(rest => rest.firstName.length>0))
    } catch (error) {
      console.log("Error validando existencia  cliente => ",error)
    }
    
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }



}
