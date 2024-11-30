import { Component } from '@angular/core';
import { BikerVisualizationComponent } from '../biker/biker-visualization/biker-visualization.component';

@Component({
  selector: 'app-visualization-panel',
  imports: [BikerVisualizationComponent],
  templateUrl: './visualization-panel.component.html',
  styleUrl: './visualization-panel.component.css'
})
export class VisualizationPanelComponent {

}
