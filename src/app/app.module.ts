import { NgModule, Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

//ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';


// Routing Module
import { AppRoutingModule } from './services/app.routing';
//import { AppSecureRoutingModule } from './services/app-secure.routing';
// Layouts
import { LokalHeader } from './layouts/lokalheader.component';

//newly install component
import { FrontendComponent } from './frontend/frontend.component';
import { MapUiComponent } from './maps-ui/map-ui.component';

//start here
import { BrowserModule } from '@angular/platform-browser';


import { AgmCoreModule } from '@agm/core';
import { UserprofComponent } from './usercomp/userprof/userprof.component';
import { RegisterComponent } from './usercomp/register/register.component';
import { LoginComponent } from './usercomp/login/login.component';
import { PartialsComponent } from './usercomp/partials/partials.component';

import { environment } from '../environments/environment';
//Services

//Http service
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
//import { HttpClientModule } from '@angular/common/http';

import { ProvidersComponent } from './providers/providers.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './providers/dashboard/dashboard.component';
import { SumInventoryComponent } from './providers/sum-inventory/sum-inventory.component';
import { MyInventoryComponent } from './providers/my-inventory/my-inventory.component';
import { StatisticsComponent } from './providers/statistics/statistics.component';
import { PChatComponent } from './providers/chat/chat.component';
import { CChatComponent } from './customers/chat/chat.component';
import { AdsComponent } from './providers/ads/ads.component';
import { SearchComponent } from './providers/search/search.component';
import { HomeComponent } from './customers/home/home.component';
import { HistoryComponent } from './customers/history/history.component';
import { BookReserveComponent } from './customers/book-reserve/book-reserve.component';
import { InfoComponent } from './customers/info/info.component';
import { PbookingsComponent } from './providers/pbookings/pbookings.component';
import { RproviderComponent } from './usercomp/register/rprovider/rprovider.component';
import { RcustomerComponent } from './usercomp/register/rcustomer/rcustomer.component';

//end here


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CarouselModule.forRoot(),
    CollapseModule,
    AppRoutingModule,
//    AppSecureRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    //start here
    AgmCoreModule.forRoot({
    apiKey: environment.agm_gmap_apiKey,
    libraries: ["places"]

  }), //end here
    ChartsModule,

  ],

  declarations: [
    AppComponent,
    LokalHeader,
    MapUiComponent,
    FrontendComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    BreadcrumbsComponent,
    AsideToggleDirective,
    UserprofComponent,
    RegisterComponent,
    LoginComponent,
    PartialsComponent,
    ProvidersComponent,
    CustomersComponent,
    DashboardComponent,
    SumInventoryComponent,
    MyInventoryComponent,
    StatisticsComponent,
    PChatComponent,
    CChatComponent,
    AdsComponent,
    SearchComponent,
    HomeComponent,
    HistoryComponent,
    BookReserveComponent,
    InfoComponent,
    PbookingsComponent,
    RproviderComponent,
    RcustomerComponent
  ],
  providers: [
    DataService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
