import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'keupoetry-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(public bookingService: BookingService) { }

  bookingsLogo: string = '../../../assets/images/misc/Bookings2.png'; // https://maketext.io/

  ngOnInit(): void {
    
  }
}
