import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuItems = [
    {
      label: 'Cyclist sizing',
      route: 'home/cyclist-sizing',
    },
    {
      label: 'Bike Sizing',
      route: 'home/bycicle-sizing',
    },
  ];
}
