import { Component, OnInit } from '@angular/core';
import {
  mdbRow, mdbCol, mdbInput, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardTitle,
  mdbSelect, mdbDatePicker, mdbTimePicker, mdbCardFooter, mdbAutocomplete
} from "mdbvue";

@Component({
  selector: 'keupoetry-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {

  logoHomeButton: string = '../../../assets/images/logos/KEU_Logo_FullColor_Secondary_resize.png';

  constructor() { }

  ngOnInit(): void {
  }
}
