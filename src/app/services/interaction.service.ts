import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medicine} from "../common/medicine";
import {Interaction} from "../common/interaction";

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private baseUrl = 'http://localhost:8080/interaction';


  constructor(private http: HttpClient) { }

  public getAllInteractions(): Observable<Interaction[]> {
    return this.http.get<Interaction[]>(`${this.baseUrl}`);
  }
  public getSpecificInteractions(atcCodes: string[], icd10Codes:string[]): Observable<Interaction[]>{
    let params = new HttpParams();
    params=params.appendAll({"atcCodes":atcCodes}).appendAll({"icd10Codes": icd10Codes});


    return this.http.get<Interaction[]>(`${this.baseUrl}/specific`,{params:params});

  }

}


