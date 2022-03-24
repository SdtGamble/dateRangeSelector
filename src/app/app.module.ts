import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangeFilterComponent } from './date-range-filter/date-range-filter.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ExtendedDateRangeFilterComponent } from './extended-date-range-filter/extended-date-range-filter.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CustomHeaderComponent } from './custom-header/custom-header.component';


@NgModule({
  declarations: [
    DateRangeFilterComponent,
    ExtendedDateRangeFilterComponent,
    CustomHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [DateRangeFilterComponent]
})
export class AppModule { }
