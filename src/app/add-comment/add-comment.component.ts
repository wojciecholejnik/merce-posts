import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {faComment} from '@fortawesome/free-regular-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap
    .subscribe(params => {
      const routeId = params.get('id');
      this.postId = routeId;
    })
  }

  @Input() toggleShowComments: any;
  @Input() comments: any;

  postId: any;
  name = null;
  email = null;
  content = null;

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  postComment = () => {
    if(this.name && this.email && this.content) {
      const dataToSend = {
      postId: this.postId,
      name: this.name,
      email: this.email,
      body: this.content
    };

    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: dataToSend,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },})
    .then((response) => response.json())
    .then((json) => {
      this.comments.unshift({
        ...json.body,
        id: json.id
      });
    });
      window.alert('Komentarz dodano!');
      this.toggleShowComments();
      } else {
        window.alert('Wprowadź wszystkie dane!')
      }
  }


  faComment=faComment;
  faTimes=faTimes;

}
