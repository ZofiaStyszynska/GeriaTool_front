import {Component, OnInit, PipeTransform} from '@angular/core';
import {Medicine} from "../../common/medicine";
import {MedicineService} from "../../services/medicine.service";
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FormControl} from "@angular/forms";

import {combineLatest} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  medicines: Medicine[] = [];
  medicinesObs$: Observable<Medicine[]>;
  filteredMedicines$: Observable<Medicine[]> | undefined;
  medicine: Medicine | undefined;
  activeSubsts: ActiveSubst[] | undefined = [];

  filter: FormControl;
  filter$: Observable<string>;


  constructor(private medicineService: MedicineService, private activeSubstanceService: ActiveSubstanceService,private modalService: NgbModal) {
    this.medicinesObs$ = this.medicineService.getAllMedicines();

    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));






  }

  ngOnInit(): void {
    this.filteredMedicines$ = combineLatest([this.medicinesObs$, this.filter$]).pipe(map(([medicines, term]) =>
      medicines
        .sort((a: Medicine,b)=>a.tradeName.localeCompare(b.tradeName))
        .filter(medicine =>
          medicine.tradeName
            .toLowerCase()
            .includes(term.toLowerCase())
        || medicine.activeSubsts.find(activeSubst => activeSubst.name
            .toLowerCase()
            .includes(term.toLowerCase()))
      )));

    this.getAllActiveSubsts()

  }


  search(text: string): Medicine[] {
    this.medicines = this.getAllMedicines();
    console.log("search method")
    return this.medicines.filter(medicine => {
      console.log(this.medicines + "in search meth")
      const term = text.toLowerCase();
      return medicine.tradeName.toLowerCase().includes(term);

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

  getMedicinebyId(medId: number | undefined): Medicine | undefined {
    this.medicineService.getMedicineById(medId).subscribe(
      (response) => {
        this.medicine = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
    return this.medicine
  }

  getActiveSubstNamesByMedicine(medId: number | undefined) {
    this.medicine?.activeSubsts.forEach(actSubst => actSubst.name.concat())

  }

  addMedicine(medicine: Medicine) {
    this.medicineService.addMedicine(medicine).subscribe(
      (response) => {
        console.log(response)
        this.medicines.push(response)
        this.ngOnInit()
      }, (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  getAllActiveSubsts(): void {
    this.activeSubstanceService
      .getAllActiveSubst().subscribe(
      (response) => {
        this.activeSubsts = response;
        response.sort((a: ActiveSubst, b) => a.name.localeCompare(b.name)) //alphabetical order

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }
  deleteMedicine(medId?:number): void{
    this.medicineService.deleteMedicine(medId).subscribe(
      ()=>{this.ngOnInit()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  updateMedicine(medicine:Medicine):void{
    console.log(medicine);
    this.medicineService.updateMedicine(medicine).subscribe(
      ()=>{

        this.ngOnInit()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openModal(content:any, medicine:Medicine): void{
    this.medicine = medicine;
    this.modalService.open(content);
  }
}
