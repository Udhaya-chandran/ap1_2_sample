import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http : HttpClient) { }


  handleError(error:any){
    let errorMessage = '' ;
    if(error.errorMessage instanceof ErrorEvent){
      errorMessage =  error.error.message;
    }
    else{
       errorMessage =   `Error code : ${error.status}\nMessage: ${error.message}`;

    }
    return throwError(errorMessage);

  }


  httpOptions = {
    headers : new HttpHeaders({
   'api_key' : '47c02fd75e077b68fd3074a245669401',
   }),
   responseType:'json' as 'json'
  };

  details(users_id:any,){
    let url = 'http://65.0.104.106:9111/vehicle_details';
    let body = {
      'user_id':users_id,
   
    }
    return  this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

}