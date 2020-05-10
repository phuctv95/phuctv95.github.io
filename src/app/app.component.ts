import { Component } from '@angular/core';
import { HeaderItem } from './model/header-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my blog';

  headerItems = [
    { text: 'Home', href: '' },
    { text: 'Posts', href: '/posts' },
    { text: 'About', href: '/about' }
  ] as HeaderItem[];
}
