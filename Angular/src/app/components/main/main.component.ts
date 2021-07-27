import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import inView from 'node_modules/in-view/dist/in-view.min.js'; //https://github.com/camwiegert/in-view
import { NavItem } from 'src/app/interfaces/nav-items';

@Component({
  selector: 'keupoetry-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  logoHomeButton: string = '../../../assets/images/logos/KEU_Logo_FullColor_Secondary_resize.png';
  
  public nav_items;

  home: NavItem = new NavItem('Home', 'nav-home-link', 'home-section', '.home-section');
  donations: NavItem = new NavItem('Donations', 'nav-donations-link', 'donations-section', '.donations-section');
  bookings: NavItem = new NavItem('Bookings', 'nav-bookings-link', 'bookings-section', '.bookings-section');
  events: NavItem = new NavItem('Events', 'nav-events-link', 'events-section', '.events-section');
  updates: NavItem = new NavItem('Updates', 'nav-updates-link', 'updates-section', '.updates-section');
  about: NavItem = new NavItem('About', 'nav-about-link', 'about-section', '.about-section');
  navItems: NavItem[] = [this.home, this.donations, this.bookings, this.events, this.updates, this.about];

  constructor() { }

  ngOnInit() {
    this.nav_items = document.querySelectorAll('.nav-item');
    this.burger_menu_toggle();
    this.changeSelectedNavItem();
    this.changeNavItemWhenInView();
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
}
