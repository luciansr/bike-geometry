import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BikerSizing } from './biker-sizing';

@Injectable({
  providedIn: 'root',
})
export class BikerSizingDataService {
  private bikerSizingData: BehaviorSubject<BikerSizing> =
    new BehaviorSubject<BikerSizing>(new BikerSizing());
  public currentData: Observable<BikerSizing> =
    this.bikerSizingData.asObservable();

  constructor() {}

  updateBikerSizing(data: BikerSizing) {
    this.bikerSizingData.next(data);
  }

  getInitialValue(): BikerSizing {
    return this.bikerSizingData.getValue();
  }
}
