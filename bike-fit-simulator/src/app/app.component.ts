import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  template: `
  <div class="container">
    <app-menu></app-menu>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-fit-simulator';
}