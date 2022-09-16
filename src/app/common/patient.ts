import {Medicine} from "./medicine";
import {Disease} from "./disease";

export interface Patient {

  id?: number;
  age: number;
  sex: string;
  weight: number;
  takenMedicines: Medicine[];
  diseases: Disease[];
  creatinineLevel: number;
}
