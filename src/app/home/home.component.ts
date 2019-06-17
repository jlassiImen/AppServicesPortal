import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {

  }

 title = 'App screenshots';

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

  screenshots = [
    {
      image: "../../assets/img/scr-img/app-1.jpg"
    },
    {
      image: "../../assets/img/scr-img/app-2.jpg"
    },
    {
      image: "../../assets/img/scr-img/app-3.jpg"
    },
    {
      image: "../../assets/img/scr-img/app-4.jpg"
    },
    {
      image: "../../assets/img/scr-img/app-5.jpg"
    }
  ]

  clients = [
    {
      image: "../../assets/img/bg-img/client-1.jpg",
      text:"oooooooooooooo "
    },
    {
      image: "../../assets/img/bg-img/client-2.jpg",
      text:"aaaaaaaaaaaaa"
    },
    {
      image: "../../assets/img/bg-img/client-3.jpg",
      text:"bbbbbbbbbbbb"
    },
    {
      image: "../../assets/img/bg-img/client-1.jpg",
      text:"ccccccccccccccc"
    },
    {
      image: "../../assets/img/bg-img/client-2.jpg",
      text:"yyyyyyyyyyy"
    }
  ]



}
