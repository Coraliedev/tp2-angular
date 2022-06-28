import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';
import { AfficheHeureComponent } from './affiche-heure/affiche-heure.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeZoneComponent,
    AfficheHeureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
