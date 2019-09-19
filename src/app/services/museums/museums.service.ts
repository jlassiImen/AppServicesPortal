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
export class MuseumsService {

  constructor(public http: HttpClient, public router: Router) { }

  public getYelpMuseums(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpMuseums';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpMuseumsDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpMuseumsDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpMuseumsReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpMuseumsReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}









