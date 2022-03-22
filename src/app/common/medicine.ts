import {ActiveSubst} from "./active-subst";

export interface Medicine {

  id?: number;
  tradeName: string;
  activeSubstances: Array<ActiveSubst>;
  dosage: Array<string>;
}
