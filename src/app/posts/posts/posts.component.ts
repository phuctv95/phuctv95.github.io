import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  url = '/assets/posts.json';
  posts: Post[];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Post[]>(this.url).pipe(take(1)).subscribe(res => {
      this.posts = res;
      this.initPostSummaries(this.posts);
    });
  }

  initPostSummaries(posts: Post[]): void {
    posts.forEach(p => {
      p.thumbnail = '/assets/imgs/photo.png';
      p.createdDate = new Date();
    });
  }

}
