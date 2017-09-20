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

export const routes: Routes = [
  {path: '', redirectTo: '/main/frontend', pathMatch: 'full'},
  {path: 'main' , component: LokalHeader, children: [
    {path: 'frontend', component: FrontendComponent },
    {path: 'maps-ui', component: MapUiComponent }
  ]},
  {path: 'users', component: PartialsComponent, children: [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent }
  ]},
  {path: 'full-layout', component: FullLayoutComponent, children: [
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
