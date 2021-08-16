import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../pages/calender/Country';
import { LISTS } from '../pages/calender/Lists';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiCountry = 'http://localhost:3000/listsCountry';
  constructor(private http: HttpClient) {}

  getLists(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiCountry);
  }
  addCountry(country: Country): Observable<Country[]> {
    return this.http.post<Country[]>(this.apiCountry, country, httpOptions);
  }
}
