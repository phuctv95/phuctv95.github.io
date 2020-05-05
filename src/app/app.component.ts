import { Component } from '@angular/core';
import { HeaderItem } from './model/header-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'blog';

  headerItems = [
    { text: 'Home' },
    { text: 'About' }
  ] as HeaderItem[];
}
