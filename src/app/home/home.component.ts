import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  
  constructor(public auth: AuthService, private router: Router) { }
   
  ngOnInit() {

  }

 title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin: 25,
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
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "Everfresh Flowers",
      image: "../../assets/img/scr-img/app-1.jpg"
    },
    {
      text: "Festive Deer",
      image: "../../assets/img/scr-img/app-2.jpg"
    },
    {
      text: "Morning Greens",
      image: "../../assets/img/scr-img/app-3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "../../assets/img/scr-img/app-4.jpg"
    },
    {
      text: "Blue Clear",
      image: "../../assets/img/scr-img/app-5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "../../assets/img/scr-img/app-1.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "../../assets/img/scr-img/app-2.jpg"
    }
  ]
 
}

