import { Injectable } from '@angular/core';
import { Status } from '../common/enum';
import { ModalService } from './modal.service';
import { PopUpDialogComponent } from './../component/modal/popup-dialog/pop-up-dialog/pop-up-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: ModalService) { }

  private statusFlg = Status;

  notifyDialog(status: Status) {
    let params = {
      status: status || this.statusFlg.ERROR
    }
    this.modalService.open(PopUpDialogComponent);
  }

}
