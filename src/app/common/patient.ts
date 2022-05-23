import {Medicine} from "./medicine";
import {ICD10} from "./icd10";

export interface Patient {

  id?: number;
  age: number;
  sex: string;
  weight: number;
  takenMedicines: Medicine[];
  diseases: ICD10[];
  creatinineLevel: number;
}
