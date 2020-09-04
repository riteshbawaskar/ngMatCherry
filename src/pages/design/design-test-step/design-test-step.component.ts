import { Component, OnInit , Input } from '@angular/core';
import { TestStep } from 'src/models/test-step';

@Component({
  selector: 'app-design-test-step',
  templateUrl: './design-test-step.component.html',
  styleUrls: ['./design-test-step.component.scss']
})
export class DesignTestStepComponent implements OnInit {

  @Input() teststeps: TestStep[];
  constructor() { }

  ngOnInit() {
  }

  deletestep(step) { }
}
