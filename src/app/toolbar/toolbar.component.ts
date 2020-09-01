import { Project } from './../../models/project';

import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
@Input() sidenav: MatSidenav;
@Input() projects: Project[];
selectedproject: Project;

  constructor() {  }

selectedMenu(project)
{
  this.selectedproject = project;
}

  ngOnInit() {
    this.selectedproject = this.projects[0];
  }

}
