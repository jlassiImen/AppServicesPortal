import { Component, OnInit } from '@angular/core';
import { SimpleLoginService } from './../services/auth/simple-login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(public simpleLogin: SimpleLoginService, private activatedRoute: ActivatedRoute, public router: Router) { }

  successMessage = '';
  errorMessage = '';
  userId = "";
  tokenId = "";
  ngOnInit() {
    this.successMessage = '';
    this.errorMessage = '';

      this.userId = this.activatedRoute.snapshot.queryParamMap.get('userId');
    this.tokenId = this.activatedRoute.snapshot.queryParamMap.get('tokenId');
    this.verifyConfirmation();
    
  }
  verifyConfirmation() {
    var request = {
      "userId": this.userId,
      "tokenId": "" + this.tokenId
    }
    this.simpleLogin.confirmationRegister(request).subscribe((response) => {
      if (response.status == "200") {
        this.errorMessage = "";
        this.successMessage = "Your account has been verified,you can now login";
      }
      else {
        this.errorMessage = response.message;
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "An error has occured,please retry later";
    });
  }
}
