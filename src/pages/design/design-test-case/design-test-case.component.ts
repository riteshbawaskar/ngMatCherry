import { TestCaseDialogComponent } from './test-case-dialog/test-case-dialog.component';
import { TestCase } from './../../../models/test-case';
import { TestSuite } from './../../../models/test-suite';
import { Component, OnInit , Input, Output , EventEmitter, ViewChild} from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  @ViewChild('perfectScroll') perfectScroll: PerfectScrollbarComponent;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ToggleSuitePanel()
  {
    this.suitepanel.toggle();
  }

  SelectTest(testcase)
  {
    this.SelectedTest.emit(testcase);
    this.perfectScroll.directiveRef.update();
  }

}
