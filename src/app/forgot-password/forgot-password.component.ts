import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { SimpleLoginService } from './../services/auth/simple-login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  constructor(private fb: FormBuilder, public simpleLogin: SimpleLoginService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  userDetailsForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  routeType = "forgotPassword";
  userId = "";
  resetToken = "";

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
  ngOnInit(): void {

    this.successMessage = '';
    this.errorMessage = '';

    if (this.router.url.indexOf('resetPassword') > 0) {
      this.routeType = "resetPassword";
      this.userId = this.activatedRoute.snapshot.queryParamMap.get('userId');
      this.resetToken = this.activatedRoute.snapshot.queryParamMap.get('resetToken');

      this.createResetPasswordForms();
    }
    else {
      this.createForgotPasswordForms();
    }

  }

  createForgotPasswordForms() {
    this.userDetailsForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    })
  }

  createResetPasswordForms() {
    this.userDetailsForm = this.fb.group({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    })
  }


  onSubmitForgotPasswordForm(value) {
    this.simpleLogin.forgotPassword(value).subscribe((response) => {
      if (response.message == "success") {
        this.errorMessage = "";
        this.successMessage = "An email that contains a link to reset your password has been sent ! Please verify your email";
      }
      else {
        this.successMessage = "";
        this.errorMessage = "An error has occured,please retry later";
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "An error has occured,please retry later";
    });
  }

  onSubmitResetPasswordForm(value) {
    var request = {
      "userId": this.userId,
      "resetToken": "" + this.resetToken,
      "password": value.password
    }
    this.simpleLogin.resetPassword(request).subscribe((response) => {
      if (response.status == "200") {
        this.errorMessage = "";
        this.successMessage = "Your password has been updated successfuly";
      }
      else {
        this.errorMessage = "An error has occured,please retry later";
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "An error has occured,please retry later";
    });
  }

}
