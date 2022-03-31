import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../../service/dialog.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(private dialogService: DialogService) { }

  dummyItems: any[] = [];

  ngOnInit(): void {
    this.dummyItems = Array(5).fill(null);
    this.openDialog();
  }

  openDialog() {
    this.dialogService.notifyDialog(200);
  }
}
