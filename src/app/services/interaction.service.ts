import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

}


