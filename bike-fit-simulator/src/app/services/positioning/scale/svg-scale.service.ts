import { Injectable } from '@angular/core';
import { Position } from '../position';

@Injectable({
  providedIn: 'root',
})
export class SvgScaleService {
  private zoom = 2.0;
  svgSizeX = this.zoom * 300; // 300 pixels = 3m = 300cm
  svgSizeY = this.zoom * 200; // 200 pixels = 2m = 200cm
  private scale3M_X = this.svgSizeX * 100; // 3M in mm
  private scale2M_Y = this.svgSizeX * 100; // 2M in mm

  getSvgSize = {
    x: this.svgSizeX,
    y: this.svgSizeY,
  };

  public getPositionFromGroundLeft(
    xInMilimeters: number,
    yInMilimeters: number
  ): Position {
    const x = 0 + (xInMilimeters / this.scale3M_X) * this.svgSizeX;
    const y = this.svgSizeY + (yInMilimeters / this.scale2M_Y) * this.svgSizeY;

    return {
      x: x,
      y: y,
    };
  }
}
