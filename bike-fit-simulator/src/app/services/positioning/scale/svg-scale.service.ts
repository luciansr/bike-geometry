import { Injectable } from '@angular/core';
import { Position } from '../position';
import { StyledLine } from '../styled-line';

@Injectable({
  providedIn: 'root',
})
export class SvgScaleService {
  private zoom = 2.0;
  svgSizeX = this.zoom * 300; // 300 pixels = 3m = 300cm
  svgSizeY = this.zoom * 200; // 200 pixels = 2m = 200cm
  private scale3M_X = 3 * 100 * 10; // 3M in mm
  private scale2M_Y = 2 * 100 * 10; // 2M in mm

  getSvgSize = {
    x: this.svgSizeX,
    y: this.svgSizeY,
  };

  public getPositionFromGroundLeft(
    xInMilimeters: number,
    yInMilimeters: number
  ): Position {
    const x = 0 + (xInMilimeters / this.scale3M_X) * this.svgSizeX;
    const y = this.svgSizeY - (yInMilimeters / this.scale2M_Y) * this.svgSizeY;

    return {
      x: x,
      y: y,
    };
  }

  public translate(
    lines : StyledLine[],
    position: Position
  ): StyledLine[] {
    return lines.map((line) => {
      return new StyledLine(
        {
          x: line.start.x + position.x,
          y: line.start.y + position.y,
        },
        {
          x: line.end.x + position.x,
          y: line.end.y + position.y,
        },
        line.lineStyle
      );
    });
  }

  public getPositionDistanceFromGroundLeftInAnAngle(
    xInMilimeters: number,
    yInMilimeters: number,
    // distanceInMilimeters: number,
    // angleInDegrees: number
  ): Position {
    const x = 0 + (xInMilimeters / this.scale3M_X) * this.svgSizeX;
    const y = this.svgSizeY + (yInMilimeters / this.scale2M_Y) * this.svgSizeY;

    return {
      x: x,
      y: y,
    };
  }
}
