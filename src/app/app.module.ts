import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoModuleModule } from './demo-module/demo-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { CustomDirective } from './custom.directive';
import { HostBindDirective } from './host-bind.directive';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeekComponent } from './geek/geek.component';
import { MinorModuleModule } from './minor-module/minor-module.module';
@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    CustomDirective,
    HostBindDirective,
    FormsComponent,
    GeekComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DemoModuleModule,
    MinorModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
