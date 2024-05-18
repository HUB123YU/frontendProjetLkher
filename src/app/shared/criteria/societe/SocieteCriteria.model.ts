import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SecteurActiviteCriteria} from '../departement/SecteurActiviteCriteria.model';
import {VilleCriteria} from '../appartenance/VilleCriteria.model';
import {PaysCriteria} from '../appartenance/PaysCriteria.model';

export class SocieteCriteria  extends BaseCriteria  {

    public id: number;
    public ice: string;
    public iceLike: string;
    public nom: string;
    public nomLike: string;
    public adresse: string;
    public adresseLike: string;
    public fax: string;
    public faxLike: string;
    public domaine: string;
    public domaineLike: string;
    public email: string;
    public emailLike: string;
    public telephone: string;
    public telephoneLike: string;
    public codePostal: string;
    public codePostalLike: string;
  public ville: VilleCriteria ;
  public villes: Array<VilleCriteria> ;
  public secteurActivite: SecteurActiviteCriteria ;
  public secteurActivites: Array<SecteurActiviteCriteria> ;
  public pays: PaysCriteria ;
  public payss: Array<PaysCriteria> ;

}
