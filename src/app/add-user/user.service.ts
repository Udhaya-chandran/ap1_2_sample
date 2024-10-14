import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  user(uname:any,password:any,email:any,address:any,number:any,companyId:any,){
    
    let url = 'http://65.0.104.106:9111/add_users';

    let body = {

      'username': uname,
       'password':password,
       'email': email,
       'address': address,
       'phone_number': number,
       'company_id': companyId,

    }

    return this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }



}
