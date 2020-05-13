import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorsListComponent } from './visitors-list/visitors-list.component';
import { VisitorComponent } from './visitor/visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorsListComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
