import { ComponentLibDataService } from './../../data/component-lib.data';
import { Component, OnInit } from '@angular/core';
import { ComponentLib } from 'src/models/component-lib';
import {MatTextAvatar} from '../../core/mat-text-avatar/mat-text-avatar.component';

@Component({
 
  templateUrl: './component-lib.component.html',
  styleUrls: ['./component-lib.component.scss']
})
export class ComponentLibComponent implements OnInit {

  componentlibs: ComponentLib[];

  constructor(private componentlibsds: ComponentLibDataService) {
    this.componentlibs = this.componentlibsds.getData();
  }

  ngOnInit() {
  }

}
