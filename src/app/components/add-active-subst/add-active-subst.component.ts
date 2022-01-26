import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-active-subst',
  templateUrl: './add-active-subst.component.html',
  styleUrls: ['./add-active-subst.component.css']
})
export class AddActiveSubstComponent implements OnInit {
  closeResult = '';

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  onAddActiveSubstance(addForm:NgForm): void{

  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }





}
