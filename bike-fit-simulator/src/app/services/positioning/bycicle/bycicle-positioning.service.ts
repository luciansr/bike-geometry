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

  constructor(
    private bikeSizingDataService: BikeSizingDataService,
    private svgScaleService: SvgScaleService
  ) {
    this.updatePosition(bikeSizingDataService.getInitialValue());
    this.bikeSizingDataService.subscribe((data) => {
      this.updatePosition(data);
    });
  }

  private updatePosition(data: BikeSizing) {
    const stack = new StyledLine(
      this.svgScaleService.getPositionFromGroundLeft(0, 0),
      this.svgScaleService.getPositionFromGroundLeft(data.reach, data.stack),
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
    console.log(handlebar);

    const handlebarTranslated = this.svgScaleService.translate(
      handlebar,
      {
        x: handlebarSpacers.end.x - handlebarSpacers.start.x,
        y: handlebarSpacers.end.y - handlebarSpacers.start.y,
      }
    );
    console.log(handlebarTranslated);

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
