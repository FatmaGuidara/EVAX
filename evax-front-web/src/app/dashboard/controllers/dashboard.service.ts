import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../models/Cities.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })}

  getCities(): Observable<Cities[]> {
    return this.http.get<Cities[]>("http://localhost:3000/dashboard/cities");
  }

  getRegisteredCitizensNumber(): Observable<number> {
    return this.http.get<number>("http://localhost:3000/dashboard/inscrit");
  }
  getRegisteredNotInvitedCitezensNumber(): Observable<number> {
    return this.http.get<number>("http://localhost:3000/dashboard/nonConvoque");
  }
  getTodayRegisteredCitizensNumber(): Observable<number> {
    return this.http.get<number>("http://localhost:3000/dashboard/inscritToday");
  }

}
