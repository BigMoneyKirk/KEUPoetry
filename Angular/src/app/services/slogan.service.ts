import { Injectable } from '@angular/core';
import { Slogan } from '../classes/slogan';

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  allSlogans: Slogan[] = [];

  constructor() { }

  getAllSlogans() {
    let s: Slogan = new Slogan();
    s.text = "The grass may be greener on the other side, but the water bill is definitely higher.";
    s.author = "Akeem Roberts";
    this.allSlogans.push(s);

    let t: Slogan = new Slogan();
    t.text = "Stay focused.";
    t.author = "Eugene Kirkland, Sr."

    this.allSlogans.push(t);

    return this.allSlogans;
  }
}
