import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActiveSubst} from "../common/active-subst";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActiveSubstanceService {

  private baseUrl = 'http://localhost:8080/activesubstance';

  constructor(private http: HttpClient) {
  }

  public getAllActiveSubst(): Observable<ActiveSubst[]> {
    return this.http.get<ActiveSubst[]>(`${this.baseUrl}`);
  }

  public getActiveSubstById(id:number): Observable<ActiveSubst> {
    return this.http.get<ActiveSubst>(`${this.baseUrl}/id/${id}`);
  }

  public getActiveSubstBySearchCode(searchCode: string | null): Observable<ActiveSubst[]> {
    return this.http.get<ActiveSubst[]>(`${this.baseUrl}/search/${searchCode}`);
  }

  public getActiveSubstByName(name: string | null): Observable<ActiveSubst[]> {
    return this.http.get<ActiveSubst[]>(`${this.baseUrl}/name/${name}`);
  }

  public addActiveSubst(activeSubst: ActiveSubst | undefined): Observable<ActiveSubst> {
    return this.http.post<ActiveSubst>(`${this.baseUrl}/add`, activeSubst);
  }

  public updateActiveSubst(activeSubst:ActiveSubst): Observable<ActiveSubst> {
    return this.http.put<ActiveSubst>(`${this.baseUrl}/update`, activeSubst);
  }

  public deleteActiveSubst(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }




}

