import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCommentComponent} from './add-comment/add-comment.component';
import {PostDetailsComponent} from './post-details/post-details.component';

const routes: Routes = [
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
