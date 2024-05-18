import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SocieteCriteria} from '../societe/SocieteCriteria.model';
import {StageAttachementCriteria} from './StageAttachementCriteria.model';
import {StageEtudiantCriteria} from './StageEtudiantCriteria.model';
import {JuryCriteria} from '../jury/JuryCriteria.model';
import {FiliereCriteria} from '../departement/FiliereCriteria.model';
import {StageEncadrantExterneCriteria} from './StageEncadrantExterneCriteria.model';
import {StageEncadrantInterneCriteria} from './StageEncadrantInterneCriteria.model';
import {TypeStageCriteria} from './TypeStageCriteria.model';
import {DomaineCriteria} from '../departement/DomaineCriteria.model';

export class StageCriteria  extends BaseCriteria  {

    public id: number;
    public sujet: string;
    public sujetLike: string;
    public description: string;
    public descriptionLike: string;
    public dateDebut: Date;
    public dateDebutFrom: Date;
    public dateDebutTo: Date;
    public dateFin: Date;
    public dateFinFrom: Date;
    public dateFinTo: Date;
    public lieu: string;
    public lieuLike: string;
     public dureeSemaines: number;
     public dureeSemainesMin: number;
     public dureeSemainesMax: number;
     public note: number;
     public noteMin: number;
     public noteMax: number;
    public dateSoutenance: Date;
    public dateSoutenanceFrom: Date;
    public dateSoutenanceTo: Date;
  public domaine: DomaineCriteria ;
  public domaines: Array<DomaineCriteria> ;
  public jury: JuryCriteria ;
  public jurys: Array<JuryCriteria> ;
  public filiere: FiliereCriteria ;
  public filieres: Array<FiliereCriteria> ;
  public typeStage: TypeStageCriteria ;
  public typeStages: Array<TypeStageCriteria> ;
      public stageEtudiants: Array<StageEtudiantCriteria>;
      public stageEncadrantInternes: Array<StageEncadrantInterneCriteria>;
      public stageEncadrantExternes: Array<StageEncadrantExterneCriteria>;
      public stageAttachements: Array<StageAttachementCriteria>;

}
