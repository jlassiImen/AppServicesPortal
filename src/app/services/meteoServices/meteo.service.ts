import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  constructor(public http:HttpClient) { }

  getIpLocation() :Observable<any>{  


     return this.http.get("http://extreme-ip-lookup.com/json/").map(response => {
      return response;  
      });
  }

 // detecter la position du client à l'aide du navigateur
  detectLocation(callback): void  {

    const options = {
      enableHighAccuracy: true, maximumAge: 0, timeout: 10000000
    };

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
          callback(position.coords);
        }, function error(msg){
          alert('Please enable your GPS position future.');

        }, options);
    } else {
       alert("No support for geolocation");
    }
  }  

// appler l'api reverse geocoding de google avec la longitude et la latitude afin d'obtenir le pays et la region associé
  getPositionDetailsFromLocationIQAPI(longitude:string,latitude:string):Observable<any> {
    var geocodeURL="https://eu1.locationiq.com/v1/reverse.php?key="+environment.meteoApiKey+"&lat="+latitude+"&lon="+longitude+"&format=json";
    return this.http.get(geocodeURL).map(response => {
      return response;  
      });
  }


// appler l'api meteo avec le pays et la region afin d'obtenir les informations relative à la meteo
  getCityMeteo(address) :Observable<any> {
    var meteoURL="https://api.openweathermap.org/data/2.5/weather?q="+address.region+","+address.country+"&appid="+environment.openweatherAppId+"&units=metric";
     return this.http.get(meteoURL).map(data => {
      return data;  
      });
  }

}
