import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { RestorationService } from './../services/restoration/restoration.service';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantId="";
  restaurantDetails: any;
  restaurantReviews: any[];
  photos:[];
  curentDay: any;

  priceRange='';
  mondayHours='';
  tuesdayHours='';
  wednesdayHours='';
  thursdayHours='';
  fridayHours='';
  saturdayHours='';
  sundayHours='';

  weekDays=[
    {
      id:0,
      name:"Monday"
    },
    {
      id:1,
      name:"Tuesday"
    },
    {
      id:2,
      name:"Wednesday"
    },
    {
      id:3,
      name:"Thursday"
    },
    {
      id:4,
      name:"Friday"
    },
    {
      id:5,
      name:"Saturday"
    },
    {
      id:6,
      name:"Sunday"
    },
  ]
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

  

  


  constructor(public router: Router, public auth: AuthService, public restoration: RestorationService, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this. restaurantId = this.activatedRoute.snapshot.queryParamMap.get('restaurantId');
    console.log("restaurantId   "+this.restaurantId);
    this.restoration.getYelpRestaurantsDetails(this. restaurantId).subscribe((response) => {
      this.restaurantDetails = response;
      
      this.photos=response.photos;
      var d = new Date();
      var n = d.getDay();

    //  for (i=0;i<response.hours[0].open.length;i++){

     // }
      this.curentDay=response.hours[0].open[n];


      if(response.price == '€'){
        this.priceRange='<10€'
      }
      if(response.price == '€€'){
        this.priceRange='11-20€'
      }
      if(response.price == '€€€'){
        this.priceRange='21-30€'
      }
      if(response.price == '€€€€'){
        this.priceRange='>31€'
      }



    //  console.log("aaaaaaaaaaaaaaa   "+JSON.stringify(response));
  });

  this.restoration.getYelpRestaurantsReviews(this. restaurantId).subscribe((response) => {
      this.restaurantReviews = response.reviews;

    //  console.log("bbbbbbbbbbbbbbbbbbbbbbb   "+JSON.stringify(response));

  });
}
}