import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { environment } from '../../environments/environment';
import { HotelsService } from './../services/hotels/hotels.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as places from 'places.js';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http' ;



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

hotelsList: any[];

  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public hotelsService: HotelsService, public meteo: MeteoService, private httpClient : HttpClient) { }



  ngOnInit() {
  var req = {
      "location": "16 rue des acacias meudon france",
      "term": "hotel",
      "categories":" " ,
      "price": " ",
      "sort_by": " " ,
      "radius": " "
    }
  this.hotelsService.getYelpHotels(req).subscribe((response) => {
      this.hotelsList = response;});
  }

  goToHotelDetails(hotel){
    this.router.navigateByUrl('/hotelDetails?hotelId='+hotel.id); 
  }
}
