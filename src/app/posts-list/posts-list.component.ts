import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts = [];
  activePage = 1;
  p1 = [];
  p2 = [];
  p3 = [];
  p4 = [];
  p5 = [];
  p6 = [];
  arrToRender = [];

  changeActivePage = () => {
    switch (this.activePage) {
      case 1: {
        this.arrToRender = this.p1;
        break;
      };
      case 2: {
        this.arrToRender = this.p2;
        break;
      };
      case 3: {
        this.arrToRender = this.p3;
        break;
      };
      case 4: {
        this.arrToRender = this.p4;
        break;
      };
      case 5: {
        this.arrToRender = this.p5;
        break;
      };
      case 6: {
        this.arrToRender = this.p6;
        break;
      };
      default: {
        this.arrToRender = this.p1;
        break;
      }
    }
  }

  increaseActivePage = () => {
    this.activePage <= 5 ? this.activePage ++ : '';
    this.changeActivePage();
  };

  decreaseActivePage = () => {
    this.activePage > 1 ? this.activePage -- : '';
    this.changeActivePage();
  };



  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    this.posts = json;
    this.p1 = json.splice(0, 16);
    this.arrToRender = json.splice(0, 16);
    this.p2 = json.splice(0, 16);
    this.p3 = json.splice(0, 16);
    this.p4 = json.splice(0, 16);
    this.p5 = json.splice(0, 16);
    this.p6= json.splice(0, 16);
  })
  }


}
