import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import {PostDetailsComponent} from './post-details/post-details.component';

const routes: Routes = [
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
