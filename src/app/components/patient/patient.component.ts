import { Component, OnInit } from '@angular/core';
import {InteractionService} from "../../services/interaction.service";
import {Observable} from "rxjs";
import {Interaction} from "../../common/interaction";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  interactionsObs$: Observable<Interaction[]>;
  interactions: Interaction[] = [];
  constructor(private interactionService: InteractionService) {
    this.interactionsObs$= this.interactionService.getAllInteractions();
  }

  ngOnInit(): void {
    this.getAllInteractions();
  }

  getAllInteractions():void{
    this.interactionService.getAllInteractions().subscribe(
      (response)=>{
        this.interactions=response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    )
  }

}
