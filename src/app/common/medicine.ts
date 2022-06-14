import {ActiveSubst} from "./active-subst";

export interface Medicine {

  medId?: number;
  tradeName: string;
  activeSubsts: ActiveSubst[];
  dosages: Array<string>;


}
