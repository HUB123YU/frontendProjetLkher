import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DepartementCriteria} from './DepartementCriteria.model';

export class FiliereCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
  public departement: DepartementCriteria ;
  public departements: Array<DepartementCriteria> ;

}
