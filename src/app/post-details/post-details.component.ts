import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTimes, faStarOfLife, faCode, faCompass, faBone, faCampground, faAngleLeft, faEye, faCat, faDog, faHeart, faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  randomNumber = Math.floor(Math.random() * 10);

  post = {title: '', body: ''};
  comments = [];
  showComments: boolean = true;
  toggleShowComments: Function = () => {
    this.showComments = !this.showComments;
  }

  faTimes=faTimes
  faStarOfLife=faStarOfLife;
  faCode=faCode;
  faCompass=faCompass;
  faBone=faBone;
  faCampground=faCampground;
  faAngleLeft=faAngleLeft;
  faEye=faEye;
  faCat=faCat;
  faDog=faDog;
  faHeart=faHeart;
  faArrowRight=faArrowRight;


  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => this.post = json);

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(json => this.comments = json)
      })
  }

}
