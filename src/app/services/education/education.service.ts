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


export class EducationService {

  constructor(public http: HttpClient, public router: Router) {}

    public getAllEducation(): Observable<any[]> {
    const apiURL = '/api/v1/allEducation';
    return this.http.get<any[]>(apiURL).map(response => {return response;});
  }

    public getEducation(educationId: string): Observable<any> {
    const apiURL = '/api/v1/education'+educationId;
    return this.http.get(apiURL).map(response => {return response;});
  }

   public addEducation(education: any): Observable<any> {
    const apiURL = '/api/v1/addEducation';
    return this.http.post(apiURL, education);
  }

   public updateDetailsEducation(education: any): Observable<any> {
    const apiURL = '/api/v1/updateDetailsEducation';
    return this.http.post(apiURL, education);
  }
   public deleteEducation(education: any): Observable<any> {
    const apiURL = '/api/v1/deleteEducation';
    return this.http.delete(apiURL, education);
  }

   public getMenuItem(educationId: string, name: string): Observable<any> {
    const apiURL = '/api/v1/getMenuItem'+educationId+name;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getMenuCategory(name: string): Observable<any> {
    const apiURL = '/api/v1/getMenuCategory'+name;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getEducationDetails(educationId: string): Observable<any> {
    const apiURL = '/api/v1/educationDetails'+educationId;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public addMenuCategory(menuCategory: any): Observable<any> {
    const apiURL = '/api/v1/addMenuCategory';
    return this.http.delete(apiURL, menuCategory);
  }

  public addMenuItem(item: any): Observable<any> {
    const apiURL = '/api/v1/addMenuItem';
    return this.http.delete(apiURL, item);
  }

 public getYelpEducation(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpEducation';
    return this.http.post(apiURL,request).map(response => {return response;});
  }

  public getYelpEducationDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpEducationDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpEducationReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpEducationReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}
