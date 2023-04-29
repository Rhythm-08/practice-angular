import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoAboutComponent } from './demo-about/demo-about.component';
import { DemoModuleRoutingModule } from './demo-module.routing.module';

@NgModule({
  declarations: [
    DemoHomeComponent,
    DemoAboutComponent
  ],
  imports: [
    CommonModule,
    DemoModuleRoutingModule
  ],
  exports:[DemoHomeComponent,DemoAboutComponent]
})
export class DemoModuleModule { }
