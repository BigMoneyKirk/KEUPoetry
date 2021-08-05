import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slogan } from '../models/slogan';

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  allSlogans: Slogan[] = [];

  constructor(private http: HttpClient) { }

  url: string = environment.url;

  public GetAllSlogans(): Observable<Slogan[]> {
    let check = `${this.url}/api/Slogans/all`;
    return this.http.get<Slogan[]>(check);
  }

  getAllSlogans2() {
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
