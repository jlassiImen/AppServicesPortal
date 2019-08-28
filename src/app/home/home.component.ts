import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
      image: "../../assets/img/team/01.jpg"
    },
    {
      image: "../../assets/img/team/02.jpg"
    },
    {
      image: "../../assets/img/team/03.jpg"
    },
    {
      image: "../../assets/img/team/01.jpg"
    },
    {
      image: "../../assets/img/team/02.jpg"
    }
  ]

  clients = [
    {
      image: ".../../assets/img/bg-img/client-3.jpg",
      text: "Highly recommended! ",
      name:"John"
    },
    {
      image: "../../assets/img/bg-img/client-3.jpg",
      text: "Hello ,I booked 3 tickets via Service Portal, and I am very satisfied with the site which is complete, competitive, compared to other site.Really TOP and responsive",
      name:"Alex"
    },
    {
      image: "../../assets/img/bg-img/client-2.jpg",
      text: "Time saver !",
      name:"Lina"
    },
    {
      image: "../../assets/img/bg-img/client-3.jpg",
      text: "Really very practical. I use it very often: fast and efficient.",
      name:"David"
    },
    {
      image: "../../assets/img/bg-img/client-3.jpg",
      text: "Very good experience ,Super delivery, very fast, wide choice of restaurants, I recommend",
      name:"Raph"
    }
  ]
}
