import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http: HttpClient) { }



  public getAllCategories(): Observable<any> {
    const apiURL = '/getCategories';
    return this.http.get(apiURL);

  }


}
