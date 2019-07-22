import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as places from 'places.js';
import { Style, Icon } from 'ol/style';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import * as ELG from 'esri-leaflet-geocoder';
import * as esri from 'esri-leaflet'
import { icon, latLng, Map, marker, point, polyline, tileLayer, layerGroup } from 'leaflet';

const iconRetinaUrl = 'assets/img/marker-icon-2x.png';
const iconUrl = 'assets/img/marker-icon.png';
const shadowUrl = 'assets/img/marker-shadow.png';

declare var ol: any;

import { RestorationService } from './../services/restoration/restoration.service';

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

  restaurantList : Observable<any[]>
  p: Number = 1;

  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 60
  };
 
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };


  restoForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  validation_messages = {
    'personne': [
      { type: 'required' }
    ],
    'date': [
      { type: 'required' }
    ],
    'heure': [
      { type: 'required' }
    ],
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



    this.restaurantList=this.restoration.getYelpRestaurants("16 rue des acacias 92360 meudon");
  
    this.createForms();
    this.meteo.detectLocation(position => this.initMap(position));
  }

 
  createForms() {
    this.restoForm = this.fb.group({
      personne: new FormControl('', Validators.compose([
        Validators.required
      ])),
      date: new FormControl('', Validators.compose([
        Validators.required
      ])),
      heure: new FormControl('', Validators.compose([
        Validators.required
      ])),
      typeRestaurant: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }
  //valider la recherche du resto

  onSubmitResto(value) {
     this.restoration.getRestaurant(value).subscribe((response) => {
      if (response.message == "success") {
      }
      else {
        this.successMessage = "";
        this.errorMessage = "Invalid credentials";
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "An error has occured,please retry later";
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
