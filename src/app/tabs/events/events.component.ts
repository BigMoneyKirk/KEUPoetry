import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keupoetry-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  eventsLogo: string = '../../../assets/images/misc/Events.png'; // https://maketext.io/

  ngOnInit(): void {
  }

}
