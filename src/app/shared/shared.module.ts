import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";

const SHARED_COMPONENTS = [
  ButtonComponent
]

@NgModule({
  imports: [
    CommonModule
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
