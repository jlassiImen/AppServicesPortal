import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import SampleJson  from './paris.json';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  temperature="";
  cityName="";
  countryCode=""
  
  constructor(public http:HttpClient) { }
  key="AIzaSyD_vfRoa3XgfV0IXuWqJHA-ToZHONjMNQk";

  detectLocation(callback): void  {

    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position)=>{
          callback(position.coords);
          console.log("rrrrrrrrrr     long  "+position.coords.longitude+"  lat  "+position.coords.latitude+"  keyyyyyyyyyyyyy "+this.key);
        });
    } else {
       alert("No support for geolocation")
    }

  }

  getPositionDetailsFromGoogleAPI(longitude :string,latitude:string) {
    const latLang = latitude+","+longitude;
    var geocodeURL='https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLang+'&key='+this.key;
    return this.http.get(geocodeURL);
  }

  getCityMeteo(cityName : string ,countryCode : string) :Observable<any> {

    var meteoURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+","+countryCode+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    console.log("zzzzzzzzzzzz     "+meteoURL);
     return this.http.get(meteoURL);
  }

    

  getCityName (position) {
  this.getPositionDetailsFromGoogleAPI(position.longitude,position.latitude)
    .subscribe((response: any) => {
      console.log("ooooooo "+response);
      this.cityName = response.results[0].address_components[2].short_name;
      this.countryCode=response.results[0].address_components[5].short_name;
      this.getCityMeteo(this.cityName,this.countryCode).subscribe(
              (data: any) => {
                  this.temperature= data.main.temp;
              },
              err => console.log(err), // error
      );
    });
    }

   

    

}
