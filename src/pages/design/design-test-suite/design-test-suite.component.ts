import { Observable } from 'rxjs';
import { TestSuite } from './../../../models/test-suite';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestSuitesDataService } from 'src/data/testsuites.data';


@Component({
  selector: 'app-design-test-suite',
  templateUrl: './design-test-suite.component.html',
  styleUrls: ['./design-test-suite.component.scss']
})
export class DesignTestSuiteComponent implements OnInit {

@Output() SelectedSuite = new EventEmitter();
suites: TestSuite[];
suitesHierarchy;


constructor(private tsdataService: TestSuitesDataService) {  }

ngOnInit() {
   this.suitesHierarchy = this.tsdataService.getHierarchyData();
   console.log(this.suitesHierarchy);

  }

deletesuite(id: any)
{
    this.tsdataService.delete(id);
    console.log('suite deleted');
    this.suitesHierarchy = this.tsdataService.getHierarchyData();
}

SelectSuite(suite)
{
    this.SelectedSuite.emit(suite);
    console.log('suite Selected' + suite.id);
  }
}
