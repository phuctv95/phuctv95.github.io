import { Component, OnInit, Input } from '@angular/core';
import { HeaderItem } from 'src/app/model/header-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() items: HeaderItem[];

  constructor() { }

  ngOnInit() {
  }

}
