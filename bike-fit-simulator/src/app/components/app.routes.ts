import { Routes } from '@angular/router';
import { HomeComponent } from './base/home/home.component';
import { AboutComponent } from './base/about/about.component';
// import { BikerSizingComponent } from './sizing/biker-sizing/biker-sizing.component';
import { BycicleSizingComponent } from './sizing/bycicle-sizing/bycicle-sizing.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // { path: 'cyclist-sizing', component: BikerSizingComponent },
      { path: 'bycicle-sizing', component: BycicleSizingComponent },
      { path: '', redirectTo: '/home/bycicle-sizing', pathMatch: 'full' },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
