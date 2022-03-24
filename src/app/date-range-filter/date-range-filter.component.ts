import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.css']
})
export class DateRangeFilterComponent implements OnInit {
  events: string[];

  constructor() { }

  ngOnInit(): void {
  }

  //Run on date change via calendar selection or enter key
  dateChanged(startDate: HTMLInputElement, endDate: HTMLInputElement) {
    console.log(startDate.value);
    console.log(endDate.value);
  }
}
