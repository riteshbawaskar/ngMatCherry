import { ActionsDataService } from './../../../../data/actions.data';
import { MatSelect } from '@angular/material/select';
import { Action } from './../../../../models/actions';
import { FormControl } from '@angular/forms';
import { MatSelectSearchModule } from './../../../../core/mat-select-search/mat-select-search.module';
import { Component, OnInit , ViewChild, Inject} from '@angular/core';

import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-test-step-dialog',
  templateUrl: './test-step-dialog.component.html',
  styleUrls: ['./test-step-dialog.component.scss']
})
export class TestStepDialogComponent implements OnInit {

  public frmCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
  public frmFilterCtrl: FormControl = new FormControl();

  public filteredActions: ReplaySubject<Action[]> = new ReplaySubject<Action[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  public actions: Action[];

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  constructor(private actionprovider: ActionsDataService,public dialogRef: MatDialogRef<TestStepDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.actions = actionprovider.getActionData();

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
    this.data.validation.push({key: '', value: ''});
  }

  public AddInput(): void {
    this.data.input.push({key: '', value: ''});
  }

  public OnSelectionChange(event)
  {
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
      this.actions.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

}
