import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

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

 service(userId:any,vehicleId:any,date:any,time:any,type:any,remarks:any,number:any){
    
    let url = 'http://65.0.104.106:9111/add_service';

    let body = {

      'user_id': userId,
       'vehicle_id':vehicleId,
       'service_planned_date': date,
       'service_planned_time': time,
       'service_planned_type': type,
       'service_planned_remarks': remarks,
       'vehicle_service_number':number

    }

    return this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }



}
