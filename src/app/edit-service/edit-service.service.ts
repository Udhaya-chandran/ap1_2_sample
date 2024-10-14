import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditServiceService {

  constructor(private http:HttpClient) { }



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




 serve(Id:any,serviceId:any,date:any,time:any,serviceCenter:any){
    let url = 'http://65.0.104.106:9111/edit_service';
    let body = {
      'user_id' : Id,
      'service_id' : serviceId,
      'service_planned_date': date,
      'service_planned_time':time,
       'service_planned_type':serviceCenter
    }

    return this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError))
   
  }


}
