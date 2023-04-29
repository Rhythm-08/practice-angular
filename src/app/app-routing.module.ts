import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { DemoModuleModule } from './demo-module/demo-module.module';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path:'',component:FormsComponent},
  {path:'home',component:FormsComponent},
  {path:'demoHome',loadChildren:()=>import('./demo-module/demo-module.module').then(m=>m.DemoModuleModule)},
  {path:'viewChild',component:ViewChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),DemoModuleModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
