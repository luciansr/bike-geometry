import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BikerSizingComponent } from './components/sizing/biker-sizing/biker-sizing.component';
import { BycicleSizingComponent } from './components/sizing/bycicle-sizing/bycicle-sizing.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'cyclist-sizing', component: BikerSizingComponent },
      { path: 'bycicle-sizing', component: BycicleSizingComponent },
      { path: '', redirectTo: '/home/cyclist-sizing', pathMatch: 'full' },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
