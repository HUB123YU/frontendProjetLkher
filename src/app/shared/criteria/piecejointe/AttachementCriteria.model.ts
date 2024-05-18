import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StageCriteria} from '../stage/StageCriteria.model';
import {TypeAttachementCriteria} from './TypeAttachementCriteria.model';

export class AttachementCriteria  extends BaseCriteria  {

    public id: number;
    public nom: string;
    public nomLike: string;
    public contenu: string;
    public contenuLike: string;
     public taille: number;
     public tailleMin: number;
     public tailleMax: number;

}
