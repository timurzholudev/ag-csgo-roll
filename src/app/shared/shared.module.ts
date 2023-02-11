import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BoxThumbnailComponent } from "./components/box-thumbnail/box-thumbnail.component";
import { CoreModule } from "../core/core.module";


const SHARED_COMPONENTS = [
  BoxThumbnailComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [
    SHARED_COMPONENTS
  ],
  providers: [],
  exports: [
    SHARED_COMPONENTS
  ]
})
export class SharedModule { }
