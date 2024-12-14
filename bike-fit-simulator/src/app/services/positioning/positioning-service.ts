import { Subscription } from "rxjs";
import { ObservableService } from "./observable-service";
import { StyledLine } from "./styled-line";

export interface PositioningService extends ObservableService<StyledLine[]> {
    subscribe(callback: (data: StyledLine[]) => void): Subscription;
    getInitialValue(): StyledLine[];
}