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
  private bikeTranslation: Position;

  cyclistSizingData: CyclistSizing;
  bikeSizingData: BikeSizing;
  bikePositioningData: StyledLine[];
  allLines: StyledLine[];

  svgSizeX: number; // 300 pixels = 3m = 300cm
  svgSizeY: number; // 200 pixels = 2m = 200cm

  seatToHandlebarDistance = 0;
  seatToHandlebarDrop = 0;

  constructor(
    private cyclistSizingDataService: CyclistSizingDataService,
    private bikeSizingDataService: BikeSizingDataService,
    private byciclePositioningService: ByciclePositioningService,
    private svgScaleService: SvgScaleService
  ) {
    this.svgSizeX = this.svgScaleService.svgSizeX;
    this.svgSizeY = this.svgScaleService.svgSizeY;
    this.cyclistSizingData = cyclistSizingDataService.getInitialValue();
    this.bikeSizingData = bikeSizingDataService.getInitialValue();
    this.bikePositioningData = byciclePositioningService.getInitialValue();
    this.bikeTranslation = {
      x: 150,
      y: -50,
    };

    this.allLines = this.svgScaleService.translateMany(
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
      this.allLines = this.svgScaleService.translateMany(
        this.bikePositioningData,
        this.bikeTranslation
      );

      const { drop, distance } =
        this.byciclePositioningService.getSeatToHandlebar();
      this.seatToHandlebarDistance = distance;
      this.seatToHandlebarDrop = drop;
    });
  }
}
