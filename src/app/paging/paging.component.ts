import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight , faArrowLeft} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() activePage = 0;
  @Input() increaseActivePage = null;
  @Input() decreaseActivePage = null;

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor() {
  }

  ngOnInit(): void {
  }

}
