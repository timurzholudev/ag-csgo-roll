import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NotFoundRoutingModule } from './not-found-routing.module';
import { CoreModule } from "../../core/core.module";
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    RouterModule,
    CoreModule
  ]
})
export class NotFoundModule { }
