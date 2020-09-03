import { TestCase } from './../models/test-case';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestSuite } from '../models/test-suite';

@Injectable()
export class TestCasesDataService {
TESTS: TestCase[] = [
  {
    id: '1',
    name: 'Rates ODD Tenor new amend cancel',
    description: 'This is test case for Req TREEMGM 1100',
    testsuiteid: '4',
    tags: ['regression', 'R20.1'],
    active: true,
  },
  {
    id: '2',
    name: 'Rates SWAP new amend cancel',
    description: 'This is test case for Req TREEMGM 1200',
    testsuiteid: '1',
    tags: ['regression', 'R20.1'],
    active: true,
  },
  {
    id: '3',
    name: 'Rates SWAPTION new amend cancel',
    description: 'This is test case for Req TREEMGM 1300',
    testsuiteid: '3',
    tags: ['regression', 'R20.1'],
    active: true,
  },
  {
    id: '4',
    name: 'Rates FIX Float amend cancel',
    description: 'This is test case for Req TREEMGM 1400',
    testsuiteid: '2',
    tags: ['regression', 'R20.4'],
    active: true,
  },
];


getData(): Observable<TestCase[]> {
  return of<TestCase[]>(this.TESTS);
}

getDataforSuite(id): TestCase[] {
  return (this.TESTS.filter(x => x.testsuiteid === id));
}

add(data) {
  this.TESTS.push(data);
}

delete(index) {
  console.log(this.TESTS);
  console.log('deletion in progress for index' + index);

  this.TESTS = this.TESTS.filter((item) => item.id !== index );
 /*  this.SUITES = [
    ...this.SUITES.slice(0, index),
    ...this.SUITES.slice(index + 1),
  ]; */
  console.log(this.TESTS);
}

dataLength() {
  return this.TESTS.length;
}

}