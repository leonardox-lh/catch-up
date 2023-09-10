import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
 apiKey='7f0eeb2042f9465aa8fe054e487755fd';
  baseUrl='https://newsapi.org/v2';
 constructor(private http:HttpClient) { }

  getSource(){
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`)
  }
  getArticlesBySourceId(sourceId:string){
   return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }
  initArticles(){
   return this.getArticlesBySourceId('bbc-news');
  }
}
