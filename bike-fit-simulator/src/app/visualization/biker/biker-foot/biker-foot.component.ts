import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biker-foot',
  imports: [],
  templateUrl: './biker-foot.component.html',
  styleUrl: './biker-foot.component.css'
})
export class BikerFootComponent {

  @Input() footSize: number | undefined;

}
