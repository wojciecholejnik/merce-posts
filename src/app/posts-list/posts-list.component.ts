import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  activePage: number = 0;
  arrToRender: any = [];
  gruppedPosts: any = [];

  changeActivePage = (activePage: number) => {
    this.arrToRender = this.gruppedPosts[activePage]
  }

  increaseActivePage = () => {
    this.activePage < (this.gruppedPosts.length-1) ? this.activePage ++ : '';
    this.changeActivePage(this.activePage);
  };

  decreaseActivePage = () => {
    this.activePage > 0 ? this.activePage -- : '';
    this.changeActivePage(this.activePage);
  };

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    do {
      const arr: Array<object> = json.splice(0,18);
      this.gruppedPosts.push(arr);
    } while (json.length > 0)
      this.changeActivePage(this.activePage);
  })
  }
}
