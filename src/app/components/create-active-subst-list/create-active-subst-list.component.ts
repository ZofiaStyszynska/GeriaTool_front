import {Component, Input, OnInit, Output} from '@angular/core';
import {ActiveSubst} from "../../common/active-subst";
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-create-active-subst-list',
  templateUrl: './create-active-subst-list.component.html',
  styleUrls: ['./create-active-subst-list.component.css']
})
export class CreateActiveSubstListComponent implements OnInit {

  @Input() allActiveSubst: ActiveSubst[] = [];
  @Output() patientAtcCodes?: string[];

  patientAtcCode?: string;
  public model: any;


  search: OperatorFunction<string, readonly ActiveSubst[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.allActiveSubst.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
        v.atcCode.toLowerCase().indexOf(term.toLowerCase())).slice(0, 10))
    );

  formatter = (x: {name: string}) => x.name;


  constructor() { }

  ngOnInit(): void {
  }

}
