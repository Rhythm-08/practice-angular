import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { CustomDirective } from './custom.directive';
import { HostBindDirective } from './host-bind.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    CustomDirective,
    HostBindDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
