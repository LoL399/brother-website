import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  headerText: any;
  componentViewChild: any;
  modalStyle: any;
  modalId: number = 0;
  closeEvent: any;
  passingEvent: any;
  hiddenHeader: boolean = false;
  closebtn: boolean = true;
  modalParams: any;

  @ViewChild('modalShell') modalShell: any;                      // Modal content

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    this.headerText = this.modalParams?.header || '確認';
    if (this.modalParams?.style) {
      this.modalStyle = {
        ...this.modalParams.style,
        position: 'absolute'
      };
    }
    this.modalFocusInStrigger();
  }

  /**
   * Close modal event
   * @param data data return when close popup
   */
  close(data: any = null) {
    this.closeEvent(this.modalId, data);
  }

  /**
   * pass modal data without close event
   * @param data data return when close popup
   */
  passingData(data: any = null) {
    this.passingEvent(this.modalId, data);
  }

  /**
   * Get class name for modal
   * @returns list of class name
   */
  classHandler() {
    return ['modal-content-mobile'];
  }

  contentStyle() {
    if (!this.closebtn) {
      return { height: 'calc(100% - 64px)' };
    }
    return {};
  }
  /**
   * Get class overLay
   * @returns class overlay
   */
  overlayHandle() {
    return this.modalParams?.overlay ? 'overlay' : '';
  }

  /**
   * on Click outside modal handler
   */
  clickOutSide() {
    if (!this.modalParams?.static) {
      this.close();
    }
  }

  /**
   * Handle focus out event handler
   * @param event focu sevent param
   */
  onFocusOut(event: any) {
    let nextEle = event.relatedTarget;
    // when focus outside modal
    if (!this.elementRef.nativeElement.contains(nextEle)) {
      // because cannot prevent focusout, so use focus again to modal
      this.modalFocusInStrigger();
    }
  }

  /**
   * Raise table focus in event
   * @param selectRowIndex  selected row index
   */
  modalFocusInStrigger() {
    if (this.modalShell) this.modalShell?.nativeElement.focus();
    else {
      // if modal element is not rendered yet, wait for 1 milisecond and raise focus again.
      setTimeout(function (modal: any) {
        modal.modalShell?.nativeElement.focus();
      }, 1, this);
    }
  }

}
