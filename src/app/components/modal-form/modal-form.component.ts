import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { listsCountry } from 'src/app/api/countryApi';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Customer } from 'src/app/pages/customers/Customer';
import { CustomerService } from './../../services/customer.service';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit {
  faPlus = faPlus;
  faTimes = faTimes;

  listsCountry = listsCountry;

  showSelect: boolean = false;

  select = {
    tag: 'vn',
    code: '+84',
  };

  addCustomer!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addCustomer = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.minLength(3)]],
      type: 'Guest',
      revenue: '0.00',
      phone: this.fb.group({
        code: '+84',
        mobile: '',
      }),
    });
  }

  onSubmit() {
    if (this.addCustomer.valid) {
      console.log('form submitted');
      let result = {
        ...this.addCustomer.value,
        phone: `${this.addCustomer.value.phone.code}${this.addCustomer.value.phone.mobile}`,
      };
      this.customerService.addCustomer(result).subscribe();
      this.activeModal.close(result);
    } else {
      this.validateAllFormFields(this.addCustomer);
    }
  }
  onClose() {
    this.activeModal.close('noAdd');
  }
  toggleSelect() {
    this.showSelect = !this.showSelect;
  }
  onSelect(country: any) {
    this.select.tag = country.tag;
    this.select.code = country.code;
    this.addCustomer.value.phone.code = country.code;
    this.showSelect = !this.showSelect;
  }

  isFieldValid(field: string) {
    let a =
      this.addCustomer.get(field)?.errors &&
      this.addCustomer.get(field)?.touched;
    return a;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      console.log('validate:', field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
