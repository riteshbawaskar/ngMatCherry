import { TestStepsDataService } from './../../../data/teststeps.data';
import { TestStepDialogComponent } from './test-step-dialog/test-step-dialog.component';
import { TestCase } from './../../../models/test-case';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TestStep } from 'src/models/test-step';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-design-test-step',
  templateUrl: './design-test-step.component.html',
  styleUrls: ['./design-test-step.component.scss'],
})
export class DesignTestStepComponent implements OnInit {
  @ViewChild('perfectScroll') perfectScroll: PerfectScrollbarComponent;
  @Input() teststeps: TestStep[];
  @Input() testcase: TestCase;
  constructor(
    public dialog: MatDialog,
    public tsdataservice: TestStepsDataService
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    this.perfectScroll.directiveRef.update();

    moveItemInArray(this.teststeps, event.previousIndex, event.currentIndex);
    let stepid = 1;
    this.teststeps.forEach(function (step: TestStep) {
      step.id = stepid.toString();
      stepid = stepid + 1;
    });
  }

  ngOnInit() {}

  deletestep(step) {}

  openDialog(): void {
    let teststep = new TestStep();
    teststep.testcaseid = this.testcase.id;
    teststep.tags = [];

    let dialogRef = this.dialog.open(TestStepDialogComponent, {
      width: '500px',
      data: teststep,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('New step Added' + result);
    });
  }

  editStep(step): void {
    let dialogRef = this.dialog.open(TestStepDialogComponent, {
      width: '500px',
      data: step,
    });
  }
}
