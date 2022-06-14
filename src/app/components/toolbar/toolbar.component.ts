import { Component, OnInit } from '@angular/core';
import {faCapsules} from "@fortawesome/free-solid-svg-icons/faCapsules";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  faCapsules = faCapsules;

  constructor() { }

  ngOnInit(): void {
  }

}
