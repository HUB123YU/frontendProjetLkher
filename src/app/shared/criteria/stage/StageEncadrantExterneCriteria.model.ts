import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StageCriteria} from './StageCriteria.model';
import {EncadrantExterneCriteria} from '../encadrant/EncadrantExterneCriteria.model';

export class StageEncadrantExterneCriteria  extends BaseCriteria  {

    public id: number;
  public stage: StageCriteria ;
  public stages: Array<StageCriteria> ;
  public encadrantExterne: EncadrantExterneCriteria ;
  public encadrantExternes: Array<EncadrantExterneCriteria> ;

}
