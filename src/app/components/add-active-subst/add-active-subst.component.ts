import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActiveSubstanceService} from "../../services/active-substance.service";
import {ActiveSubst} from "../../common/active-subst";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-active-subst',
  templateUrl: './add-active-subst.component.html',
  styleUrls: ['./add-active-subst.component.css']
})
export class AddActiveSubstComponent implements OnInit {


  activeSubstance: ActiveSubst | undefined;


  constructor(private modalService: NgbModal,
              private activeSubstanceService: ActiveSubstanceService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onAddActiveSubstance(addActiveSubstForm: NgForm) {
    this.activeSubstanceService.addActiveSubst(addActiveSubstForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['activesubstance'])


      },
      (error: HttpErrorResponse) => {
        alert(error.message);


      }
    )

  }


  open(content: any) {
    // this.router.navigate(['activesubstance/add']);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
