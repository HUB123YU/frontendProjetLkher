import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {FiliereCriteria} from '../departement/FiliereCriteria.model';
import {NationaliteCriteria} from '../appartenance/NationaliteCriteria.model';
import {GenreCriteria} from '../appartenance/GenreCriteria.model';

export class EtudiantCriteria  extends BaseCriteria  {

    public adresse: string;
    public adresseLike: string;
    public telephone: string;
    public telephoneLike: string;
    public dateNaissance: Date;
    public dateNaissanceFrom: Date;
    public dateNaissanceTo: Date;
    public codeAppoge: string;
    public codeAppogeLike: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;
  public genre: GenreCriteria ;
  public genres: Array<GenreCriteria> ;
  public nationalite: NationaliteCriteria ;
  public nationalites: Array<NationaliteCriteria> ;
  public filiere: FiliereCriteria ;
  public filieres: Array<FiliereCriteria> ;

}
