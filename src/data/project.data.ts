import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable()
export class ProjectsDataService {
  PROJECTS: Project[] = [
    {
      id: '1',
      name: 'G20-Rates',
      description: 'This is rates test project',
      components: [],
    },
    {
      id: '2',
      name: 'G20-Credit',
      description: 'This is credit test project',
      components: [],
    },
    {
      id: '3',
      name: 'G20-Prime Services',
      description: 'This is project for Prime',
      components: [],
    },
    {
      id: '4',
      name: 'G20-FX',
      description: 'This is Project for FX',
      components: [],
    },
  ];

  getData(): Observable<Project[]> {
    return of<Project[]>(this.PROJECTS);
  }

  add(data) {
    this.PROJECTS.push(data);
  }

  delete(index) {

    this.PROJECTS = this.PROJECTS.filter((item) => item.id !== index );
   /*  this.SUITES = [
      ...this.SUITES.slice(0, index),
      ...this.SUITES.slice(index + 1),
    ]; */

  }

  dataLength() {
    return this.PROJECTS.length;
  }
}
