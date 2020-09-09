import { Component, OnInit, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-test-execution-dialog',
  templateUrl: './test-execution-dialog.component.html',
  styleUrls: ['./test-execution-dialog.component.scss']
})
export class TestExecutionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
