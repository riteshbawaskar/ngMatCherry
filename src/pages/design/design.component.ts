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
  constructor() { }

  ngOnInit() {
  }

  onSelectedSuite(suite)
  {
    this.selectedSuite = suite;
    console.log('in design selected suite' + suite.id);
  }
}
