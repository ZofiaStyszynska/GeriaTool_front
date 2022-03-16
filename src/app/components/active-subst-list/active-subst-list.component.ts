import {Component, OnInit} from '@angular/core';
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-active-subst-list',
  templateUrl: './active-subst-list-table.component.html',
  styleUrls: ['./active-subst-list.component.css']
})
export class ActiveSubstListComponent implements OnInit {


  public activeSubstances: ActiveSubst[] | undefined;

  public editActiveSubst: ActiveSubst | undefined;

  // @ts-ignore
  public deleteActiveSubst: ActiveSubst;

  constructor(private activeSubstanceService: ActiveSubstanceService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.handleSearchOptions();


  }

  handleSearchOptions(): void {
    this.route.paramMap.subscribe(() => {

      if (this.route.snapshot.paramMap.has('searchCode')) {
        this.getActiveSubstBySearchCode();
      } else if (this.route.snapshot.paramMap.has('name')) {
        this.getActiveSubstByName();
      } else {

        this.getAllActiveSubsts()
      }
    });

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
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    }
  }


}
