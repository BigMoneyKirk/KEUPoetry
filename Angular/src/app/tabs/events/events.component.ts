import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keupoetry-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  eventsLogo: string = '../../../assets/images/misc/Events.png'; // https://maketext.io/
  grayComingSoon: string = '../../../assets/images/misc/gray-coming-soon.jpg'; //https://tinyurl.com/gray-coming-soon-keupoetry
  unattainableLove: string = '../../../assets/images/misc/unattainable_love.gif'; // https://dribbble.com/shots/6032917-Unattainable-love

  ngOnInit(): void {
  }

}
