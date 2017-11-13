import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
//import { TranslateModule } from '@ngx-translate/core';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
//import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        FrontendRoutingModule
//        NgbDropdownModule.forRoot(),
//        LayoutRoutingModule,
//        TranslateModule
    ],
    declarations: [
//        LayoutComponent,
//        HeaderComponent,
  //      SidebarComponent,
      FrontendComponent
    ]
})
export class FrontendModule { }
