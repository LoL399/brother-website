import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  constructor() {}
  images = [
    {
      path: 'https://hobby.dengeki.com/ss/hobby/uploads/2019/11/img_199869_3w7OcwBoCykb7T5l7BjLsKAP7DovSWi29.jpg',
      name: 'one',
    },
    {
      path: 'https://hobby.dengeki.com/ss/hobby/uploads/2019/11/img_199869_3w7OcwBoCykb7T5l7BjLsKAP7DovSWi29.jpg',
      name: 'one',
    },
    {
      path: 'https://hobby.dengeki.com/ss/hobby/uploads/2019/11/img_199869_3w7OcwBoCykb7T5l7BjLsKAP7DovSWi29.jpg',
      name: 'one',
    },
  ];
  quantities: number = 1;
  changeQuantities(number: number) {
    this.quantities =
      this.quantities + number < 1 ? 1 : this.quantities + number;
  }
  ngOnInit(): void {}
}
