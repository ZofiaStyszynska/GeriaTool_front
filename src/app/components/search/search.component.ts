import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActiveSubst} from "../../common/active-subst";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public activeSubstances: ActiveSubst[] | undefined;
  constructor(private router: Router) { }

  ngOnInit(){
  }

  doSearch(searchCode:string){
    let name:string ='';
    console.log(`searchcode=${searchCode}`);

    if (searchCode==''){
      this.router.navigateByUrl('activesubstance');
    }
    //checks if the input contains a number
    else if (/\d/.test(searchCode)) {
      this.router.navigateByUrl(`activesubstance/search/${searchCode}`);
    }else{
      name = searchCode;
      this.router.navigateByUrl(`activesubstance/name/${name}`)
    }

    }


}
