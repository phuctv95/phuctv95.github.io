import { Component, OnInit } from '@angular/core';
import { Posts } from '../../../../posts';
import { Post } from '../../models/post';

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
