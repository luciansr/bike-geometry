import { Component, OnInit } from '@angular/core';
import { CyclistSizing } from '../../../services/sizing/cyclist-sizing';
import { CyclistSizingDataService } from '../../../services/sizing/cyclist-sizing-data.service';
import { CommonModule } from '@angular/common';
import { BikeSizingDataService } from '../../../services/sizing/bike-sizing-data.service';
import { BikeSizing } from '../../../services/sizing/bike-sizing';
import { SvgScaleService } from '../../../services/positioning/scale/svg-scale.service';
import { StyledLine } from '../../../services/positioning/styled-line';
import { ByciclePositioningService } from '../../../services/positioning/bycicle/bycicle-positioning.service';
import { Position } from '../../../services/positioning/position';

@Component({
  selector: 'app-visualization-panel',
  imports: [CommonModule],
  templateUrl: './visualization-panel.component.html',
  styleUrl: './visualization-panel.component.css',
})
export class VisualizationPanelComponent implements OnInit {
  cyclistSizingData: CyclistSizing;
  bikeSizingData: BikeSizing;
  bikePositioningData: StyledLine[];
  allLines: StyledLine[];

  private zoom = 2.0;
  svgSizeX = this.zoom * 300; // 300 pixels = 3m = 300cm
  svgSizeY = this.zoom * 200; // 200 pixels = 2m = 200cm
  bikeTranslation : Position;

  constructor(
    private cyclistSizingDataService: CyclistSizingDataService,
    private bikeSizingDataService: BikeSizingDataService,
    private byciclePositioningService: ByciclePositioningService,
    private svgScaleService: SvgScaleService
  ) {
    this.cyclistSizingData = cyclistSizingDataService.getInitialValue();
    this.bikeSizingData = bikeSizingDataService.getInitialValue();
    this.bikePositioningData = byciclePositioningService.getInitialValue();
    this.bikeTranslation = {
      x: 30,
      y: -10
    }
    console.log(this.bikeTranslation);
    this.allLines = this.svgScaleService.translate(
      this.bikePositioningData,
      this.bikeTranslation
    );
  }

  ngOnInit() {
    this.cyclistSizingDataService.subscribe((data) => {
      this.cyclistSizingData = data;
    });
    this.bikeSizingDataService.subscribe((data) => {
      this.bikeSizingData = data;
    });
    this.byciclePositioningService.subscribe((data) => {
      this.bikePositioningData = data;
      this.allLines = this.svgScaleService.translate(
        this.bikePositioningData,
        this.bikeTranslation
      );
    });
  }
}
