import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinorHomeComponent } from './minor-home/minor-home.component';
import { MinorRoutingModule } from './minor-home.routing.module';


@NgModule({
  declarations: [
    MinorHomeComponent
  ],
  imports: [
    CommonModule,
    MinorRoutingModule
  ]
})
export class MinorModuleModule { }
