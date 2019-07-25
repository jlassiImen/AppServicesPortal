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
      name: "Japanese Sweets",
      id: 4
    },
    {
      name: "Pizzaria",
      id: 5
    },
    {
      name: "coffee",
      id: 6
    },
    {
      name: "Desserts   ",
      id: 7
    },
    {
      name: "Bubble Tea",
      id: 8
    },
    {
      name: "Bar",
      id: 9
    },
    {
      name: "Parent Cafes",
      id: 10
    },
    {
      name: "Brazilian ",
      id: 10
    },
    {
      name: "Arabian ",
      id: 10
    },
    {
      name: "Argentine ",
      id: 10
    },
    {
      name: "Andalusian ",
      id: 10
    },
    {
      name: "Brasseries" ,
      id: 10
    }
    ,
    {
      name: "Breakfast & Brunch" ,
      id: 10
    },
    {
      name: "Creperies " ,
      id: 10
    },
    {
      name: "Corsican " ,
      id: 10
    },
    {
      name: "German " ,
      id: 10
    },
    {
      name: "Giblets " ,
      id: 10
    },
    {
      name: "Japanese " ,
      id: 10
    },
    {
      name: "Modern European" ,
      id: 10
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
      name: "Food Delivery Services ",
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


  public showAdvancedSearch: boolean = false;
  public buttonName: any = 'Advanced Search';

  address='';


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
      appId: environment.autoCompleteAppId,
      apiKey: environment.autoCompleteToken,
      container: this.qElementRef.nativeElement,
      style: false,
      debug: true
     }); 
    this.places.on('change', function resultSelected(e) {
      this.address=e.suggestion.value;
    }); 

    
  }
 
  toggle() {
    this.showAdvancedSearch = !this.showAdvancedSearch;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showAdvancedSearch)
      this.buttonName = "Hide Filter";
    else
      this.buttonName = "Advanced Search";
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
    console.log("vvvvvvvvvvv   "+JSON.stringify(value));
    const selectedTypeRestaurantByName = this.form.value.typeRestaurant
      .map((v, i) => v ? this.typeRestaurant[i].name : null)
      .filter(v => v !== null);  
    console.log("rrrrrrrrrrrrrr       "+selectedTypeRestaurantByName);

    const selectedSortByByName = this.form.value.sortBy
      .map((v, i) => v ? this.sortBy[i].name : null)
      .filter(v => v !== null);  
    console.log("rrrrrrrrrrrrrr       "+selectedSortByByName);

    const selectedDistanceByName = this.form.value.distance
      .map((v, i) => v ? this.distance[i].name : null)
      .filter(v => v !== null);  
    console.log("rrrrrrrrrrrrrr       "+selectedDistanceByName);

    const selectedFeaturesByName = this.form.value.features
      .map((v, i) => v ? this.features[i].name : null)
      .filter(v => v !== null);  
    console.log("rrrrrrrrrrrrrr       "+selectedFeaturesByName);

    const selectedNeighborhoodsByName = this.form.value.neighborhoods
      .map((v, i) => v ? this.neighborhoods[i].name : null)
      .filter(v => v !== null);  
    console.log("rrrrrrrrrrrrrr       "+selectedNeighborhoodsByName);

    console.log("ttttttttttt "+this.address);
    var req ={
      "location":"16 rue des acacias 92360 meudon France",
      "term":"restaurant",
      "categories":selectedTypeRestaurantByName

    }
    
    this.restaurantList=this.restoration.getYelpRestaurants(req);
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
/*
  loadRestaurantList(request : any){
    this.restoration.getYelpRestaurants(request).subscribe((response: any) => {
      this.restaurantList = response;
      this.meteo.detectLocation(position => this.loadMap(position));
    });
  }
*/



}
