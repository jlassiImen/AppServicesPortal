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
export class FestivalsService {

  constructor(public http: HttpClient, public router: Router) { }

  public getYelpFestivals(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpFestivals';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpFestivalsDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpFestivalsDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpFestivalsReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpFestivalsReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}