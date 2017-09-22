import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from '../layouts/full-layout.component';


export const routes: Routes = [

  {path: '', component:FullLayoutComponent, pathMatch: 'full'},

    



];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})





export class AppSecureRoutingModule {}
