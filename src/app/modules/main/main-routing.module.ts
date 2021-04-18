import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from 'src/app/modules/main/components/post-list/post-list.component';
import { PostComponent } from 'src/app/modules/main/components/post/post.component';

const routes: Routes = [
  { path: 'post/:id', component: PostComponent },
  { path: '', pathMatch: 'full', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
