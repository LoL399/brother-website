import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalComponent } from './../../modal/modal.component';

@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  styleUrls: ['./pop-up-dialog.component.scss']
})
export class PopUpDialogComponent extends ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('popup') popUpContainer: ElementRef | undefined;

  override ngOnInit(): void {
    super.ngOnInit();
    // setInterval(this.closeEvent, 1000);

  }
  ngAfterViewInit(): void {
    setTimeout(() => { this.popUpContainer?.nativeElement.classList.add('close'); }, 2000);
    setTimeout(() => { this.close(); }, 4000);

  }
}
