import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EditService {

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

  user(userId:any,vehicleId:any,modelId:any,modelName:any,chasNumber:any,imei:any,regNum:any){
    
    let url = 'http://65.0.104.106:9111/edit_vehicle_details';

    let body = {
      'user_id' : userId,
      'vehicle_id': vehicleId,
       'vehicle_model_id':modelId,
       'vehicle_model_name':modelName,
       'chasis_number': chasNumber,
       'imei': imei,
       'registration_number': regNum,
 
    }

    return this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }



}
