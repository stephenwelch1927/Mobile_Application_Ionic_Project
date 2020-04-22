import { Injectable } from '@angular/core';
import{ HttpClientModule, HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  constructor(private httpClient:HttpClient, private httpClientModule:HttpClientModule) { }

  GetRecipie():Observable<any>{
    return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
  }
}
