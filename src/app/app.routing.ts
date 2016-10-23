import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { CalendarDemo } from './demos/calendar/calendar.demo';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calendar', component: CalendarDemo }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);