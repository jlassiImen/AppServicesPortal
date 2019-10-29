import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { TransportService } from './../services/transport/transport.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.css']
})
export class TransportDetailsComponent implements OnInit {

  transportId="";
  transportDetails: any;
  transportReviews: any[];
  photos:[];
  curentDayStart: any;
  curentDayEnd: any;

  priceRange='';


  weekDays=[
    {
      id:0,
      name:"Monday",
      hours:""
    },
    {
      id:1,
      name:"Tuesday",
      hours:""
    },
    {
      id:2,
      name:"Wednesday",
      hours:""
    },
    {
      id:3,
      name:"Thursday",
      hours:""
    },
    {
      id:4,
      name:"Friday",
      hours:""
    },
    {
      id:5,
      name:"Saturday",
      hours:""
    },
    {
      id:6,
      name:"Sunday",
      hours:""
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

  constructor(public router: Router, public auth: AuthService, public transportService: TransportService, private activatedRoute: ActivatedRoute, private _location: Location) { }
  
  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this. transportId = this.activatedRoute.snapshot.queryParamMap.get('transportId');
    console.log("transportId   "+this.transportId);
    this.transportService.getYelpTransportDetails(this. transportId).subscribe((response) => {
      this.transportDetails = response;
     
      this.photos=response.photos;
      var d = new Date();
      var n = d.getDay();

      for (var i=0;i<response.hours[0].open.length;i++){
        var j=response.hours[0].open[i].day;
        var start=response.hours[0].open[i].start;
        var end=response.hours[0].open[i].end;
        start=[start.slice(0, 2), ':', start.slice(2)].join('');
        end=[end.slice(0, 2), ':', end.slice(2)].join('');
        this.weekDays[j].hours=this.weekDays[j].hours+'from '+start+' to '+end+' ';

        if(i==n){
          this.curentDayStart=start;
          this.curentDayEnd=end;
        }
      }

     

      for (var i=0;i<this.weekDays.length;i++){
       if(this.weekDays[i].hours =='')
        this.weekDays[i].hours='closed';
      }



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

  this.transportService.getYelpTransportReviews(this. transportId).subscribe((response) => {
      this.transportReviews = response.reviews;

    //  console.log("bbbbbbbbbbbbbbbbbbbbbbb   "+JSON.stringify(response));

  });
}
}
