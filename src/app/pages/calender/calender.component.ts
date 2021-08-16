import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { LISTS } from './Lists';
import { CountryService } from 'src/app/services/country.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  constructor(private countryServices: CountryService) {}
  lists: Country[] = [];
  ngOnInit(): void {
    /*  this.countryServices.getLists().subscribe((lists) => {
      return (this.lists = lists);
    }); */
  }

  onClick() {
    let a = document.querySelectorAll('.country');
    a.forEach((e, index) => {
      let result = { id: index, tag: '', name: '', code: '' };
      result.tag = e.getAttribute('data-country-code') || '';
      result.name = e.querySelector('.country-name')?.innerHTML || '';
      result.code = e.querySelector('.dial-code')?.innerHTML || '';
      /* this.lists.push(result); */
      this.countryServices.addCountry(result).subscribe();
    });
  }
}
