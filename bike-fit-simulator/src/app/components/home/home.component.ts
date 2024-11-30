import { Component } from '@angular/core';
import { VisualizationPanelComponent } from '../visualization/visualization-panel/visualization-panel.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule, VisualizationPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
