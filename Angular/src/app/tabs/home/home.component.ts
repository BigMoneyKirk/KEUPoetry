import { Component, OnInit } from '@angular/core';
import { Slogan } from 'src/app/classes/slogan';
import { SloganService } from 'src/app/services/slogan.service';

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

  constructor(private sloganSevice: SloganService) { }

  ngOnInit() {
    this.generateDailySlogan();
  }

  generateDailySlogan() {
    let allSlogans = this.sloganSevice.getAllSlogans();
    this.dailySlogan = allSlogans[Math.floor(Math.random() * allSlogans.length)];
  }
}
