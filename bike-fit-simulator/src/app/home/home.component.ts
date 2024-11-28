import { Component } from '@angular/core';
import { BikerSizingComponent } from '../biker-sizing/biker-sizing.component';

@Component({
  selector: 'app-home',
  imports: [BikerSizingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
