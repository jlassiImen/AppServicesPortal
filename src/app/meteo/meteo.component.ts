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

// suite à la détection de la longitude et la latitude du client cette fonction va gérer l'ensemble des appels vers la suite des fonctions
  getCityName (position) {
  	this.meteo.getPositionDetailsFromGoogleAPI(position.longitude,position.latitude)
    .subscribe((response: any) => {
    //vérifier si la réponse de l'api geocoding a réussi
    	if(response.status == "OK"){
    	this.meteo.getAddressObject(response).map(res2 => {
    		this.address=res2;
      	 
        this.meteo.getCityMeteo(res2).subscribe((meteoDetails: any) => {
			this.meteoDetails.temperature=meteoDetails.main.temp;
			this.meteoDetails.humidite=meteoDetails.main.humidity;
			this.meteoDetails.vitesseVent=meteoDetails.wind.speed;
			this.meteoDetails.description=meteoDetails.weather[0].description;
			this.curentDate=formatDate(new Date(), 'yyyy/MM/dd', 'en');
     	 });
        });
      
        }
        // s'il y a une erreur lors de l'appel à l'api geocoding on demande au client de saisir un pays et une ville
        else {


      	   var country = prompt("Please enter a coutry code", "FR");
  			if (country != null) {
    			this.address.country=country;
  			}

  			var region = prompt("Please enter a city", "Paris");
  			if (region != null) {
    			this.address.region=region;
  			}		
// console.log("xxxxxxxxxxxxx    "+JSON.stringify(this.address));
         this.meteo.getCityMeteo(this.address).subscribe((meteoDetails: any) => {
			this.meteoDetails.temperature=meteoDetails.main.temp;
			this.meteoDetails.humidite=meteoDetails.main.humidity;
			this.meteoDetails.vitesseVent=meteoDetails.wind.speed;
			this.meteoDetails.description=meteoDetails.weather[0].description;
			this.curentDate=formatDate(new Date(), 'yyyy/MM/dd', 'en');
     	 });


        }
      });
    }
}
