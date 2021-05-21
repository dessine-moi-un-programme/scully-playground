import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleHttpService } from 'src/app/shared/services/article-http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public articles: Array<Article> = [];

  constructor(private articleHttpService: ArticleHttpService) { }

  ngOnInit(): void {
    this.articleHttpService.getAllArticles().subscribe(
      (articles) => this.articles = articles
    )
  }

}
