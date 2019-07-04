import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  constructor(private http: HttpClient, private router: Router) { }
   
    public getPayment(payment: any): Observable<any> {
    const apiURL = '/userPayment/:userId';
    return this.http.get(apiURL, payment);
  }
    public addPayment(payment: any): Observable<any> {
    const apiURL = '/addPay/:creditCartNumber';
    return this.http.post(apiURL, payment);

  }
}
