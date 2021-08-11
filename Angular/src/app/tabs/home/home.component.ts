import { Component, OnInit } from '@angular/core';
import { Slogan } from 'src/app/models/slogan';
import { SloganService } from 'src/app/services/slogan.service';

@Component({
  selector: 'keupoetry-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SloganService]
})
export class HomeComponent implements OnInit {

  allSlogans: Slogan[];
  dailySlogan: Slogan = new Slogan();
  currentSloganNumber: number;
  logoHomeButton: string = '../../../assets/images/logos/KEU_Logo_FullColor_Secondary_resize.png';
  watermarkLogo: string = '../../../assets/images/logos/KEU_Logo_FullColor_Wordmark.png';
  pswLogo: string = '../../../assets/images/logos/psw_logo.png'; //https://www.coolgenerator.com/png-text-generator

  constructor(private sloganSevice: SloganService) { }

  ngOnInit() {
    this.generateDailySlogan();
  }

  private generateDailySlogan() {
    this.sloganSevice.GetAllSlogans().subscribe(data => {
      this.allSlogans = data;
      this.currentSloganNumber = Math.floor(Math.random() * this.allSlogans.length);
      this.setDailySlogan();
    });
  }

  private setDailySlogan() : void {
    this.dailySlogan = this.allSlogans[this.currentSloganNumber];
  }

  public previousSlogan() : void {
    if (this.currentSloganNumber == 0) {
      this.currentSloganNumber = this.allSlogans.length;
    }
    this.currentSloganNumber -= 1;
    
    this.setDailySlogan();
  }

  public nextSlogan() : void {
    if (this.currentSloganNumber == this.allSlogans.length - 1) {
      this.currentSloganNumber = -1;
    }
    this.currentSloganNumber += 1;
    
    this.setDailySlogan();
  }
}
