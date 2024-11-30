import { Component } from '@angular/core';
import { BikerVisualizationComponent } from '../biker/biker-visualization/biker-visualization.component';
import { BikerSizing } from '../../services/sizing/biker-sizing';
import { BikerSizingDataService } from '../../services/sizing/biker-sizing-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualization-panel',
  imports: [BikerVisualizationComponent, CommonModule],
  templateUrl: './visualization-panel.component.html',
  styleUrl: './visualization-panel.component.css'
})
export class VisualizationPanelComponent {
  bikerSizingData: BikerSizing;

  constructor(private bikerSizingDataService: BikerSizingDataService) {
    this.bikerSizingData = bikerSizingDataService.getInitialValue();
  }

  ngOnInit() {
    this.bikerSizingDataService.currentData.subscribe((data) => {
      this.bikerSizingData = data;
    });
  }
}
