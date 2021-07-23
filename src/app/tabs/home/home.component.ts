import { Component, OnInit } from '@angular/core';
import { Slogan } from 'src/app/classes/slogan';
import { SloganService } from 'src/app/services/slogan.service';
import $ from 'jquery';

@Component({
  selector: 'keupoetry-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dailySlogan: Slogan = new Slogan();
  logoHomeButton: string = '../../../assets/images/logos/KEU_Logo_FullColor_Secondary_resize.png';
  watermarkLogo: string = '../../../assets/images/logos/KEU_Logo_FullColor_Wordmark.png';
  pswLogo: string = '../../../assets/images/logos/psw_logo.png'; //https://www.coolgenerator.com/png-text-generator
  roseBook: string = '../../../assets/images/misc/rose-book.png'; //https://www.pngwing.com/en/search?q=poetry
  bookingsLogo: string = '../../../assets/images/misc/Bookings2.png'; // https://maketext.io/

  constructor(private sloganSevice: SloganService) { }

  ngOnInit() {
    this.generateDailySlogan();
    $(document).ready(function () {
      $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
      })
    });
  }

  generateDailySlogan() {
    let allSlogans = this.sloganSevice.getAllSlogans();
    this.dailySlogan = allSlogans[Math.floor(Math.random() * allSlogans.length)];
  }

  toHome() {
    document.getElementById("home-link").scrollIntoView({behavior:"smooth"});
  }

  toDonations() {
    document.getElementById("donation-link").scrollIntoView({behavior:"smooth"});
  }

  toBookings() {
    document.getElementById("bookings-link").scrollIntoView({behavior:"smooth"});
  }

  toEvents() {
    document.getElementById("events-link").scrollIntoView({behavior:"smooth"});
  }

  toUpdates() {
    document.getElementById("updates-link").scrollIntoView({behavior:"smooth"});
  }

  toAbout() {
    document.getElementById("about-link").scrollIntoView({behavior:"smooth"});
  }

  //https://fullcalendar.io/docs/getting-started
  //https://medium.com/aubergine-solutions/how-to-integrate-jquery-fullcalendar-in-angular-c35728cfeeb2
}
