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
import { ModalModule } from 'ngx-bootstrap/modal'


// Routing Module
import { AppRoutingModule } from './services/app.routing';
//import { AppSecureRoutingModule } from './services/app-secure.routing';
// Layouts
//import { LokalHeaderComponent } from './layouts/lokalheader.component';

//newly install component
import { FrontendComponent } from './frontend/frontend.component';
import { MapUiComponent } from './maps-ui/map-ui.component';

//start here
import { BrowserModule } from '@angular/platform-browser';


import { AgmCoreModule } from '@agm/core';
import { UserprofComponent } from './usercomp/userprof/userprof.component';
import { RegisterComponent } from './usercomp/register/register.component';
import { LoginComponent } from './usercomp/login/login.component';

import { environment } from '../environments/environment';
//Services

//Http service
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import {HttpClientModule} from '@angular/common/http';

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

import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';


import { FormsModule } from '@angular/forms';
import { BookinghistComponent } from './shared/bookinghist/bookinghist.component';
import { StorehistComponent } from './shared/storehist/storehist.component';

//end here


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    CollapseModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
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
//    LokalHeaderComponent,
    MapUiComponent,
    FrontendComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    BreadcrumbsComponent,
    AsideToggleDirective,
    UserprofComponent,
    RegisterComponent,
    LoginComponent,
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
    RcustomerComponent,
    BookinghistComponent,
    StorehistComponent
  ],
  providers: [
    DataService,
    AuthGuard,
    customHttpProvider,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
