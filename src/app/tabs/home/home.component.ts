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
}
