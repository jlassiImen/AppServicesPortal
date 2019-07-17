import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestorationService {

  constructor(public http: HttpClient, public router: Router) { }

    public getAllRestaurant(): Observable<any[]> {
    const apiURL = '/allRestaurant';
    return this.http.get<any[]>(apiURL).map(response => {return response;});
  }

    public getRestaurant(restaurantId: string): Observable<any> {
    const apiURL = '/restaurant'+restaurantId;
    return this.http.get(apiURL).map(response => {return response;});
  }

   public addRestaurant(restaurant: any): Observable<any> {
    const apiURL = '/addRestaurant';
    return this.http.post(apiURL, restaurant);
  }

   public updateDetailsRestaurant(restaurant: any): Observable<any> {
    const apiURL = '/updateDetailsRestaurant';
    return this.http.post(apiURL, restaurant);
  }
   public deleteRestaurant(restaurant: any): Observable<any> {
    const apiURL = '/deleteRestaurant';
    return this.http.delete(apiURL, restaurant);
  }

   public getMenuItem(restaurantId: string, name: string): Observable<any> {
    const apiURL = '/getMenuItem'+restaurantId+name;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getMenuCategory(name: string): Observable<any> {
    const apiURL = '/getMenuCategory'+name;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public getRestaurantDetails(restaurantId: string): Observable<any> {
    const apiURL = '/restaurantDetails'+restaurantId;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public addMenuCategory(menuCategory: any): Observable<any> {
    const apiURL = '/addMenuCategory';
    return this.http.delete(apiURL, menuCategory);
  }

  public addMenuItem(item: any): Observable<any> {
    const apiURL = '/addMenuItem';
    return this.http.delete(apiURL, item);
  }
}
