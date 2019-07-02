import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SimpleLoginService } from '../services/auth/simple-login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router, private fb: FormBuilder, public simpleLogin: SimpleLoginService) { }
  userDetailsForm: FormGroup;
  successMessage = '';
  errorMessage = '';
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
    ]
  }


  ngOnInit() {
    this.createForms();
  }
  createForms() {
    // user details form validations
    this.userDetailsForm = this.fb.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required
      ])),
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
      if (response.message == "success") {
        localStorage.setItem('currentUser', "login");
        this.router.navigateByUrl('/categories');
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
}
