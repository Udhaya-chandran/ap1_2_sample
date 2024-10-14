import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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




addProduct(userId:any,productName:any,code:any,description:any, file :any){
    let url = 'http://65.0.104.106:9111/add_product';
    const formData = new FormData();
    formData.append('user_id', userId);
   
    formData.append('product_name', productName);
    formData.append('product_code', code);
    formData.append('product_description', description);
    formData.append('files', file);

    return this.http.post(url, formData, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}