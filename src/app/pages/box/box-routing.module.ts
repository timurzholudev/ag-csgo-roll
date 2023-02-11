import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "/"
  },
  { path: ':id', component: BoxComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BoxRoutingModule {
}
