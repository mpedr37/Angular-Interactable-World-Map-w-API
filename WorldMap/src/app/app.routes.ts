import { Routes } from '@angular/router';
import { MapCompComponent } from './map-comp/map-comp.component';

//Part D:
export const routes: Routes = [
  {path: 'Map', component: MapCompComponent },
  {path: '', redirectTo:'/Map', pathMatch:'full'}
];
