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

  @ViewChild('cart') cartView: any;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void { }

  expandCateFunc() {
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
