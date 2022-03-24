import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended-date-range-filter',
  templateUrl: './extended-date-range-filter.component.html',
  styleUrls: ['./extended-date-range-filter.component.css']
})
export class ExtendedDateRangeFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Run on date change via calendar selection or enter key
  dateChanged(startDate: HTMLInputElement, endDate: HTMLInputElement) {
    console.log(startDate.value);
    console.log(endDate.value);
  }

}
