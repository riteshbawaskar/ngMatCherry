import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-test-suite-dialog',
  templateUrl: './test-suite-dialog.component.html',
  styleUrls: ['./test-suite-dialog.component.scss']
})
export class TestSuiteDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<TestSuiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
