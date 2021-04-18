import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'src/app/modules/main/components/header/header.component';
import { BodyComponent } from 'src/app/modules/main/components/body/body.component';
import { PostListComponent } from 'src/app/modules/main/components/post-list/post-list.component';
import { PostComponent } from 'src/app/modules/main/components/post/post.component';
import { StartPageComponent } from './components/start-page/start-page.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    BodyComponent,
    PostListComponent,
    PostComponent,
    StartPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
