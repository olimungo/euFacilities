import { Routes, RouterModule } from '@angular/router';

import { Home } from './pages/home/home.component';
import { Users } from './pages/users/users.component';
import { Roles } from './pages/roles/roles.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'users', component: Users },
  { path: 'roles', component: Roles }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);