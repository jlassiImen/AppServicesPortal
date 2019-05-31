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

  key="AIzaSyDGkAfGhqQ8kJxAeGpVerRgNn6TRFeylt0";

  detectLocation(callback): void  {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position)=>{
          callback(position.coords);
        });
    } else {
       alert("No support for geolocation")
    }
  }
    getAddressObject(request) :any{
    var address_components=request.results[0].address_components;
      var ShouldBeComponent = {
        home: ["street_number"],
        postal_code: ["postal_code"],
        street: ["street_address", "route"],
        region: [
          "administrative_area_level_1",
          "administrative_area_level_2",
          "administrative_area_level_3",
          "administrative_area_level_4",
          "administrative_area_level_5"
        ],
        city: [
          "locality",
          "sublocality",
          "sublocality_level_1",
          "sublocality_level_2",
          "sublocality_level_3",
          "sublocality_level_4"
        ],
        country: ["country"]
      };

     var address = [{
        home: "",
        postal_code: "",
        street: "",
        region: "",
        city: "",
        country: ""
      }];

      address_components.forEach(component => {
        for (var shouldBe in ShouldBeComponent) {
          if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
            if (shouldBe === "country") {
              address[0][shouldBe] = component.short_name;
            } else {
              address[0][shouldBe] = component.long_name;
            }
          }
        }
      });
     // console.log("jjjjjjjjjjj    "+JSON.stringify(address));
      return address ;
    }

  getPositionDetailsFromGoogleAPI(longitude:string,latitude:string):Observable<any> {
    const latLang = latitude+","+longitude;
    var geocodeURL='https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLang+'&key='+this.key;
    return this.http.get(geocodeURL).map(response => {
     console.log("eeeeeeee    "+JSON.stringify(response));
      return response;  
      });
  }



  getCityMeteo(address) :Observable<any> {
    var meteoURL="https://api.openweathermap.org/data/2.5/weather?q="+address.region+","+address.country+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
     return this.http.get(meteoURL).map(data => {
    // console.log("sssssssssssssssssssss    "+JSON.stringify(data));
      return data;  
      });
  }

}
