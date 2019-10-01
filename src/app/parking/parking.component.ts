import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { MeteoService } from '../services/meteoServices/meteo.service';
import { environment } from '../../environments/environment';
import { ParkingService } from '../services/parking/parking.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as places from 'places.js';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http' ;



@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

     
  form: FormGroup;
  price = [
      {
        name: "€",
        id: "1"
      },
      {
        name: "€€",
        id: "2"
      },
      {
        name: "€€€",
        id: "3"
      }
      ,
      {
        name: "€€€€",
        id: "4"
      }
    ];
    sort_by = [
      {
  
        name: "Best match",
        id: "best_match"
      },
      {
        name: "rating",
        id: "rating"
      },
      {
        name: "Review count",
        id: "review_count"
      },
      {
        name: "Distance",
        id: "distance"
      }
    ]; 
    radius = [
      {
        name: "Less 3 km",
        id: 3000
      },
      {
        name: "Less 10 km",
        id: 10000
      },
      {
        name: "Less 20 km ",
        id: 20000
      },
      {
        name: "Less 30 km ",
        id: 30000
      },
      {
        name: "Less 40 km",
        id: 40000
      }
    ];
  address = '';
  public showAdvancedSearch: boolean = false;
  public buttonName: any = 'Advanced Search';
  
  parkingList: any[];
  
  p: Number = 1; //pagination
  
  //map
  accessToken = environment.mapBoxKey;
  @Input() q: string;
  @ViewChild('autocomplete') qElementRef: ElementRef;
  private places: any; //autocomplete adress
  mapboxLayer: any;
  myIcon: any;
  map: any;
  markers = [];
  
  
    constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public parkingService: ParkingService, public meteo: MeteoService, private httpClient : HttpClient) { 
       this.form = this.fb.group({
        address: new FormControl('', Validators.compose([
          Validators.required
        ])),
        price: new FormArray([]),
        sort_by: new FormArray([]),
        open_at: new FormControl('', Validators.compose([
          Validators.required
        ])),
        radius: new FormArray([])
      });
      this.addCheckboxes();
    }
  
     initParking(position){
       var language='en_US';
       const locale = localStorage.getItem('locale');
       if(locale == 'fr'){
       language='fr_FR';
       }
     var req = {
        "longitude": position.longitude,
        "latitude":position.latitude,
        "term": "parking",
        "locale":language
       }
      this.parkingService.getYelpParking(req).subscribe((response) => {
        this.parkingList = response;
        console.log(this.parkingList);
        this.markers.forEach(marker => {
          this.removeMarker(marker);
        });
        this.markers = [];
        this.parkingList.forEach(parking => {
          this.addMarker(parking);
        })
        this.findBestZoom();
      })
  
    }
  
      private addCheckboxes() {
      this.price.map((o, i) => {
        const control = new FormControl(''); // if first item set to true, else false
        (this.form.controls.price as FormArray).push(control);
      });
      this.sort_by.map((o, i) => {
        const control = new FormControl(''); // if first item set to true, else false
        (this.form.controls.sort_by as FormArray).push(control);
      });
      this.radius.map((o, i) => {
        const control = new FormControl(''); // if first item set to true, else false
        (this.form.controls.radius as FormArray).push(control);
      });
    }
  
    //afficher et desactiver le filtre
   toggle() {
      this.showAdvancedSearch = !this.showAdvancedSearch;
      // CHANGE THE NAME OF THE BUTTON.
      if (this.showAdvancedSearch)
        this.buttonName = "Hide Filter";
      else
        this.buttonName = "Advanced Search";
    }
    
    setAddress(event){
      this.address = event.suggestion.value;
    }
  
    addMarker(parking) {
      var marker = L.marker([parking.coordinates.latitude, parking.coordinates.longitude], { icon: this.myIcon });
      marker.addTo(this.map);
      marker.bindPopup(parking.name).openPopup();
      this.markers.push(marker);
    }
  
    removeMarker(marker) {
      this.map.removeLayer(marker);
    }
  
    findBestZoom() {
      var featureGroup = L.featureGroup(this.markers);
      this.map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: false });
    }
    onSubmitParking(value) {
    console.log(JSON.stringify(value));
      if (this.showAdvancedSearch) {
        this.toggle();
      }
      const selectedPriceById = this.form.value.price
        .map((v, i) => v ? this.price[i].id : null)
        .filter(v => v !== null);  
  
      const selectedSortByById = this.form.value.sort_by
        .map((v, i) => v ? this.sort_by[i].id : null)
        .filter(v => v !== null);  
  
      const selectedRadiusById = this.form.value.radius
        .map((v, i) => v ? this.radius[i].id : null)
        .filter(v => v !== null); 
  
      var language='en_US';
     const locale = localStorage.getItem('locale');
     if(locale == 'fr'){
      language='fr_FR';
     }      
      var req = {
        "location": this.address,
        "term": "parking",
        "price": selectedPriceById,
        "sort_by": selectedSortByById,
        "radius":selectedRadiusById,
        "locale":language
      }
      this.parkingService.getYelpParking(req).subscribe((response) => {
        this.parkingList = response;
       // console.log(this.parkingList);
        this.markers.forEach(marker => {
          this.removeMarker(marker);
        });
        this.markers = [];
        this.parkingList.forEach(parking => {
          this.addMarker(parking);
        })
        this.findBestZoom();
      })
    }
    
    goToParkingDetails(parking){
      this.router.navigateByUrl('/parkingDetails?parkingId='+parking.id); 
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
  
      this.mapboxLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
        { id: 'mapbox.streets', attribution: '', maxZoom: 20, accessToken: this.accessToken, tileSize: 512, zoomOffset: -1 } as any
      );
  
      this.myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
  
      this.map = L.map('map', {
        scrollWheelZoom: true,
        zoomControl: true
      });
  
      this.mapboxLayer.addTo(this.map);
  
      this.places.on('change', (event) => this.setAddress(event));
      this.map.setView(new L.LatLng(0, 0), 1);
      this.map.addLayer(this.mapboxLayer);
  
       if(localStorage.getItem('parkingList')){
      this.parkingList=JSON.parse(localStorage.getItem('parkingList'));
       this.markers.forEach(marker => {
          this.removeMarker(marker);
        });
        this.markers = [];
        this.parkingList.forEach(parking => {
          this.addMarker(parking);
        })
        this.findBestZoom();
    }
    else{
      this.meteo.detectLocation(position => this.initParking(position));
  }
    }
}  

