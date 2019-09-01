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
export class HotelsService {

  constructor(public http: HttpClient, public router: Router) { }

  public getYelpHotels(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpHotels';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpHotelsDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpHotelsDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpHotelsReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpHotelsReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}









