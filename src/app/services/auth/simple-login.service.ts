import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SimpleLoginService {

  isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  public register(user: any): Observable<any> {
    const apiURL = '/registerUser';
    return this.http.post(apiURL, user);

  }

  public authenticate(user: any): Observable<any> {
    const apiURL = '/authenticate';
    return this.http.post(apiURL, user);
  }

  public updatePassword(user: any): Observable<any> {
    const apiURL = '/updatePassword';
    return this.http.post(apiURL, user);
  }

  public logout(): void {
    localStorage.removeItem('userEmail');
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    if (localStorage.getItem('userEmail')) {
      return true;
    }
    else {
      return false;
    }

  }

  public getUser(email: string): Observable<any> {
    const apiURL = '/userDetails/'+email;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public confirmationRegister(user: any): Observable<any> {
    const apiURL = '/confirmRegistration';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(apiURL, user, { headers });

  }

  public resend(user: any): Observable<any> {
    const apiURL = '/resend';
    return this.http.post(apiURL, user);
  }

  public forgotPassword(user: any): Observable<any> {
    const apiURL = '/forgotPassword';
    return this.http.post(apiURL, user);

  }

  public resetPassword(user: any): Observable<any> {
    const apiURL = '/resetPassword';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(apiURL, user, { headers });

  }
}
