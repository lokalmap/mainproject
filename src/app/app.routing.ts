import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

//files to be imported
import { FrontendComponent } from './frontend/frontend.component';
import { MapUiComponent } from './maps-ui/map-ui.component';

export const routes: Routes = [

  {path: '', redirectTo: '/simple-layout/frontend', pathMatch: 'full'},
  {path: 'simple-layout' , component: SimpleLayoutComponent, children: [
    {path: 'frontend', component: FrontendComponent },
    {path: 'maps-ui', component: MapUiComponent }
  ]},

  {path: 'full-layout', component: FullLayoutComponent, children: [
    
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
