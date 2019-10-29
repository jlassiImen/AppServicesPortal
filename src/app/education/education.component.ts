import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { MeteoService } from './../services/meteoServices/meteo.service';
import { environment } from '../../environments/environment';
import { EducationService } from './../services/education/education.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as places from 'places.js';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http' ;


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  accessToken = environment.mapBoxKey;
  @Input() q: string;
  @ViewChild('autocomplete') qElementRef: ElementRef;

  private places: any; //autocomplete adress

  //form
  form: FormGroup;
  typeEducation = [
    {
      name: "Adult education",
      id: "adultedu"
    },
    {
      name: "Art Classes ",
      id: "artclasses"
    },
    {
      name: "College Counseling",
      id: "collegecounseling"
    },
    {
      name: "Colleges & Universities",
      id: "collegeuniv"
    },
    {
      name: "Educational Services",
      id: "educationservices"
    },
    {
      name: "Elementary Schools",
      id: "elementaryschools"
    },
    {
      name: "Middle Schools & High School",
      id: "highschools"
    },
    {
      name: "Montessori Schools",
      id: "montessori"
    },
    {
      name: "Preschools ",
      id: "preschools"
    },
    {
      name: "Private Schools",
      id: "privateschools"
    },
    {
      name: "Private Tutors",
      id: "privatetutors"
    },
    {
      name: "Religious Schools",
      id: "religiousschools"
    },
    {
      name: "Special Education",
      id: "specialed"
    },
    {
      name: "Specialty Schools",
      id: "specialtyschools"
    },
    {
      name: "Childbirth Education ",
      id: "childbirthedu"
    }
    ,
    {
      name: "Cooking Schools",
      id: "cookingschools"
    },
    {
      name: "Dance Schools",
      id: "dance_schools"
    },
    {
      name: "Drama Schools",
      id: "dramaschools"
    },
    {
      name: "Driving Schools",
      id: "driving_schools"
    }
  ];
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
  public showAdvancedSearch: boolean = false;
  public buttonName: any = 'Advanced Search';

  //onsubmit result
  educationList: any[];
  p: Number = 1; //pagination

  address = '';

  mapboxLayer: any;

  myIcon: any;
  map: any;
  markers = [];


  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public education: EducationService, public meteo: MeteoService, private httpClient : HttpClient) {
    this.form = this.fb.group({
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      price: new FormArray([]),
      sort_by: new FormArray([]),
      open_at: new FormControl('', Validators.compose([
        Validators.required
      ])),
      radius: new FormArray([]),
      typeEducation: new FormControl('')

    });
    this.addCheckboxes();
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

  initEducation (position){
   
   var req = {
      "longitude": position.longitude,
      "latitude":position.latitude,
      "term": "education"
    }
    this.education.getYelpEducation(req).subscribe((response) => {
      this.educationList = response;
     // console.log(this.educationList);
      this.markers.forEach(marker => {
        this.removeMarker(marker);
      });
      this.markers = [];
      this.educationList.forEach(education => {
        this.addMarker(education);
      })
      this.findBestZoom();
    })

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


    
  if(localStorage.getItem('educationList')){
    this.educationList=JSON.parse(localStorage.getItem('educationList'));
     this.markers.forEach(marker => {
        this.removeMarker(marker);
      });
      this.markers = [];
      this.educationList.forEach(education => {
        this.addMarker(education);
      })
      this.findBestZoom();
  }
  else{
     //default education list
this.meteo.detectLocation(position => this.initEducation(position));
}
  }


  setAddress(event){
    this.address = event.suggestion.value;
  }

  addMarker(education) {

    var marker = L.marker([education.coordinates.latitude, education.coordinates.longitude], { icon: this.myIcon });
    marker.addTo(this.map);
    marker.bindPopup(education.name).openPopup();
    this.markers.push(marker);
  }

  removeMarker(marker) {
    this.map.removeLayer(marker);
  }

  findBestZoom() {
    var featureGroup = L.featureGroup(this.markers);
    this.map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: false });
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

  onSubmitEducation(value) {
  //  console.log(JSON.stringify(value));
    if (this.showAdvancedSearch) {
      this.toggle();
    }
    const selectedTypeEducationByName = this.form.value.typeEducation; 
    const selectedPriceById = this.form.value.price
      .map((v, i) => v ? this.price[i].id : null)
      .filter(v => v !== null);  
    //console.log("rrrrrrrrrrrrrr       "+selectedPriceById);

    const selectedSortByById = this.form.value.sort_by
      .map((v, i) => v ? this.sort_by[i].id : null)
      .filter(v => v !== null);  

    const selectedRadiusById = this.form.value.radius
      .map((v, i) => v ? this.radius[i].id : null)
      .filter(v => v !== null);
    const selectedTypeEducationById = this.form.value.radius
      .map((v, i) => v ? this.typeEducation[i].id : null)
      .filter(v => v !== null); 

    var req = {
      "location": this.address,
      "term": "education",
      "categories": selectedTypeEducationById,
      "price": selectedPriceById,
      "sort_by": selectedSortByById,
      "radius":selectedRadiusById
    }
    this.education.getYelpEducation(req).subscribe((response) => {
      this.educationList = response;
      localStorage.setItem('educationList', JSON.stringify(response));
     // console.log(this.educationList);
      this.markers.forEach(marker => {
        this.removeMarker(marker);
      });
      this.markers = [];
      this.educationList.forEach(education => {
        this.addMarker(education);
      })
      this.findBestZoom();
    })
  }
  goToEducationDetails(educationId){
  console.log("yyyyyyyyyyyyyyy" + educationId);
     this.router.navigateByUrl('/educationDetails?educationId='+educationId); 
  }
}
