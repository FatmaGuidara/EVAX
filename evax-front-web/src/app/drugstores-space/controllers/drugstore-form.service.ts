import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drugstore } from '../models/Drugstore.model';


@Injectable({
  providedIn: 'root'
})
export class DrugstoreFormService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })}
  
  createDrugstore(drugstore: Drugstore){
    console.log(1)
    this.http.post<Drugstore>("http://localhost:3000/drugstore", JSON.stringify(drugstore), this.httpOptions).subscribe(res => console.log(res));
  }
}