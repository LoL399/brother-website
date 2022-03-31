import { Component, OnInit, ComponentFactoryResolver, ViewChild, AfterViewInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { ModalService } from './../../../../service/modal.service';
import { ModalComponent } from './../../modal/modal.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, AfterViewInit {

  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) { }
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef: any;
  modalInfo: any;

  ngAfterViewInit(): void {

    this.initModalInfo();
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.modalInfo = this.modalService.ModalBuild;
  }

  initModalInfo() {
    let container = typeof this.modalInfo.type === 'function' ? this.modalInfo.type : ModalComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(container);
    const componentRef = this.myRef.createComponent(componentFactory);
    (componentRef.instance as (typeof container)).modalParams = this.modalInfo.modalParams;
    (componentRef.instance as (typeof container)).modalId = this.modalInfo.id;
    (componentRef.instance as (typeof container)).closeEvent = (id: number, data: any) => this.close(data);
    (componentRef.instance as (typeof container)).passingEvent = (id: number, data: any) => this.passing(data);
    if (typeof this.modalInfo.type !== 'function') {
      (componentRef.instance as (typeof this.modalInfo.type)).componentViewChild = this.modalInfo.type;
    }
  }


  /**
   * remove modal, raise callback event
   * @param modalId 
   * @param data 
   */
  close(data: any = null) {
    this.passing(data);
    this.modalService.close(this.modalInfo.id);
  }

  /**
   * return data without close
   * @param modalId modal id
   * @param data retrun from modal data
   */
  passing(data: any = null) {
    if (this.modalInfo.callBack) {
      this.modalInfo.callBack(data);
    }
  }
}
