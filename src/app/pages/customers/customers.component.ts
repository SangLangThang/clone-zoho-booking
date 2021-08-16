import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faArrowsAltV,
  faPlus,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { DialogServiceService } from '../../components/dialog-service.service';
import { CustomerService } from './../../services/customer.service';
import { Customer, Count } from './Customer';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;
  faTimes = faTimes;
  faArrowsAltV = faArrowsAltV;

  customers: Customer[] = [];
  customersOld: Customer[] = [];
  searchControl = new FormControl();
  count: any = {
    register: 0,
    guest: 0,
    total: 0,
  };

  showSearch: boolean = false;

  constructor(
    private dialogService: DialogServiceService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.getLists().subscribe((customers) => {
      this.customers = customers;
      this.customers.map((customer) => {
        this.upCount(customer.type);
        this.customersOld = [...this.customers];
      });
    });

    this.searchControl.valueChanges.subscribe((value) => {
      this.customers = this.customersOld.filter((customer) => {
        return customer.name?.indexOf(value.toString()) != -1;
      });
    });
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  upCount = (type: any) => {
    if (type === 'Register') {
      this.count.register += 1;
      console.log('Add register :', this.count.register);
    }
    if (type === 'Guest') {
      this.count.guest += 1;
      console.log('Add guest :', this.count.guest);
    }
    this.count.total = this.count.register + this.count.guest;
  };

  openModalForm() {
    this.dialogService.open().then((customer) => {
      if (customer != 'noAdd') {
        this.customers.push(customer);
        this.upCount(customer.type);
      }
    });
  }
}
