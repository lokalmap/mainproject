import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
//import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LokalHeaderComponent } from './lokalheader.component';
//import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
//        NgbDropdownModule.forRoot(),
        LayoutRoutingModule
//        ,TranslateModule
    ],
    declarations: [
        LokalHeaderComponent
//        HeaderComponent,
//        SidebarComponent,
    ]
})
export class LayoutModule { }
