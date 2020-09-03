import { TestSuiteDialogComponent } from './test-suite-dialog/test-suite-dialog.component';
import { Observable } from 'rxjs';
import { TestSuite } from './../../../models/test-suite';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestSuitesDataService } from 'src/data/testsuites.data';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-design-test-suite',
  templateUrl: './design-test-suite.component.html',
  styleUrls: ['./design-test-suite.component.scss']
})
export class DesignTestSuiteComponent implements OnInit {

@Output() SelectedSuite = new EventEmitter();
suites: TestSuite[];
suitesHierarchy;
suite: TestSuite ;

constructor(private tsdataService: TestSuitesDataService, public dialog: MatDialog) {  }

ngOnInit() {
   this.suitesHierarchy = this.tsdataService.getHierarchyData();
   console.log(this.suitesHierarchy);
   this.suite = new TestSuite();

  }

  openDialog(suite): void {
    let dialogRef = this.dialog.open(TestSuiteDialogComponent, {
      width: '200',
      data: suite
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('New Suite Added' + result);
      this.suite = result;
      this.tsdataService.add(suite);
      this.suitesHierarchy = this.tsdataService.getHierarchyData();
      console.log(result);

    });
  }

deletesuite(id: any)
{
  if(confirm("Are you sure to delete test suite")) {
    this.tsdataService.delete(id);
    console.log('suite deleted');
    this.suitesHierarchy = this.tsdataService.getHierarchyData();
  }
}

SelectSuite(suite)
{
    this.SelectedSuite.emit(suite);
    console.log('suite Selected' + suite.id);
  }
}
