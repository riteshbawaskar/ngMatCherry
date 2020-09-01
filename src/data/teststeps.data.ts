import { TestStep } from './../models/test-step';
import { TestCase } from '../models/test-case';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class TestStepsDataService {
STEPS: TestStep[] = [
  {
    id: '1',
    name: 'Book a trade by sending trade xml to Crre',
    testcaseid: '1',
    tags: ['Booking', 'Day1'],
    active: true,
    action: 'crre.BookTrade',
    data: [],
    sequence: '1',
  },
  {
    id: '2',
    name: 'Amend a trade by sending trade xml to Crre',
    testcaseid: '1',
    tags: ['Booking', 'Day2'],
    active: true,
    action: 'crre.AmendTrade',
    data: [],
    sequence: '2',
  },
  {
    id: '3',
    name: 'Terminate a trade by sending trade xml to Crre',
    testcaseid: '1',
    tags: ['Booking', 'Day3'],
    active: true,
    action: 'crre.AmendTrade',
    data: [],
    sequence: '3',
  },
  {
    id: '4',
    name: 'verify version 1 of trade in crre',
    testcaseid: '1',
    tags: ['verify', 'Day1'],
    active: true,
    action: 'crre.VerifyTrade',
    data: [],
    sequence: '4',
  },
];


getData(): Observable<TestStep[]> {
  return of<TestStep[]>(this.STEPS);
}

getDataforTestCase(id): TestStep[] {
  return (this.STEPS.filter(x => x.testcaseid === id));
}

add(data) {
  this.STEPS.push(data);
}

delete(index) {
  console.log(this.STEPS);
  console.log('deletion in progress for id' + index);

  this.STEPS = this.STEPS.filter((item) => item.id !== index );
 /*  this.SUITES = [
    ...this.SUITES.slice(0, index),
    ...this.SUITES.slice(index + 1),
  ]; */
  console.log(this.STEPS);
}

dataLength() {
  return this.STEPS.length;
}

}