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
  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
  	this.getCityMeteo();
  }
  getCityMeteo(){
    var meteoURL="https://api.openweathermap.org/data/2.5/weather?q=paris,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
    return this.http.get(meteoURL)
	.subscribe(
        (data: any) => {
        	//console.log(JSON.stringify(data));
            this.temperature = data.main.temp;
        },
        err => console.log(err), // error
    );;
 
  }



}
