import { ProjectsDataService } from './../data/project.data';
import { SidenavService } from './../services/sidenav.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { AppRoutingModule } from './app-routing.module';

import { fakeBackendProvider } from '../helpers';
import { JwtInterceptor, ErrorInterceptor } from '../helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideMenuComponent,
     ],
  imports: [
    PerfectScrollbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SidenavService, ProjectsDataService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: PERFECT_SCROLLBAR_CONFIG , useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
