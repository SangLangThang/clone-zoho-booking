import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../components/modal-form/modal-form.component';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private modalRef: any;

  constructor(private ngbModal: NgbModal) {}

  open(): Promise<any> {
    this.modalRef = this.ngbModal.open(ModalFormComponent, {
      backdropClass: 'backdropCustomer',
    });

    return this.modalRef.result;
  }
}
