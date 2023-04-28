import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { CustomDirective } from './custom.directive';
import { HostBindDirective } from './host-bind.directive';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeekComponent } from './geek/geek.component';
@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    CustomDirective,
    HostBindDirective,
    FormsComponent,
    GeekComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
