import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { SimpleLoginService } from './services/auth/simple-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navbarOpen = false;
  userName='';
  constructor(public auth: AuthService, public router: Router, public simpleLogin: SimpleLoginService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
    if(this.simpleLogin.isLoggedIn()){
      this.userName=localStorage.getItem('firstName');
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  carouselOptions = {
    margin: 25,
    loop:true,
    autoplay: 1000,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true
      },
      1500: {
        items: 3,
        nav: true
      }
    }
  }
}
