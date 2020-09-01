import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '', component: DesignComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }