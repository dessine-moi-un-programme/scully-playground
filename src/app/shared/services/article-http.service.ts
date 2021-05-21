import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpService {

  constructor(private httpClient: HttpClient) { }

  getAllArticles(): Observable<Array<Article>> {
    return this.httpClient.get<Array<Article>>("http://localhost:3000/articles");
  }

  getArticle(id: number): Observable<Article> {
    return this.httpClient.get<Article>("http://localhost:3000/articles/" + id);
  }
}
