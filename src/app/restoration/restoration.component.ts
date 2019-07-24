import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { environment } from '../../environments/environment';
import { RestorationService } from './../services/restoration/restoration.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as places from 'places.js';
import * as L from 'leaflet';


@Component({
  selector: 'app-restoration',
  templateUrl: './restoration.component.html',
  styleUrls: ['./restoration.component.css']
})
export class RestorationComponent implements OnInit {

  accessToken = environment.mapBoxKey;
  @Input() q: string;
  @ViewChild('autocomplete') qElementRef: ElementRef;

  private places: any;


  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public restoration: RestorationService, public meteo: MeteoService) {}
  
  restaurantForm: FormGroup;
  restaurants = ['Open now', 'Pizzaria', 'coffee',  'American',  'Frensh', 'Italian', 'Halal', 'Indian', 'Japanese']

  restaurantList : Observable<any[]>
  p: Number = 1;

  restoForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  validation_messages = {
    'typeRestaurant': [
      { type: 'required' }
    ],
    'adresse': [
      { type: 'required' }
    ]
  }

  ngOnInit() {
   
    // address autocomplete
    this.places = places({
      appId:  environment.autoCompleteAppId,
      apiKey: environment.autoCompleteToken,
      container: this.qElementRef.nativeElement,
      style: false,
      debug: true
  });
  if (this.q) {
      this.places.setVal(this.q);
  }
  this.places.on('change', function resultSelected(e) {
      console.log("eeeeeeeeeee "+JSON.stringify(e));
  });

    var req = {
  "term":"restaurant",
  "location" : "16 rue des acacias 92360 meudon"
  }
    this.restaurantList=this.restoration.getYelpRestaurants(req);
    this.createForms();
    this.meteo.detectLocation(position => this.initMap(position));
  }

 
  createForms() {
    this.restoForm = this.fb.group({
      typeRestaurant: [''],
      address: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  onSubmitResto(value) {
  console.log("rrrrrrrrrrrrrr       "+JSON.stringify(value));
  var request ={
  "term":"restaurant",
  "location" : "Promenade du 7e Art, 77200 Torcy"
}
this.restaurantList=this.restoration.getYelpRestaurants(request);
  }


  initMap(position) {
 
    console.log(position.longitude + ' , ' + position.latitude);
    const map = L.map('map').setView([position.latitude, position.longitude], 12);
 
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
    { id: 'mapbox.streets', attribution: '', maxZoom: 20, accessToken: this.accessToken , tileSize: 512, zoomOffset: -1} as any
  ).addTo(map);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });


    L.marker([position.latitude, position.longitude], {icon: myIcon}).bindPopup('Your position').addTo(map).openPopup();

    for (let key in this.restaurantList) {
      let restaurant = this.restaurantList[key];
      // Use `key` and `value`
      L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude], {icon: myIcon})
  }


   
  
  }
}
