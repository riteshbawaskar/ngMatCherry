import { TestCase } from './../../../models/test-case';
import { TestSuite } from './../../../models/test-suite';
import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-design-test-case',
  templateUrl: './design-test-case.component.html',
  styleUrls: ['./design-test-case.component.scss']
})
export class DesignTestCaseComponent implements OnInit {

  @Input() suitepanel;
  @Input() suite: TestSuite;
  @Input() testcases: TestCase[];
  @Output() SelectedTest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ToggleSuitePanel()
  {
    this.suitepanel.toggle();
  }

  SelectTest(testcase)
  {
    this.SelectedTest.emit(testcase);
  }

}
