import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditserviceService {

  constructor(private http:HttpClient ) { }



  handleError(error:any){

    let errorMessage = '';

    if(error.errorMessage instanceof ErrorEvent){

      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error code: ${error.status} \mMessage:${error.message}`;
    }

    return throwError(errorMessage);

  }

  httpOptions = {

    headers : new HttpHeaders ({
      'api_key' : '47c02fd75e077b68fd3074a245669401',
    }),
    responseType :  'json' as 'json'
  };

edit(Id:any,cusId:any,cusName:any,address:any,city:any,state:any,country:any,){
    
    let url = 'http://65.0.104.106:9111/edit_customer';

    let body = {

      'user_id': Id,
      'customer_id':cusId,
       'customer_name':cusName,
       'address': address,
       'city_name':city,
       'state_name': state,
       'country_name': country,

    }

    return this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }



}
