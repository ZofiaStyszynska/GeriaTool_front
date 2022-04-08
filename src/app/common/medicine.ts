import {ActiveSubst} from "./active-subst";

export interface Medicine {

  id?: number;
  tradeName: string;
  activeSubsts: ActiveSubst[];
  dosages: Array<string>;


}
