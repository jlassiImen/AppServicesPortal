import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SimpleLoginService {

    isAuthenticated=false;
    
  constructor(private http: HttpClient, private router: Router) {}

  public register(user: any): Observable<any> {
    const apiURL = '/registerUser';
    return this.http.post(apiURL, user);
     
  }

  public authenticate(user: any): Observable<any> {
    const apiURL = '/authenticate';
    return this.http.post(apiURL, user);
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log("trueeeeeeeeeeeeeee");
            return true;
        }
        else {
        console.log("flassssssssssss");
            return false;
        }

  }

}
