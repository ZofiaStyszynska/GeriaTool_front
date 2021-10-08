import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActiveSubst} from "../common/active-subst";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActiveSubstanceService {

  private baseUrl = 'http://localhost:8080/active-substance';

  constructor(private httpClient: HttpClient) { }

  getActiveSubstList(): Observable<ActiveSubst[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.activeSubst)
    );
  }
}
interface GetResponse{
  _embedded: {
    activeSubst:ActiveSubst[];
  }

}
