import { Component, OnInit } from '@angular/core';
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";

@Component({
  selector: 'app-active-subst-list',
  templateUrl: './active-subst-list-table.component.html',
  styleUrls: ['./active-subst-list.component.css']
})
export class ActiveSubstListComponent implements OnInit {

  // @ts-ignore
  activeSubstances: ActiveSubst[];

  constructor(private activeSubstanceService: ActiveSubstanceService) { }

  ngOnInit(): void {
    this.listActiveSubstances();

  }
  listActiveSubstances(){
    this.activeSubstanceService.getActiveSubstList().subscribe(
      data =>{
        this.activeSubstances = data;
      }
    )
  }

}
