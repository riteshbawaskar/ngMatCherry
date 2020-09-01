import { TestSuitesDataService } from './../data/testsuites.data';
import { TestSuite } from './../models/test-suite';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Subject } from 'rxjs';


@Injectable()
export class TestsuiteService {
  private testsuiteSubject: BehaviorSubject<TestSuite>;
  public testsuite: Observable<TestSuite>;

  constructor(private router: Router, private http: HttpClient) {  }

  public get userValue(): TestSuite {
    return this.testsuiteSubject.value;
  }

}
