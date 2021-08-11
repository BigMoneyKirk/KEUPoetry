import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keupoetry-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  bookingsLogo: string = '../../../assets/images/misc/Bookings2.png'; // https://maketext.io/

  ngOnInit(): void {
    
  }

}
