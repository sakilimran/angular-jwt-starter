import { Injectable } from '@angular/core';


import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {DataService} from './data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor( private router: Router, private http: HttpClient, private dataService: DataService) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    isLoggedin() {
      if (localStorage.getItem('currentUser')) {
        // logged in so return true
        return true;
      }
      return false;
    }
    login(email: string, password: string): Observable<boolean> {

        return this.http.post(environment.baseApiUrl + '/auth/login', { email: email, password: password })
            .map(response => {
                const token = (JSON.parse(JSON.stringify(response)).data.token);
                console.log(token);
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            },
              error2 => {
               console.log(error2);
              });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.refresh();
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
    }


  refresh(): void {
    window.location.reload();
  }
}
