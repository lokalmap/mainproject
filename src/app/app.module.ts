//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './services/app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LokalHeader } from './layouts/lokalheader.component';

//newly install component
import { FrontendComponent } from './frontend/frontend.component';
import { MapUiComponent } from './maps-ui/map-ui.component';

//start here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { UserprofComponent } from './usercomp/userprof/userprof.component';
import { RegisterComponent } from './usercomp/register/register.component';
import { LoginComponent } from './usercomp/login/login.component';
import { PartialsComponent } from './usercomp/partials/partials.component';

//Services
import { DataService } from './services/data.service';
//end here


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    //start here
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDdBV6K2QQIECCWQhn71DKKttZFb7wyPQQ',
    libraries: ["places"]

  }), //end here
    ChartsModule
  ],

  declarations: [
    AppComponent,
    FullLayoutComponent,
    LokalHeader,
    MapUiComponent,
    FrontendComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    UserprofComponent,
    RegisterComponent,
    LoginComponent,
    PartialsComponent
  ],
  providers: [
  DataService,
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
