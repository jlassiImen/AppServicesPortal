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
    const apiURL = '/api/v1/registerUser';
    return this.http.post(apiURL, user);

  }

  public authenticate(user: any): Observable<any> {
    const apiURL = '/api/v1/authenticate';
    return this.http.post(apiURL, user);
  }

  public updateProfile(user: any): Observable<any> {
    const apiURL = '/api/v1/updatePersonnelProfile';
    return this.http.post(apiURL, user);
  }

    public updatePassword(user: any): Observable<any> {
    const apiURL = '/api/v1/updatePassword';
    return this.http.post(apiURL, user);
  }

  public logout(): void {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
     localStorage.removeItem('token');
     localStorage.removeItem('restaurantList');
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
    const apiURL = '/api/v1/userDetails/'+email;
    return this.http.get(apiURL).map(response => {return response;});
  }

  public confirmationRegister(user: any): Observable<any> {
    const apiURL = '/api/v1/confirmRegistration';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(apiURL, user, { headers });

  }

  public resend(user: any): Observable<any> {
    const apiURL = '/api/v1/resend';
    return this.http.post(apiURL, user);
  }

  public forgotPassword(user: any): Observable<any> {
    const apiURL = '/api/v1/forgotPassword';
    return this.http.post(apiURL, user);

  }

  public resetPassword(user: any): Observable<any> {
    const apiURL = '/api/v1/resetPassword';
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(apiURL, user, { headers });

  }
}
