import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventComponent } from './Components/AddEvent/AddEvent.component';
import { EventItemComponent } from './Components/EventItem/EventItem.component';
import { InformEventComponent } from './Components/InformEvent/InformEvent.component';
import { ListEventsComponent } from './Components/ListEvents/ListEvents.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavbarComponent,
    AddEventComponent,
    InformEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
