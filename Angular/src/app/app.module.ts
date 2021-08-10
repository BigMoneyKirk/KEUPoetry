import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './tabs/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { MainComponent } from './components/main/main.component';
import { DonationsComponent } from './tabs/donations/donations.component';
import { BookingsComponent } from './tabs/bookings/bookings.component';
import { EventsComponent } from './tabs/events/events.component';
import { UpdatesComponent } from './tabs/updates/updates.component';
import { AboutComponent } from './tabs/about/about.component'; // a plugin!
import { SloganService } from './services/slogan.service';
import { BookingService } from './services/booking.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    MainComponent,
    DonationsComponent,
    BookingsComponent,
    EventsComponent,
    UpdatesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule, // register FullCalendar with you app
    HttpClientModule // https://stackoverflow.com/questions/47393162/error-no-provider-for-t // https://stackoverflow.com/questions/47236963/no-provider-for-httpclient
  ],
  providers: [
    SloganService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
