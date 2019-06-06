import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  constructor(public http:HttpClient) { }

  key="f200c59bf3daa0";

 // detecter la position du client à l'aide du navigateur
  detectLocation(callback): void  {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position)=>{
          callback(position.coords);
        });
    } else {
       alert("No support for geolocation")
    }
  }  

// appler l'api reverse geocoding de google avec la longitude et la latitude afin d'obtenir le pays et la region associé
  getPositionDetailsFromLocationIQAPI(longitude:string,latitude:string):Observable<any> {
    var geocodeURL="https://eu1.locationiq.com/v1/reverse.php?key="+this.key+"&lat="+latitude+"&lon="+longitude+"&format=json";
    return this.http.get(geocodeURL).map(response => {
      return response;  
      });
  }


// appler l'api meteo avec le pays et la region afin d'obtenir les informations relative à la meteo
  getCityMeteo(address) :Observable<any> {
    var meteoURL="https://api.openweathermap.org/data/2.5/weather?q="+address.region+","+address.country+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
     return this.http.get(meteoURL).map(data => {
      return data;  
      });
  }

}
