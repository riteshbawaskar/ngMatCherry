import { SidenavService } from './../services/sidenav.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideMenuComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SidenavService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
