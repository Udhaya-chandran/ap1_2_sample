

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'api_key': '47c02fd75e077b68fd3074a245669401',
    }), responseType: 'json' as 'json'
  };

  login(uname: any, password : any){
     let url = 'http://65.0.104.106:9111/login';
    let body = {
      'username' : uname,
      'password' : password
     }
     return this.http.post(url, body, this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }
}
