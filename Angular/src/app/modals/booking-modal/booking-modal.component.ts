import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'keupoetry-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {

  logoHomeButton: string = '../../../assets/images/logos/KEU_Logo_FullColor_Secondary_resize.png';

  constructor(public bookingService: BookingService) { }

  ngOnInit(): void {
  }
}
