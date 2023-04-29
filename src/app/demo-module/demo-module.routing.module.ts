import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoAboutComponent } from './demo-about/demo-about.component';


const routes: Routes = [
  {path:'demoHome',component:DemoHomeComponent},
  {path:'demoAbout',component:DemoAboutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoModuleRoutingModule { }
