import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangeFilterComponent } from './date-range-filter/date-range-filter.component';

@NgModule({
  declarations: [
    DateRangeFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DateRangeFilterComponent]
})
export class AppModule { }
