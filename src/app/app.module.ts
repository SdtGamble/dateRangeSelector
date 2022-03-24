import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangeFilterComponent } from './date-range-filter/date-range-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DateRangeFilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [DateRangeFilterComponent]
})
export class AppModule { }
