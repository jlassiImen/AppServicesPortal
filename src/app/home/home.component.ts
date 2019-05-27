import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  temperature="";
  longitude ="";
  latitude="";
  city="";
  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.getUserPosition();
  	this.getCityMeteo();
  }


  getCityName(){
     var geocodeURL='https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.latitude+','+this.longitude+'&key=AIzaSyBRocfcH6UXh-dzBUk1QeS-xLNDcPMPayE';
    return this.http.get(geocodeURL).subscribe(
        (data: any) => {
            this.city = data.results[0];
        },
        err => console.log(err), // error
    );;
  }

  getUserPosition():void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position);
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          //this.getCityName();
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  getCityMeteo(){
    var meteoURL="https://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    return this.http.get(meteoURL).subscribe(
        (data: any) => {
        	//console.log(JSON.stringify(data));
            this.temperature = data.main.temp;
        },
        err => console.log(err), // error
    );;
  }
}
