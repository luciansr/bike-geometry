import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

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
      route: '/home/cyclist-sizing',
    },
    {
      label: 'Bike Sizing',
      route: '/home/bycicle-sizing',
    },
    {
      label: 'About',
      route: '/about',
    },
  ];

  activeRoute = this.menuItems[0].route;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeRoute = event.urlAfterRedirects;
      });
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
