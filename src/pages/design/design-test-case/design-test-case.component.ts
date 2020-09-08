import { TestCasesDataService } from './../../../data/testcases.data';
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

  constructor(public dialog: MatDialog, public tcdataservice: TestCasesDataService) { }

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

  deleteTest(testcase: TestCase): void
  {
    if(confirm('Are you sure to delete test test case')) {
    this.tcdataservice.delete(testcase.id);
    this.testcases =  this.tcdataservice.getDataforSuite(this.suite.id);

    }
  }

  editTest(testcase: TestCase): void
  {

    let dialogRef = this.dialog.open(TestCaseDialogComponent, {
      width: '400px',
      data: testcase
    });

  }

  openDialog(): void {

    let testcase = new TestCase();
    testcase.testsuiteid = this.suite.id;
    testcase.tags = [];
    console.log(testcase);

    let dialogRef = this.dialog.open(TestCaseDialogComponent, {
      width: '300px',
      data: testcase
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('New case Added' + result);
      testcase = result;
      testcase.id = '23';
      this.tcdataservice.add(testcase);
      console.log(result);

    });
  }


}
