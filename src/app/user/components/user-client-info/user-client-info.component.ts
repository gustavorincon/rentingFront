import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
        gender: ['', Validators.requiredTrue],
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
    this.registerForm.get(['birthDate']).value);
  }
  
 
  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      this.clientManagerService.create(this.getClientModelForm())
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }



}
