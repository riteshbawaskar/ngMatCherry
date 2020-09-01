import { TestStepsDataService } from './../../data/teststeps.data';
import { TestStep } from './../../models/test-step';
import { TestCasesDataService } from './../../data/testcases.data';
import { TestCase } from './../../models/test-case';
import { TestSuite } from './../../models/test-suite';
import { DesignTestSuiteComponent } from './design-test-suite/design-test-suite.component';
import { MaterialModule } from './../../core/material.module';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  selectedSuite: TestSuite;
  selectedTest: TestCase;
  testcases: TestCase[] = [];
  teststeps: TestStep[] = [];
  constructor(private tcdataservice: TestCasesDataService , private tsdataservice:TestStepsDataService) { }

  ngOnInit() {
  }

  onSelectedSuite(suite)
  {
    this.selectedSuite = suite;
    console.log('in design selected suite' + suite.id);
    this.testcases = this.tcdataservice.getDataforSuite(suite.id);
  }

  onSelectedTest(test)
  {
    this.selectedTest = test;
    console.log('in design selected test' + test.id);
    this.teststeps = this.tsdataservice.getDataforTestCase(test.id);
    console.log(this.teststeps);
  }
}
