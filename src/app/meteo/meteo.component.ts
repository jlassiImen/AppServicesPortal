import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { MeteoService } from '../services/meteoServices/meteo.service';
import {formatDate} from '@angular/common';


import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

    meteoDetails = {
    	temperature:"",
    	humidite:"",
    	vitesseVent:"",
    	description:""
    }
    
    curentDate = "";

    address = {
        home: "",
        postal_code: "",
        street: "",
        region: "",
        city: "",
        country: ""
      };

  constructor(public meteo: MeteoService, public auth: AuthService) { }

  ngOnInit() {

    this.meteo.detectLocation(position => this.getCityName(position));


  }


  getCityName (position) {
  this.meteo.getPositionDetailsFromGoogleAPI(position.longitude,position.latitude)
    .subscribe((response: any) => {

    this.meteo.getAddressObject(response).map(res2 => {
    this.address=res2;
        console.log("xxxxxxxxxxxxx    "+JSON.stringify(this.address));
        this.meteo.getCityMeteo(res2).subscribe((meteoDetails: any) => {
		this.meteoDetails.temperature=meteoDetails.main.temp;
		this.meteoDetails.humidite=meteoDetails.main.humidity;
		this.meteoDetails.vitesseVent=meteoDetails.wind.speed;
		this.meteoDetails.description=meteoDetails.weather[0].description;
		this.curentDate=formatDate(new Date(), 'yyyy/MM/dd', 'en');
     	 });
          
        });

      });
    }






}
