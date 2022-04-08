import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActiveSubst} from "../common/active-subst";
import {Medicine} from "../common/medicine";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private baseUrl = 'http://localhost:8080/medicine';

  constructor(private http: HttpClient) { }

  public getAllMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`${this.baseUrl}`);
  }

  public getMedicineById(id: number | undefined): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.baseUrl}/id/${id}`);
  }
  public getMedicinesByAS(id:number|undefined): Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.baseUrl}/asid/${id}`);
  }
  public addMedicine(medicine: Medicine | undefined): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.baseUrl}/add`, medicine);
  }
  public updateMedicine(medicine: Medicine | undefined): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.baseUrl}/update`, medicine);
  }
  public deleteMedicine(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}


