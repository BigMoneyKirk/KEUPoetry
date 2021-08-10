import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slogan } from '../models/slogan';

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  allSlogans: Slogan[] = [];

  constructor(private http: HttpClient) { }

  url: string = environment.url;

  // public GetAllSlogans(): Observable<Slogan[]> {
  //   let check = `${this.url}api/Slogans/all`;
  //   return this.http.get<Slogan[]>(check, { headers : this.GetHttpHeaders() });
  // }

  public GetAllSlogans() : Observable<Slogan[]>{
    return this.getURL('/api/Slogans/all');
  };

  getAllSlogans2() {
    let s: Slogan = new Slogan();
    s.Text = "The grass may be greener on the other side, but the water bill is definitely higher.";
    s.Author = "Akeem Roberts";
    this.allSlogans.push(s);

    let t: Slogan = new Slogan();
    t.Text = "Stay focused.";
    t.Author = "Eugene Kirkland, Sr."

    this.allSlogans.push(t);

    return this.allSlogans;
  }

  // https://stackoverflow.com/questions/47345282/how-to-add-cors-request-in-header-in-angular-5
  getURL(myUrl: string) {
    return this.http.get<Slogan[]>(`${myUrl}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
      }
    })
    // return from(
    //   fetch(
    //     `${this.url}${myUrl}`, // the url you are trying to access
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': '*',
    //         'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
    //       },
    //       method: 'GET', // GET, POST, PUT, DELETE
    //       mode: 'no-cors' // the most important option
    //     }
    //   ).then(response => {
    //     console.log("in the fetch", response);
    //     // return response;
    //   }));
  }
}