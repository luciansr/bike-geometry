import { Component } from '@angular/core';
import { BikerSizingComponent } from '../biker-sizing/biker-sizing.component';
import { BikerVisualizationComponent } from '../biker-visualization/biker-visualization.component';

@Component({
  selector: 'app-home',
  imports: [BikerSizingComponent, BikerVisualizationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
