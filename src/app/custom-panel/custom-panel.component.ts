import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-panel',
  templateUrl: './custom-panel.component.html',
  styleUrls: ['./custom-panel.component.css']
})
export class CustomPanelComponent<D> {

  // list of range presets we want to provide:
  readonly customPresets = customPresets;

  // called when user selects a range preset:
  selectRange(rangeName: CustomPreset): void {
    // ... implementation follows
  }

  



}

const customPresets = [
  'today',
  'last 7 days',
  'this week',
  'this month',
  'this year',
  'last week',
  'last month',
  'last year',
] as const;

// equivalent to "today" | "last 7 days" | … | "last year"
type CustomPreset = typeof customPresets[number];


