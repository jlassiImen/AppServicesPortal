import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http: HttpClient) { }

  public getAllCategories(): Observable<any> {
    const apiURL = '/api/v1/getCategories';
    return this.http.get(apiURL).map(response => {return response;});

  }


}
