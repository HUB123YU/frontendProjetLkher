import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SocieteCriteria} from '../societe/SocieteCriteria.model';

export class EncadrantExterneCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public email: string;
    public emailLike: string;
    public telephone: string;
    public telephoneLike: string;
    public biographie: string;
    public biographieLike: string;

}
