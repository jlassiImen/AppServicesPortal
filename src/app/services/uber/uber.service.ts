import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UberService {

  constructor(public http: HttpClient) { }

//The User Profile endpoint returns information about the Uber user that has authorized with the application.
  getUserProfile(): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/me";

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });


    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

//The User Promotion endpoint allows applying a promotion code to the user’s Uber account.
applyUserPromotion(applied_promotion_codes : string): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/me";

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });

  let body ={
    "applied_promotion_codes":applied_promotion_codes
}
  return this.http.patch(uberApiURL, body,{ headers }).map(response => {
    return response;
  });
}

  //The User Activity endpoint returns a limited amount of data about a user’s lifetime activity with Uber. 
  //The response will include pickup and dropoff times, 
  //the city the trips took place in, the distance of past requests, and information about which products were requested.
  getHistory(): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/history";

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });

    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

//The Payment Methods endpoint allows retrieving the list of the user’s available payment methods. 
  getPaymentMethods(): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/payment-methods";

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });


    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

//The Places endpoint allows retrieving the home and work addresses from an Uber user’s profile.
  getUserPlaces(placeId: string): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/places/" + placeId;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });

    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

//The Places endpoint allows updating the home and work addresses from an Uber user’s profile.
  UpdateUserPlaces(placeId: string ,address:string): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/places/" + placeId;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
    let body ={
      "address": address
   }

    return this.http.put(uberApiURL, body,{ headers }).map(response => {
      return response;
    });
  }

  //The Products endpoint returns information about the Uber products offered at a given location. 
  //The response includes the display name and other details about each product, and lists the products in the proper display order. 
  getProducts(longitude: number, latitude: number): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/products?latitude=" + latitude + "&longitude=" + longitude;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });


    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }


  //The Products Detail endpoint returns information about a specific Uber product.
  // The response includes the display name and other details about the product.
  getProductDetails(product_id: string): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/products/" + product_id ;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });


    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

  //The Time Estimates endpoint returns ETAs for all products currently available at a given location
  getAvailableProducts(longitude: number, latitude: number): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/estimates/time?start_latitude=" + latitude + "&start_longitude=" + longitude;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });


    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

//The Price Estimates endpoint returns an estimated price range for each product offered at a given location. 
//The price estimate is provided as a formatted string with the full price range and the localized currency symbol.
  priceEstimates(start_longitude: number, start_latitude: number,end_latitude: number, end_longitude: number,seat_count: number): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/estimates/price?start_latitude=" + start_latitude + "&start_longitude=" + start_longitude 
    + "&end_latitude=" + end_latitude + "&end_longitude=" + end_longitude ;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
   
    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

  // The Request Estimate endpoint allows a ride to be estimated given the desired product, start, and end locations. 
  // If the pickup ETA is null, there are no cars available even if an estimate may still be given to the user
  rideRequestEstimate(product_id:	string,start_longitude: number, start_latitude: number,end_latitude: number, end_longitude: number,seat_count: number): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/estimate";

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
    let body ={
       "product_id":product_id,
       "start_latitude": start_latitude,
       "start_longitude": start_longitude,
       "end_latitude": end_latitude,
       "end_longitude": end_longitude,
       "seat_count":seat_count
   }

    return this.http.post(uberApiURL,body, { headers }).map(response => {
      return response;
    });
  }

  // The Ride Request endpoint allows a ride to be requested on behalf of an Uber user.
  requestRide(fare_id:	string,product_id: string,start_longitude: number, start_latitude: number,end_latitude: number, end_longitude: number,seat_count: number): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests";

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
    let body ={
       "fare_id":fare_id,
       "product_id":product_id,
       "start_latitude": start_latitude,
       "start_longitude": start_longitude,
       "end_latitude": end_latitude,
       "end_longitude": end_longitude,
       "seat_count":seat_count
   }

    return this.http.post(uberApiURL,body, { headers }).map(response => {
      return response;
    });
  }

  //The Ride Request endpoint allows retrieving real-time details for an ongoing trip.
  currentRideDetails(): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/current" ;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
   
    return this.http.get(uberApiURL, { headers }).map(response => {
      return response;
    });
  }

  //The Ride Request endpoint allows updating an ongoing request’s destination.
  updateCurrentRide(end_latitude: number, end_longitude: number): Observable<any> {
    var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/current" ;

    const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
    let body ={
      "end_latitude": end_latitude,
      "end_longitude": end_longitude
  }
    return this.http.patch(uberApiURL,body, { headers }).map(response => {
      return response;
    });
  }

//The Ride Request endpoint allows cancellation of the user’s current trip.
cancelCurrentRide(): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/current" ;

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
 
  return this.http.delete(uberApiURL, { headers }).map(response => {
    return response;
  });
}

//The Ride Request endpoint allows retrieving the status of an ongoing or completed trip that was created by your app.
getRideDetails(request_id : string): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/"+request_id ;

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
 
  return this.http.get(uberApiURL, { headers }).map(response => {
    return response;
  });
}

//The Ride Request endpoint allows updating an ongoing request’s destination using the Ride Request endpoint.

updateRidebyRequestId(request_id : string,end_latitude: number, end_longitude: number): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/"+request_id ;

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
  let body ={
    "end_latitude": end_latitude,
    "end_longitude": end_longitude
}
  return this.http.patch(uberApiURL,body, { headers }).map(response => {
    return response;
  });
}

//The Ride Request endpoint allows cancellation of an ongoing Request on behalf of a rider.
cancelRideByRequestId(request_id : string): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/"+request_id ;

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
 
  return this.http.delete(uberApiURL, { headers }).map(response => {
    return response;
  });
}

//The Ride Request endpoint getting a map with a visual representation of a Request.
getRideMap(request_id : string): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/"+request_id +"/map" ;

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
 
  return this.http.get(uberApiURL, { headers }).map(response => {
    return response;
  });
}
 //The Ride Request endpoint allows getting the receipt information of the completed request. 
 getRideReceipt(request_id : string): Observable<any> {
  var uberApiURL = "https://sandbox-api.uber.com/v1.2/requests/"+request_id +"/receipt" ;

  const headers = new HttpHeaders({ 'Authorization': environment.uberToken, 'Accept-Language': 'en_US', 'Content-Type': 'application/json' });
 
  return this.http.get(uberApiURL, { headers }).map(response => {
    return response;
  });
}
}
