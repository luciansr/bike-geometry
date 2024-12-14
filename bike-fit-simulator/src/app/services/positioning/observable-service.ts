import { Subscription } from "rxjs";

export interface ObservableService<TObservable> {
    subscribe(callback: (data: TObservable) => void): Subscription;
    getInitialValue(): TObservable;
}