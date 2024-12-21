import { Injectable } from '@angular/core';
import { LineStyle, StyledLine } from '../styled-line';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PositioningService } from '../positioning-service';
import { BikeSizingDataService } from '../../sizing/bike-sizing-data.service';
import { BikeSizing } from '../../sizing/bike-sizing';
import { SvgScaleService } from '../scale/svg-scale.service';

@Injectable({
  providedIn: 'root',
})
export class ByciclePositioningService implements PositioningService {
  private bikePositionData: BehaviorSubject<StyledLine[]> = new BehaviorSubject<
    StyledLine[]
  >([]);
  private currentData: Observable<StyledLine[]> =
    this.bikePositionData.asObservable();
  private seatToHandlebarDistance = 0;
  private seatToHandlebarDrop = 0;

  constructor(
    private bikeSizingDataService: BikeSizingDataService,
    private svgScaleService: SvgScaleService
  ) {
    this.updatePosition(bikeSizingDataService.getInitialValue());
    this.bikeSizingDataService.subscribe((data) => {
      this.updatePosition(data);
    });
  }

  public getSeatToHandlebar(): {distance: number, drop: number} {
    return {
      distance: this.seatToHandlebarDistance,
      drop: this.seatToHandlebarDrop
    };
  }

  private updatePosition(data: BikeSizing) {
    const stack = new StyledLine(
      this.svgScaleService.getPositionFromGroundLeft(0, 0),
      this.svgScaleService.getPositionFromGroundLeft(0, data.stack),
      LineStyle.RED
    );

    const reach = new StyledLine(
      this.svgScaleService.getPositionFromGroundLeft(0, data.stack),
      this.svgScaleService.getPositionFromGroundLeft(data.reach, data.stack),
      LineStyle.RED
    );

    const seatTube = new StyledLine(
      this.svgScaleService.getPositionFromGroundLeft(0, 0),
      this.svgScaleService.getPositionDistanceFromGroundLeftInAnAngle(
        0,
        0,
        data.seatHeight,
        data.seatTubeAngle
      ),
      LineStyle.RED
    );

    const handlebarSpacers = new StyledLine(
      this.svgScaleService.getPositionFromGroundLeft(data.reach, data.stack),
      this.svgScaleService.getPositionDistanceFromGroundLeftInAnAngle(
        data.reach,
        data.stack,
        data.handlebarSpacers,
        data.headTubeAngle
      ),
      LineStyle.RED
    );

    // console.log(data.reach, data.stack, data.handlebarSpacers, data.handlebarSpacers);

    const handlebar = new StyledLine(
      this.svgScaleService.getPositionFromGroundLeft(data.reach, data.stack),
      this.svgScaleService.getPositionDistanceFromGroundLeftInAnAngle(
        data.reach,
        data.stack,
        data.stemSize,
        data.headTubeAngle + 90 - data.stemAngle
      ),
      LineStyle.RED
    );


    const handlebarTranslated = this.svgScaleService.translate(handlebar, {
      x: handlebarSpacers.end.x - handlebarSpacers.start.x,
      y: handlebarSpacers.end.y - handlebarSpacers.start.y,
    });

    this.seatToHandlebarDistance = this.svgScaleService.getDistanceBetween(
      seatTube.end,
      handlebarTranslated.end
    );
    this.seatToHandlebarDrop = this.svgScaleService.getDistanceBetween(
      {
        x: 0,
        y: seatTube.end.y,
      },
      {
        x: 0,
        y: handlebarTranslated.end.y,
      },
    );

    this.bikePositionData.next([
      stack,
      reach,
      seatTube,
      handlebarSpacers,
      handlebarTranslated,
    ]);
  }

  subscribe(callback: (data: StyledLine[]) => void): Subscription {
    return this.currentData.subscribe(callback);
  }

  getInitialValue(): StyledLine[] {
    return this.bikePositionData.getValue();
  }
}
