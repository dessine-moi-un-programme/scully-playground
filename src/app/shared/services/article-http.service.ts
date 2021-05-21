import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleHttpService {

  articles: Array<Article> = [
    {
      id: 0,
      title: 'Mon premier article',
      img: 'feuille',
      content: 'Ceci est la description de mon premier article. Ce premier article va être vraiment très bien, ...'
    },
    {
      id: 1,
      title: 'Mon deuxième article',
      img: 'nature',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
  ]

  constructor() { }

  getAllArticles(): Observable<Array<Article>> {
    return of(this.articles);
  }

  getArticle(id: number): Observable<Article> {
    return of(this.articles[id]);
  }
}
