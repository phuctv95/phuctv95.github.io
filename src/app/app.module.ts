import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PostsComponent } from './posts/posts/posts.component';
import { PostsModule } from './posts/posts.module';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: PostsComponent },
  { path: '', pathMatch: 'full', component: PostsComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
