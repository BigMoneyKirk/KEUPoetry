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

  apiUrl: string = environment.apiUrl;

  public GetAllSlogans() : Observable<Slogan[]>{
    return this.getURL('/api/Slogans/all');
  };

  // https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
  getURL(myUrl: string) {
    return this.http.get<Slogan[]>(`${this.apiUrl}${myUrl}`);
  }
}