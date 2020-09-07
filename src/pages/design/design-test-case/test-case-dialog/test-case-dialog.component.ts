import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-test-case-dialog',
  templateUrl: './test-case-dialog.component.html',
  styleUrls: ['./test-case-dialog.component.scss']
})
export class TestCaseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestCaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
