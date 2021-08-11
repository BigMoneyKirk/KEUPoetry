import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Slogan } from '../models/slogan';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
  getURL(myUrl: string) {
    return this.http.get<Slogan[]>(`${this.apiUrl}${myUrl}`);
  }
}
