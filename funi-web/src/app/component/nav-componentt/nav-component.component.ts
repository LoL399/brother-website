import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from './../../service/modal.service';
import { CartComponent } from './../cart/cart.component';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss'],
})
export class NavComponentComponent implements OnInit {
  expandCategory: boolean = false;

  bodyHeight: number = 0;

  @ViewChild('cart') cartView: any;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void { }

  expandCateFunc() {
    let body = document.body;
    let html = document.documentElement;
    this.bodyHeight = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight)
    this.expandCategory = !this.expandCategory;
  }
  openCart() {
    let param = {
      style: {
        height: 'unset',
        width: 'fit-content'
      }
    }
    this.modalService.open(this.cartView, param);
  }


}
