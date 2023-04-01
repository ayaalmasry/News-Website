import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }
  //news api url
  
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  //tech news
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
  
  //business news
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
 
  
  topHeading():Observable<any>{
   return this._http.get(this.newsApiUrl);
  }
  
  
  techNews():Observable<any>{
   return this._http.get(this.techApiUrl);
  }
  
   businessNews():Observable<any>{
   return this._http.get(this.businessApiUrl);
  }
  
}
