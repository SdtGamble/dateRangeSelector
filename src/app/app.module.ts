import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateRangeFilterComponent } from './date-range-filter/date-range-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DateRangeFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DateRangeFilterComponent]
})
export class AppModule { }
