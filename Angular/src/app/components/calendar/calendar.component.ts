import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'keu-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public allBookings: Booking[];
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getAllBookings();
  }

  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: []
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  public getAllBookings() {
    return this.bookingService.GetAllBookings().subscribe(data => {
      this.allBookings = data;
      this.allBookings.forEach(booking => {
        let object = {
          title: booking.Title, date: booking.StartDate
        }
        this.calendarComponent.getApi().addEvent(object); // https://fullcalendar.io/docs/angular Calendar API section
      });
    })
  }
}

//https://fullcalendar.io/docs/angular