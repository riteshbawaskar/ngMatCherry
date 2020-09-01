import { Project } from './../models/project';
import { ProjectsDataService } from './../data/project.data';
import { SidenavService } from './../services/sidenav.service';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { onMainContentChange } from './animation/animation';
import { User } from '../models';
import { users } from '../data/users.data';
import { AccountService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange],
})
export class AppComponent {
  name = 'Cherry';
  title = 'Cherry';
  user: User = users[0];
  projects: Project[];

  public onSideNavChange: boolean;

  constructor(
    private projectsDataService: ProjectsDataService,
    private accountService: AccountService,
    private sidenavService: SidenavService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
    this.sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });
    this.projects = this.projectsDataService.PROJECTS;
  }

  logout() {
    this.accountService.logout();
  }
}
