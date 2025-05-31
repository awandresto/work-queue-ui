import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: AccountComponent,
    path: 'accounts'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];
