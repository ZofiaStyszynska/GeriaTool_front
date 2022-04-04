import {Component, OnInit, PipeTransform} from '@angular/core';
import {Medicine} from "../../common/medicine";
import {MedicineService} from "../../services/medicine.service";
import {ActiveSubst} from "../../common/active-subst";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DecimalPipe} from "@angular/common";
import {FormControl} from "@angular/forms";

import {combineLatest} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  medicines: Medicine[] = [];
  medicinesObs$: Observable<Medicine[]>;
  filteredMedicines$:Observable<Medicine[]>;
  filter: FormControl;
  filter$: Observable<string>;
  //private medicine: Medicine | undefined;

  constructor(private medicineService: MedicineService) {
    this.medicinesObs$ = this.medicineService.getAllMedicines();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));

    this.filteredMedicines$=combineLatest([this.medicinesObs$, this.filter$]).pipe(map(([medicines, term]) =>
      medicines.filter(medicine=>medicine.tradeName.toLowerCase().includes(term.toLowerCase()))));


  }

  ngOnInit(): void {
    // this.medicinesObs$ = this.filter.valueChanges.pipe(
    //   startWith(''),
    //   map(text => this.search(text))
    // )

  }


  search(text: string): Medicine[] {
    this.medicines = this.getAllMedicines();
    console.log("search method")
    return this.medicines.filter(medicine => {
      console.log(this.medicines + "in search meth")
      const term = text.toLowerCase();
      return medicine.tradeName.toLowerCase().includes(term);
      //|| pipe.transform(medicine.activeSubstances).includes(term);
    });
  }

  getAllMedicines(): Medicine[] {
    this.medicineService.getAllMedicines().subscribe(
      (response) => {
        this.medicines = response;
        response.sort((a: Medicine, b) => a.tradeName.localeCompare(b.tradeName));
        console.log("medicines" + this.medicines)
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

    return this.medicines
  }
}
