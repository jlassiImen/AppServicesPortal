import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantDetailsComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  title = 'App screenshots';

  carouselOptions = {
    margin: 25,
    loop: true,
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

  screenshots = [
    {
      image: "../../assets/img/restaurant/1.jpg"
    },
    {
      image: "../../assets/img/restaurant/10.jpg"
    },
    {
      image: "../../assets/img/restaurant/11.jpg"
    },
    {
      image: "../../assets/img/restaurant/9.jpg"
    },
    {
      image: "../../assets/img/restaurant/8.jpg"
    }
  ]


}
