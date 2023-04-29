import { NgModule } from '@angular/core';
import { MinorHomeComponent } from './minor-home/minor-home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'minorHome',component:MinorHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinorRoutingModule { }
