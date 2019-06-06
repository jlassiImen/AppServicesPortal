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
        region: "",
        country: ""
      };

  constructor(public meteo: MeteoService, public auth: AuthService) { }

  ngOnInit() {
    this.meteo.detectLocation(position => this.getCityName(position));
  }

// suite à la détection de la longitude et la latitude du client cette fonction va gérer l'ensemble des appels vers la suite des fonctions
  getCityName (position) {
  	this.meteo.getPositionDetailsFromLocationIQAPI(position.longitude,position.latitude)
    .subscribe((response: any) => {

    		this.address.region=response.adress.town;
        this.address.country=response.adress.country_code;
      	 
        this.meteo.getCityMeteo(this.address).subscribe((meteoDetails: any) => {
			this.meteoDetails.temperature=meteoDetails.main.temp;
			this.meteoDetails.humidite=meteoDetails.main.humidity;
			this.meteoDetails.vitesseVent=meteoDetails.wind.speed;
			this.meteoDetails.description=meteoDetails.weather[0].description;
			this.curentDate=formatDate(new Date(), 'yyyy/MM/dd', 'en');
     	 });
        
      });
    }
}
