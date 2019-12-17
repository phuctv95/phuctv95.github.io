import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './single-pages/about/about.component';
import { PageNotFoundComponent } from './single-pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
      path: '', pathMatch: 'full', redirectTo: '/posts'
  },
  {
      path: 'about', component: AboutComponent
  },
  {
      path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
