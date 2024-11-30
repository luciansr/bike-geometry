import { Component } from '@angular/core';
import { BikerSizingDataService } from '../../../services/sizing/biker-sizing-data.service';
import { BikerSizing } from '../../../services/sizing/biker-sizing';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-biker-visualization',
  imports: [CommonModule],
  templateUrl: './biker-visualization.component.html',
  styleUrl: './biker-visualization.component.css',
})
export class BikerVisualizationComponent {
  bikerSizingData: BikerSizing;

  constructor(private bikerSizingDataService: BikerSizingDataService) {
    this.bikerSizingData = bikerSizingDataService.getInitialValue();
  }

  ngOnInit() {
    this.bikerSizingDataService.currentData.subscribe((data) => {
      this.bikerSizingData = data;
    });
  }

  dataValues() {
    return Object.entries(this.bikerSizingData);
  }
}
