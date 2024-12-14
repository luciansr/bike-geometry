import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { BikeSizing } from './bike-sizing';
import { ObservableService } from '../positioning/observable-service';

@Injectable({
  providedIn: 'root',
})
export class BikeSizingDataService implements ObservableService<BikeSizing> {
  
  private bikeSizingData: BehaviorSubject<BikeSizing> =
    new BehaviorSubject<BikeSizing>(new BikeSizing());
  private currentData: Observable<BikeSizing> =
    this.bikeSizingData.asObservable();

  updateBikerSizing(data: BikeSizing) {
    this.bikeSizingData.next(data);
  }

  subscribe(callback: (data: BikeSizing) => void): Subscription {
    return this.currentData.subscribe(callback);
  }

  getInitialValue(): BikeSizing {
    return this.bikeSizingData.getValue();
  }
}
