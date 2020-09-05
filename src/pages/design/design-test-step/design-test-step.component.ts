import { Component, OnInit , Input , ViewChild} from '@angular/core';
import { TestStep } from 'src/models/test-step';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-design-test-step',
  templateUrl: './design-test-step.component.html',
  styleUrls: ['./design-test-step.component.scss']
})
export class DesignTestStepComponent implements OnInit {

  @ViewChild('perfectScroll') perfectScroll: PerfectScrollbarComponent;
  @Input() teststeps: TestStep[];
  constructor() {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.perfectScroll.directiveRef.update();

    moveItemInArray(this.teststeps, event.previousIndex, event.currentIndex);
    let stepid = 1;
    this.teststeps.forEach(function(step: TestStep){
      step.id = (stepid).toString();
      stepid = stepid + 1;
    });

  }

  ngOnInit() {
  }

  deletestep(step) { }
}
