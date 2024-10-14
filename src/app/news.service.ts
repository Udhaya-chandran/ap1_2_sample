import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  doGet(): Observable<any> {
    const url = '//newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=0bcb0c0e1bb940d78a7bd3ce52f33c29';
    return this.httpClient.get(url);
  }
}
