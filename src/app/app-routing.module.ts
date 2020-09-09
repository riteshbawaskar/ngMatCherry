import { ComponentsComponent } from './../pages/Components/Components.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UsersComponent } from '../pages/users/users.component';
import { AuthGuard } from '../helpers';

const accountModule = () =>
  import('../pages/account/account.module').then((x) => x.AccountModule);
const usersModule = () =>
  import('../pages/users/users.module').then((x) => x.UsersModule);

const designModule = () =>
  import('../pages/design/design.module').then((x) => x.DesignModule);
const resultsModule = () =>
  import('../pages/results/results.module').then((x) => x.ResultsModule);

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'users', component: UsersComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'account', loadChildren: accountModule },
  { path: 'design', loadChildren: designModule },
  { path: 'results', loadChildren: resultsModule, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
