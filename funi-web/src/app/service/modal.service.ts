import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './../component/modal/modal/modal.component';
import { OverlayComponent } from './../component/modal/overlay/overlay/overlay.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  libViewRef: any;
  viewRefs: any = [];
  parentLocation: any;
  private _modalBuild: ModalBuildInfo = new ModalBuildInfo();

  get ModalBuild() {
    return this._modalBuild;
  }

  set ModalBuild(value) {
    this._modalBuild = value;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef, private injector: Injector) { }


  /**
   * create modal 
   * @param component 
   * @param modalParams 
   * @param callBack 
   * @param viewContainerRef 
   * @returns 
   */
  open(component: any, modalParams: any = null, callBack: any = null, viewContainerRef = null) {
    // this.initModal();
    this.parentLocation = viewContainerRef || this.libViewRef;
    // let container = typeof component === 'function' ? component : ModalComponent;
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent).create(this.injector);
    this.ModalBuild = { id: this.viewRefs.length, type: component, modalParams, callBack }
    this.viewRefs.push({ id: this.viewRefs.length, componentRef});
    // attach component to the appRef so that so that it will be dirty checked.
    this.applicationRef.attachView(componentRef.hostView);
    // get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    return componentRef.instance;
  }

  removeScroll(open: boolean = false) {
    open ? document.body.style.position = 'fixed' : document.body.style.position = ''
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
    this.removeScroll(false);
  }
}


class ModalBuildInfo {
  id: number = 0;
  type: any;
  modalParams: any;
  callBack?: Function;
}
