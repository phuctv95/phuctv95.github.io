import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  readonly Posts: Post[] = Posts;

  constructor() { }

  ngOnInit() {
  }

}
