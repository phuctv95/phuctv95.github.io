import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { MarkdownModule } from 'ngx-markdown';

// Routing: list post, read a post

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
