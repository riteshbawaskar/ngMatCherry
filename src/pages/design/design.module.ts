import { ActionsDataService } from './../../data/actions.data';
import { MatSelectSearchModule } from './../../core/mat-select-search/mat-select-search.module';
import { TestCaseDialogComponent } from './design-test-case/test-case-dialog/test-case-dialog.component';
import { TestStepsDataService } from './../../data/teststeps.data';
import { TestCasesDataService } from './../../data/testcases.data';
import { TestSuitesDataService } from './../../data/testsuites.data';
import { DesignTestStepComponent } from './design-test-step/design-test-step.component';
import { DesignTestSuiteComponent } from './design-test-suite/design-test-suite.component';
import { DesignTestCaseComponent } from './design-test-case/design-test-case.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './../../core/material.module';
import { DesignRoutingModule } from './design-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TestSuiteDialogComponent} from './design-test-suite/test-suite-dialog/test-suite-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FilterPipe } from '../../helpers/filter.pipes';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DraggableDialogDirective } from '../../helpers/DraggableDialog.directive';
import { TestStepDialogComponent } from './design-test-step/test-step-dialog/test-step-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatSelectSearchModule
  ],
  declarations: [
    FilterPipe,
    DraggableDialogDirective,
    DesignComponent,
    DesignTestSuiteComponent,
    DesignTestCaseComponent,
    DesignTestStepComponent,
    TestSuiteDialogComponent,
    TestCaseDialogComponent,
    TestStepDialogComponent
  ],
  providers: [
    TestSuitesDataService,
    TestCasesDataService,
    TestStepsDataService,
    ActionsDataService
  ],
})
export class DesignModule {}
