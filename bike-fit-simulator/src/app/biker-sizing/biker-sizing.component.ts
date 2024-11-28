import { Component, NgModule } from '@angular/core';
import { BikerSizingDataService } from '../services/sizing/biker-sizing-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biker-sizing',
  imports: [BrowserModule, FormsModule],
  templateUrl: './biker-sizing.component.html',
  styleUrl: './biker-sizing.component.css'
})
export class BikerSizingComponent {
  torsoSize: number = 65;
  lowerLegSize: number = 50;
  upperLegSize: number = 50;
  footSize: number = 42;
  constructor(private bikerSizingDataService: BikerSizingDataService) {}

  updateData() {
    const data = {
      torso: this.torsoSize,
      lowerLeg: this.lowerLegSize,
      upperLeg: this.upperLegSize,
      footSize: this.footSize
    };
    this.bikerSizingDataService.updateBikerSizing(data);
  }
}
