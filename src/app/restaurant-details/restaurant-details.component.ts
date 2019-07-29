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
  restaurantDetails: any[];
  restaurantReviews: any[];

  constructor(public router: Router, public auth: AuthService, public restoration: RestorationService, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    this. restaurantId = this.activatedRoute.snapshot.queryParamMap.get('restaurantId');
    console.log("restaurantId   "+this.restaurantId);
    this.restoration.getYelpRestaurantsDetails(this. restaurantId).subscribe((response) => {
      this.restaurantDetails = response;
      console.log("aaaaaaaaaaaaaaa   "+JSON.stringify(response));
  });

  this.restoration.getYelpRestaurantsReviews(this. restaurantId).subscribe((response) => {
      this.restaurantReviews = response;
      console.log("bbbbbbbbbbbbbbbbbbbbbbb   "+JSON.stringify(response));
  });
}
}