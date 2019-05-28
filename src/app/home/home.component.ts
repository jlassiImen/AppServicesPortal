import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MeteoService } from '../services/meteoServices/meteo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  
  temperature="";
  cityName="";
  countryCode=""
  
  constructor(public auth: AuthService, private http: HttpClient, public meteo: MeteoService) { }
   
  ngOnInit() {

    this.auth.login();
   
}
}