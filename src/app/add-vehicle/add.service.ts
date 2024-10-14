import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http : HttpClient) { }


  handleError(error:any){

    let errorMessage = '';

    if(error.errorMessage instanceof ErrorEvent){

      errorMessage = error.error.message;
    }
    else{
      errorMessage = `Error code : ${error.status} \nMessage: ${error.message}`;

    }

    return throwError(errorMessage);
  }


  httpOptions = {

    headers : new HttpHeaders({
      'api_key' : '47c02fd75e077b68fd3074a245669401',
    }),

    resposeType : 'json' as 'json'
  
  };

  addVehicle(uname:any,email:any,address:any,number:any,vehicleId:any,vehicleName:any,chassisNumber:any,imei:any,regNum:any, id:any){

    let url = 'http://65.0.104.106:9111/add_vehicle_details';
    let body = {

      'username' : uname,
      'email':email ,
      'address':address,
      'phone_number':number,
      'vehicle_model_id':vehicleId,
      'vehicle_model_name':vehicleName,
      'chasis_number':chassisNumber,
      'imei':imei,
      'registration_number':regNum,
      'user_id' : id
    }

    return this.http.post(url,body,this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }
}
