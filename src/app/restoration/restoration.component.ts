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
import { Style, Icon } from 'ol/style';
import  'leaflet';
import 'leaflet-routing-machine';
import * as ELG from 'esri-leaflet-geocoder';
import * as esri from 'esri-leaflet'
import { icon, latLng, Map, marker, point, polyline, tileLayer, layerGroup } from 'leaflet';

const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
const iconUrl = 'assets/img/marker-icon.png';
const shadowUrl = 'assets/img/marker-shadow.png';

declare var ol: any;

@Component({
  selector: 'app-restoration',
  templateUrl: './restoration.component.html',
  styleUrls: ['./restoration.component.css']
})
export class RestorationComponent implements OnInit {

  @Input() q: string;
  @ViewChild('autocomplete') qElementRef: ElementRef;

  private places: any;

  map: any;
  accessToken = 'pk.eyJ1Ijoiamxhc3NpaW1lbiIsImEiOiJjang3anF3M3kwYWFxM29sZ2c2NTMzamtlIn0.OUJR08JcIjxWvTWLJpTRWw';
  mapBox = tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
    { id: 'mapbox.streets', attribution: '', maxZoom: 20, accessToken: this.accessToken , tileSize: 512, zoomOffset: -1} as any

  );

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
    //select type of restaurant
     this.restaurantForm = this.fb.group({
     restaurantControl: ['Type of restaurants']
     });

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
    //this.restaurantList=this.restoration.getYelpRestaurants(req);
    this.createForms();
    this.meteo.detectLocation(position => this.initMap(position));
  }

 
  createForms() {
    this.restoForm = this.fb.group({
      typeRestaurant: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  onSubmitResto(value) {
  var request = {
  "term":"restaurant",
  "location" : value.address,
  "radius":"3000",
  "alias" : value.restaurantType
  }
     this.restoration.getYelpRestaurants(request).subscribe((response) => {
      if (response.status == 200) {
        this.errorMessage = "";
        this.successMessage = "An email that contains a link to reset your password has been sent ! Please verify your email";
      }
      else {
        this.successMessage = "";
        this.errorMessage = "An error has occured,please retry later";
      }
  });
  }

  initMap(position) {
    console.log(position.longitude + ' , ' + position.latitude);
    this.map = new Map ('map', {
      layers: [ this.mapBox ],
      zoom: 13,
      center: latLng([ position.latitude , position.longitude])
    });

    let fromMarker = marker([ position.latitude ,position.longitude ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        popupAnchor:  [-3, -26]
      })
    });

    fromMarker.addTo(this.map);
    fromMarker.bindPopup("Your position").openPopup();
  
  }
}
