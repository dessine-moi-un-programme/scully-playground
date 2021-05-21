import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleHttpService } from 'src/app/shared/services/article-http.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  public article: Article = {
    id: 0,
    title: '',
    img: '',
    content: ''
  };

  constructor(private route: ActivatedRoute, private articleHttpService: ArticleHttpService) { }

  ngOnInit(): void {
    const articleId: number = this.route.snapshot.params.id;

    this.articleHttpService.getArticle(articleId).subscribe(
      (article) => this.article = article
    )
  }
}
