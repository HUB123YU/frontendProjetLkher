import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StageCriteria} from './StageCriteria.model';
import {AttachementCriteria} from '../piecejointe/AttachementCriteria.model';

export class StageAttachementCriteria  extends BaseCriteria  {

    public id: number;
     public size: number;
     public sizeMin: number;
     public sizeMax: number;
  public attachement: AttachementCriteria ;
  public attachements: Array<AttachementCriteria> ;

}
