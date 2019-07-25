import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
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
  typeRestaurant = [
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
      id: 12
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
  restaurantList: Observable<any[]>
  p: Number = 1; //pagination


  public showAdvancedSearch: boolean = false;
  public buttonName: any = 'Advanced Search';

  address = '';


  successMessage = '';
  errorMessage = '';

   mapboxLayer: any;

  myIcon :any;
   map :any;
  markers = [];

  

  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public restoration: RestorationService, public meteo: MeteoService) {

    this.form = this.fb.group({
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      typeRestaurant: new FormArray([]),
      sortBy: new FormArray([]),
      distance: new FormArray([]),
      features: new FormArray([]),
      neighborhoods: new FormArray([])
    });

    this.addCheckboxes();
  }


  toggle() {
    this.showAdvancedSearch = !this.showAdvancedSearch;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showAdvancedSearch)
      this.buttonName = "Hide Filter";
    else
      this.buttonName = "Advanced Search";
  }

  ngOnInit() {

    // address autocomplete
    this.places = places({
      appId: environment.autoCompleteAppId,
      apiKey: environment.autoCompleteToken,
      container: this.qElementRef.nativeElement,
      debug: true
    }).configure({
      language: 'en',
      hitsPerPage: 4
    });

  
    this.mapboxLayer=L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
      { id: 'mapbox.streets', attribution: '', maxZoom: 20, accessToken: this.accessToken, tileSize: 512, zoomOffset: -1 } as any
    );

    this.myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    this.map=L.map('map', {
      scrollWheelZoom: false,
      zoomControl: false
    });

    this.mapboxLayer.addTo(this.map);

    this.places.on('change', (event) => this.updateRestaurantList(event));
    this.map.setView(new L.LatLng(0, 0), 1);
    this.map.addLayer(this.mapboxLayer);
  }

  updateRestaurantList(event) {
    this.address = event.suggestion.value;
   
    var req = {
      "location": this.address,
      "term": "restaurant"
    }
    this.restaurantList=this.restoration.getYelpRestaurants(req);
    this.markers.forEach(this.removeMarker);
    this.markers = [];
    this.restaurantList.forEach(restaurant =>this.addMarker(restaurant));
    this.findBestZoom();
  };

   addMarker(suggestion) {
    console.log("kkkkkkkkkkkkkkkjjjjjjjjjjjjjjjjj  " + JSON.stringify(suggestion));
    var marker = L.marker([suggestion.coordinates.latitude, suggestion.coordinates.longitude], { icon: this.myIcon });
    marker.addTo(this.map);
    this.markers.push(marker);
  }

  removeMarker(marker) {
    this.map.removeLayer(marker);
  }

  findBestZoom() {
    var featureGroup = L.featureGroup(this.markers);
    this.map.fitBounds(featureGroup.getBounds().pad(0.5), {animate: false});
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
    const selectedTypeRestaurantIds = this.form.value.typeRestaurant
      .map((v, i) => v ? this.typeRestaurant[i].name : null)
      .filter(v => v !== null);

    var req = {
      "location": this.address,
      "term": "restaurant"
    }
    this.restaurantList=this.restoration.getYelpRestaurants(req);
  }


 






}
