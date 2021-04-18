import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/main/components/post/post.component';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [
  { path: 'post/:id', component: PostComponent },
  { path: '', pathMatch: 'full', component: StartPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
