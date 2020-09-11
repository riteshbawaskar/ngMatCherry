import { ComponentLib } from '../models/component-lib';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable()
export class ComponentLibDataService {
  COMPONENTS: ComponentLib[] = [
      {
          id: '1',
          name: 'CRRE',
          description: 'Crre component library'
      },
      {
        id: '2',
        name: 'SDR',
        description: 'SDR component library'

      }
  ];

  getData() {
    return (this.COMPONENTS);
  }

  add(data) {
    this.COMPONENTS.push(data);
  }

  delete(index) {
    this.COMPONENTS = this.COMPONENTS.filter((item) => item.id !== index );
  }
}
