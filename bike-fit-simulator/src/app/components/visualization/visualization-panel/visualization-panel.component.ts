import { Component, OnInit } from '@angular/core';
import { CyclistSizing } from '../../../services/sizing/cyclist-sizing';
import { CyclistSizingDataService } from '../../../services/sizing/cyclist-sizing-data.service';
import { CommonModule } from '@angular/common';
import { BikeSizingDataService } from '../../../services/sizing/bike-sizing-data.service';
import { BikeSizing } from '../../../services/sizing/bike-sizing';
import { SvgScaleService } from '../../../services/positioning/scale/svg-scale.service';

@Component({
  selector: 'app-visualization-panel',
  imports: [CommonModule],
  templateUrl: './visualization-panel.component.html',
  styleUrl: './visualization-panel.component.css',
})
export class VisualizationPanelComponent implements OnInit {
  cyclistSizingData: CyclistSizing;
  bikeSizingData: BikeSizing;

  private zoom = 2.0;
  svgSizeX = this.zoom * 300; // 300 pixels = 3m = 300cm
  svgSizeY = this.zoom * 200; // 200 pixels = 2m = 200cm


  floor = {
    x1: 0,
    y1: this.svgSizeY,
    x2: this.svgSizeX,
    y2: this.svgSizeY,
  };

  constructor(
    private cyclistSizingDataService: CyclistSizingDataService,
    private bikeSizingDataService: BikeSizingDataService,
    private svgScaleService: SvgScaleService
  ) {
    this.cyclistSizingData = cyclistSizingDataService.getInitialValue();
    this.bikeSizingData = bikeSizingDataService.getInitialValue();
  }

  ngOnInit() {
    this.cyclistSizingDataService.subscribe((data) => {
      this.cyclistSizingData = data;
    });
    this.bikeSizingDataService.subscribe((data) => {
      this.bikeSizingData = data;
    });
  }
}
