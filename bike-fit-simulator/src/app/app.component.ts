import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-fit-simulator';
}



// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterModule.forRoot(routes), MenuComponent],
//   template: `
//     <app-menu></app-menu>
//     <router-outlet></router-outlet>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {}