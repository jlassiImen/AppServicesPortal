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
  public showAdvancedSearch: boolean = false;
  public buttonName: any = 'Advanced Search';

  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public restoration: RestorationService, public meteo: MeteoService) { }

  restaurantForm: FormGroup;
  restaurants = ['Open now', 'Pizzaria', 'coffee', 'American', 'Frensh', 'Italian', 'Halal', 'Indian', 'Japanese']

  restaurantList: Observable<any[]>
  p: Number = 1;
  address='';
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
      style: false,
      debug: true
    });

    this.places.on('change', function resultSelected(e) {
      this.address=e.suggestion.value;
      
    });


    this.createForms();

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
    console.log("ttttttttttt "+this.address);
    var req ={
      "location":this.address,
      "term":"restaurant"
    }
    this.loadRestaurantList(req);
  }


  loadMap(position) {

    console.log(position.longitude + ' , ' + position.latitude);
    const map = L.map('map').setView([position.latitude, position.longitude], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
      { id: 'mapbox.streets', attribution: '', maxZoom: 20, accessToken: this.accessToken, tileSize: 512, zoomOffset: -1 } as any
    ).addTo(map);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });


    L.marker([position.latitude, position.longitude], { icon: myIcon }).bindPopup('Your position').addTo(map).openPopup();

    console.log("ooooooooooooooooooooooooooo    " + JSON.stringify(this.restaurantList));

    this.restaurantList[0].forEach(restaurant => {
      L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude], { icon: myIcon })
    });
  }


  loadRestaurantList(request : any){
    this.restoration.getYelpRestaurants(request).subscribe((response: any) => {
      this.restaurantList = response;
      this.meteo.detectLocation(position => this.loadMap(position));
    });
  }




}
