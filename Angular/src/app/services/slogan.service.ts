import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slogan } from '../models/slogan';

@Injectable({
  providedIn: 'root'
})
export class SloganService {

  constructor(private http: HttpClient) { }

  public GetAllSlogans() : Observable<Slogan[]>{
    return this.getURL('/api/Slogan/all');
  };

  // https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
  getURL(myUrl: string) {
    return this.http.get<Slogan[]>(`${myUrl}`);
  }
}