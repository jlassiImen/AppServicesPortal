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
export class TransportService {

  constructor(public http: HttpClient, public router: Router) { }

  public getYelpTransport(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpTransport';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpTransportDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpTransportDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpTransportReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpTransportReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}