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


export class RestorationService {

restaurants:any={}

  constructor(public http: HttpClient, public router: Router) { 
      let dataRestaurants = localStorage.getItem('restaurants');

  }

    public getAllRestaurants(): Observable<any[]> {
    const apiURL = '/api/v1/allRestaurant';
    return this.http.get<any[]>(apiURL).map(response => {return response;});
  }

    public getRestaurant(restaurantId: string): Observable<any> {
    const apiURL = '/api/v1/restaurant'+restaurantId;
    return this.http.get(apiURL).map(response => {return response;});
  }

   public addRestaurant(restaurant: any): Observable<any> {
    const apiURL = '/api/v1/addRestaurant';
    return this.http.post(apiURL, restaurant);
  }

   public updateDetailsRestaurant(restaurant: any): Observable<any> {
    const apiURL = '/api/v1/updateDetailsRestaurant';
    return this.http.post(apiURL, restaurant);
  }
   public deleteRestaurant(restaurant: any): Observable<any> {
    const apiURL = '/api/v1/deleteRestaurant';
    return this.http.delete(apiURL, restaurant);
  }

   public getMenuItem(restaurantId: string, name: string): Observable<any> {
    const apiURL = '/api/v1/getMenuItem'+restaurantId+name;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getMenuCategory(name: string): Observable<any> {
    const apiURL = '/api/v1/getMenuCategory'+name;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getRestaurantDetails(restaurantId: string): Observable<any> {
    const apiURL = '/api/v1/restaurantDetails'+restaurantId;
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

 public getYelpRestaurants(request: any): Observable<any> {
    const apiURL = '/api/v1/getYelpRestaurants';
    return this.http.post(apiURL,request).map(
    item=>{
   localStorage.setItem("restaurants",item);
  });
  }

  public getYelpRestaurantsDetails(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpRestaurantsDetails/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getYelpRestaurantsReviews(id: string): Observable<any> {
    const apiURL = '/api/v1/getYelpRestaurantsReviews/'+id;
    return this.http.get(apiURL).map(response => {return response;});
  }
}
