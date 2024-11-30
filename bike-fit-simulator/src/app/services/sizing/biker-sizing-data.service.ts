import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CyclistSizing} from './cyclist-sizing';

@Injectable({
  providedIn: 'root',
})
export class BikerSizingDataService {
  private cyclistSizingData: BehaviorSubject<CyclistSizing> =
    new BehaviorSubject<CyclistSizing>(new CyclistSizing());
  public currentData: Observable<CyclistSizing> =
    this.cyclistSizingData.asObservable();

  updateBikerSizing(data: CyclistSizing) {
    this.cyclistSizingData.next(data);
  }

  getInitialValue(): CyclistSizing{
    return this.cyclistSizingData.getValue();
  }
}
