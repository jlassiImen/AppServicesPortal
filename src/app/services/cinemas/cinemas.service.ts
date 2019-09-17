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
export class CinemasService {

  constructor(public http: HttpClient, public router: Router) { }

  public getYelpCinema(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpCinema';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpCinemaDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpCinemaDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpCinemaReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpCinemaReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}









