import { Injectable } from '@angular/core';
import{ HttpClientModule, HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  constructor(private httpClient:HttpClient, private httpClientModule:HttpClientModule) { }

  GetRecipie():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=a75b86e82bb64067acfd2364c3f53149');
  }
}
