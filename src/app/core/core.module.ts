import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponents } from "./components/header/header.components";
import { UserControlsComponent } from "./components/header/user-controls/user-controls.component";
import { SharedModule } from "../shared/shared.module";

const COMPONENTS = [
  HeaderComponents
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    COMPONENTS,
    UserControlsComponent
  ],
  providers: [],
  exports: [
    COMPONENTS
  ]
})
export class CoreModule { }
