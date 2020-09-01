import { MaterialModule } from './../../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrumboardComponent } from './scrumboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


export const ROUTES: Routes = [
   { path: '', component: ScrumboardComponent }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(ROUTES),
    DndModule.forRoot(),
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [ScrumboardComponent]
})
export class ScrumboardModule { }
