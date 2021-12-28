import {Component, OnInit} from '@angular/core';
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-active-subst-list',
  templateUrl: './active-subst-list-table.component.html',
  styleUrls: ['./active-subst-list.component.css']
})
export class ActiveSubstListComponent implements OnInit {


  public activeSubstances: ActiveSubst[] | undefined;
  public searchMode: boolean = false;

  constructor(private activeSubstanceService: ActiveSubstanceService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllActiveSubsts();

  }

  handleActiveSubstList():void {

  }



  getAllActiveSubsts():void {
    this.activeSubstanceService.getAllActiveSubst().subscribe(
      (response) => {
        this.activeSubstances = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }
  getActiveSubstBySearchCode():void{
    const searchCode: string | null= this.route.snapshot.paramMap.get('searchcode');
    this.activeSubstanceService.getActiveSubstBySearchCode(searchCode).subscribe(
      (response)=>{
        this.activeSubstances =response;
      }
    )
  }



}
