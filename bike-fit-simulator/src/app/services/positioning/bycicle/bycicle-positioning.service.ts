import { Injectable } from '@angular/core';
import { StyledLine } from '../styled-line';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PositioningService } from '../positioning-service';
import { BikeSizingDataService } from '../../sizing/bike-sizing-data.service';
import { BikeSizing } from '../../sizing/bike-sizing';

@Injectable({
  providedIn: 'root',
})
export class ByciclePositioningService implements PositioningService {
  private bikePositionData: BehaviorSubject<StyledLine[]> = new BehaviorSubject<
    StyledLine[]
  >([]);
  private currentData: Observable<StyledLine[]> =
    this.bikePositionData.asObservable();
  private bikeSizingData: BikeSizing;

  constructor(private bikeSizingDataService: BikeSizingDataService) {
    this.bikeSizingData = bikeSizingDataService.getInitialValue();
    this.bikeSizingDataService.subscribe((data) => {
      this.bikeSizingData = data;
    });
  }

  private updatePosition(data: StyledLine[]) {
    this.bikePositionData.next(data);
  }


  subscribe(callback: (data: StyledLine[]) => void): Subscription {
    return this.currentData.subscribe(callback);
  }

  getInitialValue(): StyledLine[] {
    return this.bikePositionData.getValue();
  }
}
