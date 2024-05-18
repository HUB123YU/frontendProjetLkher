import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {JuryEncadrantInterneCriteria} from '../encadrant/JuryEncadrantInterneCriteria.model';

export class JuryCriteria  extends BaseCriteria  {

    public id: number;
    public ref: string;
    public refLike: string;
     public nombreMembres: number;
     public nombreMembresMin: number;
     public nombreMembresMax: number;
      public juryEncadrantInternes: Array<JuryEncadrantInterneCriteria>;

}
