import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor() {}

  dummyItems: any[] = [];

  ngOnInit(): void {
    this.dummyItems = Array(5).fill(null);
  }
}
