import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  constructor() { }
  quantities: number = 1;
  images = [
    { path: 'https://hobby.dengeki.com/ss/hobby/uploads/2019/11/img_199869_3w7OcwBoCykb7T5l7BjLsKAP7DovSWi29.jpg' },
    { path: 'https://hobby.dengeki.com/ss/hobby/uploads/2019/11/img_199869_3w7OcwBoCykb7T5l7BjLsKAP7DovSWi29.jpg' },
    { path: 'https://hobby.dengeki.com/ss/hobby/uploads/2019/11/img_199869_3w7OcwBoCykb7T5l7BjLsKAP7DovSWi29.jpg' },

  ]
  ngOnInit(): void {
  }

  changeQuantities(number: number) {
    this.quantities = this.quantities + number < 1 ? 1 : this.quantities + number;
  }
}
