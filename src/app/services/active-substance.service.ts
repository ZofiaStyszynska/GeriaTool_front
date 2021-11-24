import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActiveSubst} from "../common/active-subst";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActiveSubstanceService {

  private baseUrl = 'http://localhost:8080/active-substances';

  constructor(private httpClient: HttpClient) {
  }

  getActiveSubstList(): Observable<ActiveSubst[]> {
    return this.getActiveSubsts(this.baseUrl);
  }

  searchActiveSubst(theSearchCode: string | null): Observable<ActiveSubst[]> {
    const searchUrl = `${this.baseUrl}/search/findActiveSubstsByAtcCodeIsStartingWith?searchCode=${theSearchCode}`;
    return this.getActiveSubsts(searchUrl);
  }

  private getActiveSubsts(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.activeSubst)
    );
  }
}

interface GetResponse {
  _embedded: {
    activeSubst: ActiveSubst[];
  }

}
