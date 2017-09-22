import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from '../layouts/full-layout.component';
import { LokalHeader } from '../layouts/lokalheader.component';

//files to be imported
import { FrontendComponent } from '../frontend/frontend.component';
import { MapUiComponent } from '../maps-ui/map-ui.component';


import { PartialsComponent } from '../usercomp/partials/partials.component';
import { UserprofComponent } from '../usercomp/userprof/userprof.component';
import { RegisterComponent } from '../usercomp/register/register.component';
import { LoginComponent } from '../usercomp/login/login.component';

import { ProvidersComponent } from '../providers/providers.component';
import { CustomersComponent } from '../customers/customers.component';
import { DashboardComponent } from '../providers/dashboard/dashboard.component';
import { SumInventoryComponent } from '../providers/sum-inventory/sum-inventory.component';
import { MyInventoryComponent } from '../providers/my-inventory/my-inventory.component';
import { StatisticsComponent } from '../providers/statistics/statistics.component';
import { ChatComponent } from '../providers/chat/chat.component';
import { AdsComponent } from '../providers/ads/ads.component';
import { SearchComponent } from '../providers/search/search.component';
import { HomeComponent } from '../customers/home/home.component';
import { HistoryComponent } from '../customers/history/history.component';
import { BookReserveComponent } from '../customers/book-reserve/book-reserve.component';
import { InfoComponent } from '../customers/info/info.component';


export const routes: Routes = [
  {path: '', component:FrontendComponent, pathMatch: 'full'},
  {path: 'users', component: PartialsComponent, children: [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'full-layout', component: FullLayoutComponent}

  ]},
  {path: 'customers', component: CustomersComponent, children: [
    {path: 'home', component: HomeComponent },
    {path: 'history', component: HistoryComponent },
    {path: 'bookings', component: BookReserveComponent },
    {path: 'info', component: InfoComponent },
    {path: 'chat', component: ChatComponent }
  ]},
  {path: 'providers', component: ProvidersComponent, children: [
    {path: 'home', component: HomeComponent },
    {path: 'history', component: HistoryComponent },
    {path: 'bookings', component: BookReserveComponent },
    {path: 'info', component: InfoComponent },
    {path: 'chat', component: ChatComponent }
  ]},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
