import { Routes, RouterModule } from '@angular/router';

import { Home } from './pages/home/home.component';
import { Users } from './pages/users/users.component';
import { LogIn } from './pages/log-in/log-in.component';
import { SignIn } from './pages/sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'users', component: Users },
  { path: 'log-in', component: LogIn },
  { path: 'sign-in', component: SignIn }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);