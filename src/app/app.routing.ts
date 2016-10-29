import { Routes, RouterModule } from '@angular/router';

import { Buildings } from './pages/buildings/buildings.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/buildings', pathMatch: 'full' },
  { path: 'buildings', component: Buildings }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);