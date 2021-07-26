import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight , faArrowLeft} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() activePage: number = 0;
  @Input() increaseActivePage: Function | undefined;
  @Input() decreaseActivePage: Function | undefined;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor() {
  }

  ngOnInit(): void {
  }

}
