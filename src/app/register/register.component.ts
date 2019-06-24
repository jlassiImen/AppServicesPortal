import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

import { SimpleLoginService } from './../services/auth/simple-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router, private fb: FormBuilder, public simpleLogin: SimpleLoginService) { }
  userDetailsForm: FormGroup;
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
  //valider le formulaire
  createForms() {
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
  //appel du service simpleLogin pour la création du compte utilisateur
  onSubmitUserDetails(value) {
    this.simpleLogin.register(value).subscribe((response) => {
      if (response.message == "success") {
        localStorage.setItem('currentUser', "login");
        this.router.navigateByUrl('/meteo');
      }
      else {
        alert("Invalid credentials");
      }
    }, (err) => {
      console.error(err);
    });
  }


}
