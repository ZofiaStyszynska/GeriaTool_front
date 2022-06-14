import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Medicine} from "../../common/medicine";
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormArray} from '@angular/forms';
import {ActiveSubst} from "../../common/active-subst";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  @Output() onAddMedicine: EventEmitter<Medicine> = new EventEmitter();
  @Output() onUpdateMedicine: EventEmitter<Medicine> = new EventEmitter();
  @Input() tempMedicine: Medicine | undefined;
  @Input() activeSubstsInput: ActiveSubst[] | undefined;
  medicine: Medicine | undefined;

  medicineForm: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.medicineForm = this.fb.group({
      tradeName: '',
      dosages: this.fb.array([]),
      activeSubsts: this.fb.array([]),

    })
  }
  get tradeName(): FormControl{
    return this.medicineForm.get('tradeName') as FormControl
  }

  get dosages(): FormArray {
    return this.medicineForm.get('dosages') as FormArray
  }

  get activeSubsts(): FormArray {
    return this.medicineForm.get('activeSubsts') as FormArray
  }

  newMedicine(): FormGroup {
    return this.fb.group({
      tradeName: '',
      dosages: this.fb.array([]),
      activeSubsts: this.fb.array([]),
    })
  }



  newDosage(): FormControl {
    return this.fb.control('')
  }

  newActiveSubst(): FormGroup {
    return this.fb.group({
      name: '',
      atcCode: '',
      group: '',
    })
  }

  addDosages() {
    this.dosages.push(this.newDosage());
  }

  addActiveSubst() {
    this.activeSubsts.push(this.newActiveSubst());
  }

  removeDosage(i: number) {
    this.dosages.removeAt(i);
  }

  removeActiveSubst(i: number) {
    this.activeSubsts.removeAt(i);
  }
  editMedicine(tempMedicine:Medicine){
    this.medicineForm.patchValue({

    })
  }

  onSubmit() {

    const newMedicine : Medicine = this.medicineForm.value;

    this.onAddMedicine.emit(newMedicine);

  }
  open(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


  ngOnInit(): void {
  }

}
