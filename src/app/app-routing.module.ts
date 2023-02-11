import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
  { path: "box", loadChildren: () => import("./pages/box/box.module").then(m => m.BoxModule) },
  { path: "404",
    pathMatch: "full",
    loadChildren: () => import("./pages/not-found/not-found.module").then(m => m.NotFoundModule)
  },
  { path: "**",
    pathMatch: "full",
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
