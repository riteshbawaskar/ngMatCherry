import { ActionsDataService } from './../../data/actions.data';
import { ActivatedRoute } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { MatTextAvatar } from './../../core/mat-text-avatar/mat-text-avatar.component';
import { ComponentLibDataService } from './../../data/component-lib.data';
import { ComponentLibRoutes } from './component-lib.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLibComponent } from './component-lib.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ComponentLibRoutes,
  ],
  declarations: [ComponentLibComponent, ActionsComponent, MatTextAvatar],
  providers: [ComponentLibDataService, ActionsDataService]
})
export class ComponentLibModule { }
