import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  doSearch(searchCode:string){
    console.log(`searchcode=${searchCode}`);
    this.router.navigateByUrl(`activesubstance/search/${searchCode}`);
  }

}
