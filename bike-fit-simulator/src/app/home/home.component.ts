import { Component } from '@angular/core';
import { BikerSizingComponent } from '../biker-sizing/biker-sizing.component';
import { VisualizationPanelComponent } from '../visualization/visualization-panel/visualization-panel.component';


@Component({
  selector: 'app-home',
  imports: [BikerSizingComponent, VisualizationPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
