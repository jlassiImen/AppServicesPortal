import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(public http: HttpClient, public router: Router) { }

  public getYelpParking(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpParking';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpParkingDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpParkingDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpParkingReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpParkingReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}









