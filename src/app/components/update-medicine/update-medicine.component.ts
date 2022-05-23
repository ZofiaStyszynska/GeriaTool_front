import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Medicine} from "../../common/medicine";
import {ActiveSubst} from "../../common/active-subst";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  @Output() onUpdateMedicine: EventEmitter<Medicine> = new EventEmitter();
  @Input() tempMedicine: Medicine | undefined;

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
  editMedicine(tempMedicine:Medicine|undefined){
    this.medicineForm.patchValue({
      tradeName: tempMedicine?.tradeName,


    });
    this.medicineForm.setControl("dosages",this.setExistingDosages(tempMedicine?.dosages));
    this.medicineForm.setControl("activeSubsts",this.setExistingActiveSubst(tempMedicine?.activeSubsts));
  }
  setExistingDosages(dosagesSet: string[]|undefined):FormArray{
    const formArray = new FormArray([]);
    dosagesSet?.forEach(d=>{
      formArray.push(this.fb.control(d))
    })
    return formArray;


  }
  setExistingActiveSubst(activeSubstSet:ActiveSubst[] | undefined): FormArray{
    const formArray = new FormArray([]);
    activeSubstSet?.forEach(as =>{
      formArray.push(this.fb.group({
        name:as.name,
        atcCode:as.atcCode,
        group:as.group
      }))
    });
    return formArray;
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

  openModal(tempMedicine:Medicine|undefined, content:any){
    this.editMedicine(tempMedicine);
    this.modalService.open(content);
  }


  onSubmit() {

    const newMedicine : Medicine = this.medicineForm.value;

    this.onUpdateMedicine.emit(newMedicine);

  }
  open(content: any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


  ngOnInit(): void {
  }


}
