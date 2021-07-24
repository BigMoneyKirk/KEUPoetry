import { Component, OnInit } from '@angular/core';
import { Slogan } from 'src/app/classes/slogan';
import { SloganService } from 'src/app/services/slogan.service';
import $ from 'jquery';
import inView from 'node_modules/in-view/dist/in-view.min.js'; //https://github.com/camwiegert/in-view
import { NavItem } from 'src/app/interfaces/nav-items';

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

  public nav_items;
  public currentSelectedNavItemElement: number = 0;

  home: NavItem = new NavItem('Home', 'nav-home-link', 'home-section', '.home-section');
  donations: NavItem = new NavItem('Donations', 'nav-donations-link', 'donations-section', '.donations-section');
  bookings: NavItem = new NavItem('Bookings', 'nav-bookings-link', 'bookings-section', '.bookings-section');
  events: NavItem = new NavItem('Events', 'nav-events-link', 'events-section', '.events-section');
  updates: NavItem = new NavItem('Updates', 'nav-updates-link', 'updates-section', '.updates-section');
  about: NavItem = new NavItem('About', 'nav-about-link', 'about-section', '.about-section');
  navItems: NavItem[] = [this.home, this.donations, this.bookings, this.events, this.updates, this.about];

  constructor(private sloganSevice: SloganService) { }

  ngOnInit() {
    this.nav_items = document.querySelectorAll('.nav-item');
    this.generateDailySlogan();
    this.burger_menu_toggle();
    this.changeSelectedNavItem();
    this.changeNavItemWhenInView();
  }

  generateDailySlogan() {
    let allSlogans = this.sloganSevice.getAllSlogans();
    this.dailySlogan = allSlogans[Math.floor(Math.random() * allSlogans.length)];
  }

  burger_menu_toggle() {
    $(document).ready(function () {
      $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
      })
    });
  }

  toSubPage(name: string) {
    let navClass: string = this.navItems.find(navItem => navItem.name == name)._class;
    document.getElementById(navClass).scrollIntoView({ behavior: "smooth" });
  }

  changeSelectedNavItem() {
    for (let i = 0; i < this.nav_items.length; i++) {
      this.nav_items[i].onmousedown = () => {
        let j = 0;
        while (j < this.nav_items.length) {
          this.nav_items[j++].className = 'list';
        }
        this.nav_items[i].className = 'list active';
      }
    }
  }

  clearNavItemActive() {
    this.nav_items.forEach(nav_item => {
      nav_item.className = 'list';
    });
  }

  changeNavItemWhenInView() {
    // make a map
    // cycle thru the map
    // load map variables into this method
    this.navItems.forEach(navItem => {
      inView(navItem.dot_class)
      .on('enter', () => {
        this.clearNavItemActive();
        document.getElementById(navItem.id).className = 'list active';
      })
      .on('exit', () => {
        document.getElementById(navItem.id).className = "list";
      });
    });
  }

  //https://fullcalendar.io/docs/getting-started
  //https://medium.com/aubergine-solutions/how-to-integrate-jquery-fullcalendar-in-angular-c35728cfeeb2
}
