import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './../component/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  libViewRef: any;
  viewRefs: any = [];
  parentLocation: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef, private injector: Injector) { }


  /**
   * create modal 
   * @param component 
   * @param modalParams 
   * @param callBack 
   * @param viewContainerRef 
   * @returns 
   */
  open(component: any, modalParams: any = null, viewContainerRef = null) {
    // this.initModal();
    this.parentLocation = viewContainerRef || this.libViewRef;
    let container = typeof component === 'function' ? component : ModalComponent;
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(container).create(this.injector);
    //
    (componentRef.instance as (typeof container)).modalParams = modalParams;
    (componentRef.instance as (typeof container)).modalId = this.viewRefs.length;
    (componentRef.instance as (typeof container)).closeEvent = (id: number, data: any) => this.close(id, data);
    (componentRef.instance as (typeof container)).passingEvent = (id: number, data: any) => this.passing(id, data);
    if (typeof component !== 'function') {
      (componentRef.instance as (typeof container)).componentViewChild = component;
    }
    this.viewRefs.push({ id: this.viewRefs.length, componentRef, });
    // attach component to the appRef so that so that it will be dirty checked.
    this.applicationRef.attachView(componentRef.hostView);
    // get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    // const componentRef = this.parentLocation.createComponent(componentFactory);
    return componentRef.instance;
  }

  /**
   * remove modal, raise callback event
   * @param modalId 
   * @param data 
   */
  close(modalId: any = null, data: any = null) {
    let findModal = this.viewRefs.map(function (e: any) { return e.id; }).indexOf(modalId);
    if (findModal > -1) {
      let modalView = this.viewRefs.splice(findModal, findModal + 1)[0];
      // modalView.componentRef.location.nativeElement.remove();
      modalView.componentRef.destroy();
      // // Clear parent component
      // this.parentLocation?.clear();
      if (modalView.callBack) {
        modalView.callBack(data);
      }
    }
  }

  /**
   * return data without close
   * @param modalId modal id
   * @param data retrun from modal data
   */
  passing(modalId: any = null, data: any = null) {
    let findModal = this.viewRefs.map(function (e: any) { return e.id; }).indexOf(modalId);
    if (findModal > -1) {
      let modalView = this.viewRefs[findModal];
      // modalView.componentRef.location.nativeElement.remove();
      if (modalView.callBack) {
        modalView.callBack(data);
      }
    }
  }
}
