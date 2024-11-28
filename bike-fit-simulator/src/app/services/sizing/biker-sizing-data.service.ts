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
}
