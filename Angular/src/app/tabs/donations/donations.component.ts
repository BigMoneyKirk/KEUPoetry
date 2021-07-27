import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keupoetry-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  constructor() { }

  donationsLogo: string = '../../../assets/images/misc/Donations.png'; // https://maketext.io/

  ngOnInit(): void {
  }

}
