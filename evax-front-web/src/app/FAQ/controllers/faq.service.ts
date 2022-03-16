import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faq } from '../models/Faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })}

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>("http://localhost:3000/qa/all");
  }
  getFirstDose(): Observable<Faq[]> {
    return this.http.get<Faq[]>("http://localhost:3000/qa/FirstDose");
  }
  getSecondDose(): Observable<Faq[]> {
    return this.http.get<Faq[]>("http://localhost:3000/qa/SecondDose");
  }
  getTravellers(): Observable<Faq[]> {
    return this.http.get<Faq[]>("http://localhost:3000/qa/travellers");
  }
}
