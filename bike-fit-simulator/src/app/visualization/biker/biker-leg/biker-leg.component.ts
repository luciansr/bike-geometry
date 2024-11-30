import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-biker-leg',
  imports: [],
  templateUrl: './biker-leg.component.html',
  styleUrl: './biker-leg.component.css'
})
export class BikerLegComponent {
  @Input() femurSize!: number;
  @Input() tibiaSize!: number;
  @Input() inseam!: number;

  constructor() {
  }
  
}
