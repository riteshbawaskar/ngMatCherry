import { TestStepsDataService } from './../../data/teststeps.data';
import { TestCasesDataService } from './../../data/testcases.data';
import { TestSuitesDataService } from './../../data/testsuites.data';
import { DesignTestStepComponent } from './design-test-step/design-test-step.component';
import { DesignTestSuiteComponent } from './design-test-suite/design-test-suite.component';
import { DesignTestCaseComponent } from './design-test-case/design-test-case.component';

import { MaterialModule } from './../../core/material.module';
import { DesignRoutingModule } from './design-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FilterPipe } from '../../helpers/filter.pipes';

@NgModule({
  imports: [
    CommonModule,
    DesignRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],
  declarations: [FilterPipe, DesignComponent, DesignTestSuiteComponent, DesignTestCaseComponent, DesignTestStepComponent],
  providers : [TestSuitesDataService, TestCasesDataService, TestStepsDataService]

})
export class DesignModule { }