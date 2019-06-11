import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { SimpleLoginService } from './../services/auth/simple-login.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  constructor(private fb: FormBuilder,public simpleLogin: SimpleLoginService) {     
  }

  userDetailsForm: FormGroup;

  validation_messages = { 
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  }
  ngOnInit() :void {
     this.createForms();
  }
  
  createForms() {
    this.userDetailsForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))    
    })
  }

  onSubmitUserDetails(value){
    this.simpleLogin.resetPassword(value).subscribe((response) => {
 // to be continued !!!!!!!!!!!!!!!!!!!
 alert(JSON.stringify(response));
    }, (err) => {
      console.error(err);
    });
  }

}
