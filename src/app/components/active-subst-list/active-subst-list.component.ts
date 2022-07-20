import {Component, OnInit} from '@angular/core';
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MedicineService} from "../../services/medicine.service";
import {Medicine} from "../../common/medicine";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-active-subst-list',
  templateUrl: './active-subst-list-table.component.html',
  styleUrls: ['./active-subst-list.component.css']
})
export class ActiveSubstListComponent implements OnInit {


  public activeSubstances: ActiveSubst[] = [];
  activeSubstsObs$: Observable<ActiveSubst[]>;
  filteredActiveSubst$: Observable<ActiveSubst[]> | undefined;
  filter: FormControl;
  filter$: Observable<string>;

  public editActiveSubst: ActiveSubst | undefined;


  public deleteActiveSubst: ActiveSubst | undefined;
  public medicines: Medicine[] | undefined;

  public asDetails: ActiveSubst | undefined;

  constructor(private activeSubstanceService: ActiveSubstanceService,
              private medicineService: MedicineService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
    this.activeSubstsObs$ = this.activeSubstanceService.getAllActiveSubst();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));

  }

  ngOnInit():void {
    this.filteredActiveSubst$ = combineLatest([this.activeSubstsObs$,this.filter$]).pipe(map(([activeSubstances,term])=>
    activeSubstances.sort((a:ActiveSubst,b)=>a.name.localeCompare(b.name))
      .filter(activeSubstance=>
        activeSubstance.name
          .toLowerCase()
          .includes(term.toLowerCase())
      || activeSubstance.atcCode
          .toLowerCase()
          .includes(term.toLowerCase())
      )));




  }

   getAllActiveSubsts(): void {
    this.activeSubstanceService.getAllActiveSubst().subscribe(
      (response) => {
        this.activeSubstances = response;
        response.sort((a: ActiveSubst, b) => a.name.localeCompare(b.name)) //alphabetical order

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }

  getActiveSubstBySearchCode(): void {
    const searchCode: string | null = this.route.snapshot.paramMap.get('searchCode');
    this.activeSubstanceService.getActiveSubstBySearchCode(searchCode).subscribe(
      (response) => {
        this.activeSubstances = response;
      }
    )
  }

  getActiveSubstByName(): void {
    const name: string | null = this.route.snapshot.paramMap.get('name');
    this.activeSubstanceService.getActiveSubstByName(name).subscribe(
      (response) => {
        this.activeSubstances = response;
      }
    )
  }

  getMedicinesByAS(asId: number | undefined): void {
    this.medicineService.getMedicinesByAS(asId).subscribe(
      (response) => {
        this.medicines = response;
      }
    )
  }

  onEditActiveSubst(activeSubst: ActiveSubst): void {
    this.activeSubstanceService.updateActiveSubst(activeSubst).subscribe(
      (response) => {
        this.getAllActiveSubsts();
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onDeleteActiveSubst(activeSubstId?: number): void {
    this.activeSubstanceService.deleteActiveSubst(activeSubstId).subscribe(
      (response) => {
        this.getAllActiveSubsts();
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openModal(content: any, activeSubst: ActiveSubst, mode: string) {
    if (mode === 'update') {
      this.editActiveSubst = activeSubst;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
    if (mode === 'delete') {
      this.deleteActiveSubst = activeSubst;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
    if (mode === 'show') {
      this.asDetails = activeSubst;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
      this.getMedicinesByAS(this.asDetails.id)
    }
  }


}
