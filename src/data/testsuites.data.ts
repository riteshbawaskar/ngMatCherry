import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestSuite } from '../models/test-suite';

@Injectable()
export class TestSuitesDataService {
  SUITES: TestSuite[] = [
    {
      id: '1',
      name: 'Rates',
      description: 'This is rates test suite',
      group: 'Regression',
      projectid: '1',
    },
    {
      id: '2',
      name: 'Credit',
      description: 'This is credit test suite',
      group: 'Regression',
      projectid: '1',
    },
    {
      id: '3',
      name: 'QC20857',
      description: 'This is credit functional test suite for Release 20.2',
      group: 'Release 20.2 ',
      projectid: '1',
    },
    {
      id: '4',
      name: 'QC20857',
      description: 'This is credit functional test suite for Release 20.2',
      group: 'Release 20.3 ',
      projectid: '1',
    },
    {
      id: '5',
      name: 'QC20857',
      description: 'This is credit functional test suite for Release 20.2',
      group: 'Release 20.3 ',
      projectid: '1',
    },
    {
      id: '6',
      name: 'QC20857',
      description: 'This is credit functional test suite for Release 20.2',
      group: 'Release 20.3 ',
      projectid: '1',
    },
    {
      id: '7',
      name: 'QC20857',
      description: 'This is credit functional test suite for Release 20.2',
      group: 'Release 20.3 ',
      projectid: '1',
    }
  ];

  getData(): Observable<TestSuite[]> {
    return of<TestSuite[]>(this.SUITES);
  }

  add(data) {
    this.SUITES.push(data);
  }

  delete(index) {
    console.log(this.SUITES);
    console.log('deletion in progress for index' + index);

    this.SUITES = this.SUITES.filter((item) => item.id !== index );
   /*  this.SUITES = [
      ...this.SUITES.slice(0, index),
      ...this.SUITES.slice(index + 1),
    ]; */
    console.log(this.SUITES);
  }

  dataLength() {
    return this.SUITES.length;
  }

  getHierarchyData() {
    let output = [];

    this.SUITES.forEach((item) => {
      let result = output;
      const path = item.group.split(' >> ');
      path.forEach((key) => {
        const match = result.find((obj) => obj.name === key);
        if (match === undefined) {
          const group = {
            id: 0,
            name: key,
            description: '',
            group: '',
            children: []
          };
          result.push(group);
          result = group.children;
        }
        else {
        result = match.children;
        }
      });
      const child = {
            id: item.id,
            name: item.name,
            description: item.description,
            group: item.group,
            children: [],
          };
      result.push(child);
    });

    return output;
  }
}
