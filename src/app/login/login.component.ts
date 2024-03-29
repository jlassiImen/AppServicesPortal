import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './../services/auth/auth.service';
import { SimpleLoginService } from './../services/auth/simple-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router, private fb: FormBuilder, public simpleLogin: SimpleLoginService) {
    
   }
  userDetailsForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ]
  }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    // user details form validations
    this.userDetailsForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    })
  }

  onSubmitUserDetails(value) {
    this.simpleLogin.authenticate(value).subscribe((response) => {
    //  console.log("jjjjjjjjjjjwwwwwwwwwwwwwwttttttttttttttt           "+JSON.stringify(response));
      if (response.status == 200) {
        localStorage.setItem('userEmail', response.email);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/categories');  
      }
      else {
        this.successMessage = "";
        this.errorMessage = "Invalid credentials";
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "Invalid credentials";
    });
  }


}
