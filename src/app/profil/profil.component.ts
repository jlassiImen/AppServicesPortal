import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SimpleLoginService } from './../services/auth/simple-login.service';
import { PaymentService } from './../services/payment/payment.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //pour l'optimisation du site
})
export class ProfilComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router, private fb: FormBuilder, public simpleLogin: SimpleLoginService, public payment: PaymentService) { }

 userDetailsFormAcount: FormGroup;
 userDetailsFormProfile: FormGroup;

  successMessage = '';
  errorMessage = '';
  firstName='';
  lastName='';
  email='';
  adress='';

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
     this.getUserDetails();
     this.createFormsAcount();
     this.createFormsProfile();
  }
  getUserDetails(){
  var email=localStorage.getItem('userEmail');  
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx" + email);
  this.simpleLogin.getUser(email).subscribe((response) => {
  console.log("aaaaaaaaaaa" + JSON.stringify(response));
      if (response.status == 200) {
        this.firstName=response.message.firstName;
        this.lastName=response.message.lastName;
        this.email=response.message.email;       
        this.adress=response.message.adress;    
        console.log(response.message.firstName);                                                                 
      }
    });
  }

createFormsAcount() {
    // user details form validations
    this.userDetailsFormAcount = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      oldPassword: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
       newPassword: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    })
  }

  createFormsProfile() {
    // user details form validations
    this.userDetailsFormProfile = this.fb.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adress: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }
     
  onSubmitUpdatePassword(value) {
    this.simpleLogin.updatePassword(value).subscribe((response) => {
      if (response.message == "success") {
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

  onSubmitPayment(value) {
    return true;
  }

}
