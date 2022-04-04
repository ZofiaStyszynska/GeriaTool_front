import {Medicine} from "./medicine";

export interface ActiveSubst {

  id?: number;
  name: string;
  atcCode: string;
  group: string;
  medicines: Array<Medicine>;


}
