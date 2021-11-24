import {Component, OnInit} from '@angular/core';
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-active-subst-list',
  templateUrl: './active-subst-list-table.component.html',
  styleUrls: ['./active-subst-list.component.css']
})
export class ActiveSubstListComponent implements OnInit {

  // @ts-ignore
  activeSubstances: ActiveSubst[];
  // @ts-ignore
  searchMode: boolean;

  constructor(private activeSubstanceService: ActiveSubstanceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listActiveSubstances()
    });

  }

  listActiveSubstances() {
    this.searchMode = this.route.snapshot.paramMap.has('searchCode')
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListActiveSubst()
    }
  }

  handleListActiveSubst() {
    this.activeSubstanceService.getActiveSubstList().subscribe(
      data => {
        this.activeSubstances = data;
      }
    )

  }

  handleSearchProducts() {
    const theSearchCode: string | null = this.route.snapshot.paramMap.get('searchCode');
    this.activeSubstanceService.searchActiveSubst(theSearchCode).subscribe(
      data => {
        this.activeSubstances = data;
      }
    );

  }
}
