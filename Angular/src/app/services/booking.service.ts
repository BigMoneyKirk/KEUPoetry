import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrl;

  public GetAllBookings() : Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/api/Booking/all`);
  }
}
