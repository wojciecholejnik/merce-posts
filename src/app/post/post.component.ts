import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, Input, OnInit, } from '@angular/core';
import { faStarOfLife, faCode, faCompass, faBone, faCampground, faAngleLeft, faEye, faCat, faDog, faHeart, faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],

})
export class PostComponent implements OnInit {
  @Input() body = '';
  @Input() title = '';
  @Input() id = '';
  randomNumber = Math.floor(Math.random() * 10)

  faStarOfLife = faStarOfLife;
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
  }



}
