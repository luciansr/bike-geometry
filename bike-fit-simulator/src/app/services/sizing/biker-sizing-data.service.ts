import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BikerSizing } from './biker-sizing';

@Injectable({
  providedIn: 'root'
})
export class BikerSizingDataService {
  private bikerSizingData = new BehaviorSubject<BikerSizing>({});
  currentData = this.bikerSizingData.asObservable();

  constructor() {}

  updateBikerSizing(data: BikerSizing) {
    this.bikerSizingData.next(data);
  }

  getInitialValue(): BikerSizing {
    if (Object.keys(this.bikerSizingData.getValue()).length === 0) {
      this.bikerSizingData.next({
        torso: 65,
        upperLeg: 55,
        lowerLeg: 65,
        footSize: 42,
      });
    }
    return this.bikerSizingData.getValue();
  }
}
