import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponents } from "./components/header/header.components";
import { UserControlsComponent } from "./components/header/user-controls/user-controls.component";
import { ButtonComponent } from "./components/button/button.component";
import { ImageComponent } from "./components/image/image.component";

import { FallbackImageDirective } from "./directives/fallback-image.directive";

const COMPONENTS = [
  HeaderComponents,
  ButtonComponent,
  ImageComponent
];

const DIRECTIVES = [
  FallbackImageDirective
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    COMPONENTS,
    DIRECTIVES,
    UserControlsComponent
  ],
  providers: [],
  exports: [
    COMPONENTS,
    DIRECTIVES,
  ]
})
export class CoreModule { }
