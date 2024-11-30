import { Component } from '@angular/core';
import { BikerSizingDataService } from '../../../services/sizing/biker-sizing-data.service';
import { BikerSizing } from '../../../services/sizing/biker-sizing';
import { CommonModule, NgIf } from '@angular/common';
import { SvgScaleService } from '../../../services/positioning/scale/svg-scale.service';

@Component({
  selector: 'app-biker-visualization',
  imports: [CommonModule],
  templateUrl: './biker-visualization.component.html',
  styleUrl: './biker-visualization.component.css',
})
export class BikerVisualizationComponent {
  private zoom: number = 2.0;
  svgSizeX: number = this.zoom * 300; // 300 pixels = 3m = 300cm
  svgSizeY: number = this.zoom * 200; // 200 pixels = 2m = 200cm
  private scale3M_X = this.svgSizeX * 100; // 3M in mm
  private scale2M_Y = this.svgSizeX * 100; // 2M in mm

  floor = {
    x1: 0,
    y1: this.svgSizeY,
    x2: this.svgSizeX,
    y2: this.svgSizeY,
  };

  bikerSizingData: BikerSizing;

  constructor(
    private bikerSizingDataService: BikerSizingDataService,
    private svgScaleService: SvgScaleService
  ) {
    this.bikerSizingData = bikerSizingDataService.getInitialValue();
  }

  ngOnInit() {
    this.bikerSizingDataService.currentData.subscribe((data) => {
      this.bikerSizingData = data;
    });
  }

  dataValues() {
    return Object.entries(this.bikerSizingData);
  }
}
