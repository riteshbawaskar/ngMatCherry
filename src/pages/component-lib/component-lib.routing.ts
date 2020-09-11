import { ActionsComponent } from './actions/actions.component';
import { NgModule } from '@angular/core';
import { ComponentLibComponent } from './component-lib.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {  path: '', component: ComponentLibComponent   },
  { path: 'actions/:id', component: ActionsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentLibRoutes { }
