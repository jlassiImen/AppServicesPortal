import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SimpleLoginService } from './../services/auth/simple-login.service';
import { PaymentService } from './../services/payment/payment.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router, private fb: FormBuilder, public simpleLogin: SimpleLoginService, public payment: PaymentService) { }
  userDetailsForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  user='';
  validation_messages = {
    'firstName': [
      { type: 'required', message: 'first name is required' }
    ],
    'lastName': [
      { type: 'required', message: 'last name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'adress': [
      { type: 'required', message: 'last name is required' }
    ]
  }
  ngOnInit() {
   this.createform(this.user);
  }
createform(value){
     this.simpleLogin.getUser(value).subscribe((response) => {
      if (response.message == "success") {
        localStorage.setItem('currentUser', "login");                                                                             
      }
      else {
        this.successMessage = "";
        this.errorMessage = "Invalid credentials";
      }
    });
     this.payment.getPayment(value).subscribe((response) => {
      if (response.message == "success") {
        localStorage.setItem('currentUser', "login");                                                                             
      }
      else {
        this.successMessage = "";
        this.errorMessage = "Invalid credentials";
      }
    });
}
  onSubmitUpdatePassword(value) {
    this.simpleLogin.updatePassword(value).subscribe((response) => {
      if (response.message == "success") {
        localStorage.setItem('currentUser', "login");
      }
      else {
        this.successMessage = "";
        this.errorMessage = "Invalid credentials";
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "An error has occured,please retry later";
    });
  }


  onSubmitPersonnelProfil(value) {
    return true;
  }

  onSubmitPaiement(value) {
    return true;
  }
}
