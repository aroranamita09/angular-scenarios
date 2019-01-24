import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Child1Component } from './scenario3/child1/child1.component';
import { Scenario4Component } from './scenario4/scenario4.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Child1Component,
    Scenario4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
