import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss'],
})
export class NavComponentComponent implements OnInit {
  expandCategory: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  expandCateFunc() {
    this.expandCategory = !this.expandCategory;
  }
}
