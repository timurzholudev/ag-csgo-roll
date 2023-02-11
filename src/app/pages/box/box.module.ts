import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxRoutingModule } from './box-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { CoreModule } from "../../core/core.module";
import { BoxComponent } from './box.component';
import { BoxOpeningComponent } from "./box-opening/box-opening.component";


@NgModule({
  declarations: [
    BoxComponent,
    BoxOpeningComponent
  ],
  imports: [
    CommonModule,
    BoxRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class BoxModule { }
