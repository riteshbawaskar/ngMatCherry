import { ActionsDataService } from './../../../../data/actions.data';
import { MatSelect } from '@angular/material/select';
import { Action } from './../../../../models/actions';
import { FormControl } from '@angular/forms';
import { MatSelectSearchModule } from './../../../../core/mat-select-search/mat-select-search.module';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-test-step-dialog',
  templateUrl: './test-step-dialog.component.html',
  styleUrls: ['./test-step-dialog.component.scss'],
})
export class TestStepDialogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public frmCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public frmFilterCtrl: FormControl = new FormControl();

  public filteredActions: ReplaySubject<Action[]> = new ReplaySubject<Action[]>(
    1
  );

  @ViewChild('singleSelect') singleSelect: MatSelect;

  public actions: Action[];

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  constructor(
    private actionprovider: ActionsDataService,
    public dialogRef: MatDialogRef<TestStepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.actions = actionprovider.getActionData();
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    // set initial selection
    // this.frmCtrl.setValue(this.actions[0]);

    // load the initial bank list
    this.filteredActions.next(this.actions.slice());
    // listen for search field value changes
    this.frmFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterActions();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  private setInitialValue() {
    this.filteredActions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: Action, b: Action) => a.id === b.id;
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  public AddValidation(): void {
    this.data.validation.push({ key: '', value: '' });
  }

  removeValidatefield(validationfield): void
  {
    const index = this.data.validation.indexOf(validationfield);
    this.data.input.splice(index, 1);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add
    if ((value || '').trim()) {
      console.log(this.data);
      this.data.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.data.tags.indexOf(tag);

    if (index >= 0) {
      this.data.tags.splice(index, 1);
    }
  }

  public AddInput(): void {
    this.data.input.push({ key: '', value: '' });
  }

  removeInputfield(inputfield): void
  {
    const index = this.data.tags.indexOf(inputfield);
    this.data.input.splice(index, 1);
  }
  public OnSelectionChange(event) {
    console.log('selected ' + event.value.name);
    this.data.input = event.value.input;
    this.data.validation = event.value.validation;
  }

  private filterActions() {
    if (!this.actions) {
      return;
    }
    // get the search keyword
    let search = this.frmFilterCtrl.value;
    if (!search) {
      this.filteredActions.next(this.actions.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the actions
    this.filteredActions.next(
      this.actions.filter(
        (bank) => bank.name.toLowerCase().indexOf(search) > -1
      )
    );
  }
}
