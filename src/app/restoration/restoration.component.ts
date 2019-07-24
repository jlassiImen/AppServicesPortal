import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
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

  private places: any; //autocomplete adress



  //form
  form: FormGroup;
  typeRestaurant=[
    {
      name: "American",
      id: 1
    },
    {
      name: "Italian",
      id: 2
    },
    {
      name: "Frensh",
      id: 3
    },
    {
      name: "Traditional",
      id: 4
    },
    {
      name: "Pizzaria",
      id: 5
    },
    {
      name: "coffee",
      id: 6
    }
  ];
  sortBy = [
    {
      name: "Price",
      value: "Price",
      selected: true
    },
    {
      name: "Note",
      value: "Note"
    }
  ];
  distance = [
    {
      name: "Less of 500 m",
      id: 10
    },
    {
      name: "By car (8 km)",
      id: 11
    },
    {
      name: "By bike (4 km)",
      id:12
    },
    {
      name: "walk (2 km)",
      id: 13
    }
  ];
  features = [
    {
      name: "Open now",
      id: 20
    },
    {
      name: "Accept reservation",
      id: 21
    },
    {
      name: "delivery ",
      id: 22
    }
  ];
  neighborhoods = [
    {
      name: "3000 m",
      id: 30
    },
    {
      name: "6000 m",
      id: 31
    },
    {
      name: "15000 ",
      id: 32
    },
    {
      name: "30000 ",
      id: 33
    },
    {
      name: "40000 ",
      id: 34
    }
  ];
  
  //onsubmit result
  restaurantList : Observable<any[]> 
  p: Number = 1; //pagination

  successMessage = '';
  errorMessage = '';


  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder,public restoration: RestorationService, public meteo: MeteoService) {

    this.form = this.fb.group({
      typeRestaurant: new FormArray([]),
      sortBy: new FormArray([]),
      distance: new FormArray([]),
      features: new FormArray([]),
      neighborhoods: new FormArray([])
    });

    this.addCheckboxes();
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
  this.meteo.detectLocation(position => this.initMap(position));
  var req = {
  "term":"restaurant",
  "location" : "16 rue des acacias 92360 meudon"
  }
 this.restaurantList=this.restoration.getYelpRestaurants(req); 
  }

  private addCheckboxes() {
    this.typeRestaurant.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.typeRestaurant as FormArray).push(control);
    });
    this.sortBy.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.sortBy as FormArray).push(control);
    });
    this.distance.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.distance as FormArray).push(control);
    });
    this.features.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.features as FormArray).push(control);
    });
    this.neighborhoods.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.neighborhoods as FormArray).push(control);
    });
  }

  onSubmitResto(value) {
    const selectedTypeRestaurantIds = this.form.value.typeRestauranttypeRestaurant
      .map((v, i) => v ? this.typeRestaurant[i].id : null)
      .filter(v => v !== null);
  
  
  console.log("rrrrrrrrrrrrrr       "+selectedTypeRestaurantIds);
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
