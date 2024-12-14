import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CyclistSizing } from './cyclist-sizing';
import { ObservableService } from '../positioning/observable-service';

@Injectable({
  providedIn: 'root',
})
export class CyclistSizingDataService
  implements ObservableService<CyclistSizing>
{
  private cyclistSizingData: BehaviorSubject<CyclistSizing> =
    new BehaviorSubject<CyclistSizing>(new CyclistSizing());
  private currentData: Observable<CyclistSizing> =
    this.cyclistSizingData.asObservable();

  updateBikerSizing(data: CyclistSizing) {
    this.cyclistSizingData.next(data);
  }

  subscribe(callback: (data: CyclistSizing) => void): Subscription {
    return this.currentData.subscribe(callback);
  }

  getInitialValue(): CyclistSizing {
    return this.cyclistSizingData.getValue();
  }
}
