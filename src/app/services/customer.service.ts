import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../pages/customers/Customer';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiCustomer = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  getLists(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiCustomer);
  }
  addCustomer(customer: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(this.apiCustomer, customer, httpOptions);
  }
}
