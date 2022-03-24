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

  addEvent(startDate: HTMLInputElement, endDate: HTMLInputElement, event: MatDatepickerInputEvent<Date>) {
    console.log(startDate.value);
    console.log(endDate.value);
    console.log(event);
  }
}
