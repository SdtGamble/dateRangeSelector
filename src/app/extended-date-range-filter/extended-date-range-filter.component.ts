import { Component, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';
import { LocaleConfig } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-extended-date-range-filter',
  templateUrl: './extended-date-range-filter.component.html',
  styleUrls: ['./extended-date-range-filter.component.css']
})
export class ExtendedDateRangeFilterComponent implements OnInit {

  selected: {startDate: Dayjs, endDate: Dayjs};
  locale: LocaleConfig = {
    customRangeLabel: ' - ',
    format: "DD/MM/YYYY"
  }

  // ranges: any = {
  //   'Today': [moment(), moment()],
  //   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  //   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  //   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  //   'This Month': [moment().startOf('month'), moment().endOf('month')],
  //   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  // }

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(lol : string) {
    console.log("lol");
  }

}
