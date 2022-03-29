import {Component, OnInit, PipeTransform} from '@angular/core';
import {Medicine} from "../../common/medicine";
import {MedicineService} from "../../services/medicine.service";
import {ActiveSubst} from "../../common/active-subst";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DecimalPipe} from "@angular/common";
import {FormControl} from "@angular/forms";

import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  public medicines: Medicine[] =[];
  medicinesObs$: Observable<Medicine[]>;
  filter= new FormControl('');

  constructor(private medicineService: MedicineService, pipe :DecimalPipe) {
   // this.medicinesObs$=this.medicineService.getAllMedicines();
    this.medicinesObs$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text=>this.search(text,pipe))

    )
  }

  ngOnInit(): void {
    this.getAllMedicines()
  }


  search(text: string, pipe: PipeTransform): Medicine[] {
    return this.medicines.filter(medicine => {
      const term = text.toLowerCase();
      return medicine.tradeName.toLowerCase().includes(term)
        || pipe.transform(medicine.activeSubstances).includes(term);
    });
  }

  getAllMedicines(): void {
    this.medicineService.getAllMedicines().subscribe(
      (response) => {
        this.medicines = response;
        response.sort((a: Medicine, b) => a.tradeName.localeCompare(b.tradeName));
      }, (error: HttpErrorResponse)=>{
        alert(error.message)
      }
      )


  }
}
