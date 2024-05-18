import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../societe/Societe.model';
import {StageAttachementDto} from './StageAttachement.model';
import {StageEtudiantDto} from './StageEtudiant.model';
import {JuryDto} from '../jury/Jury.model';
import {FiliereDto} from '../departement/Filiere.model';
import {StageEncadrantExterneDto} from './StageEncadrantExterne.model';
import {StageEncadrantInterneDto} from './StageEncadrantInterne.model';
import {TypeStageDto} from './TypeStage.model';
import {DomaineDto} from '../departement/Domaine.model';

export class StageDto extends BaseDto{

    public sujet: string;

    public description: string;

   public dateDebut: Date;

   public dateFin: Date;

    public lieu: string;

    public dureeSemaines: null | number;

    public note: null | number;

   public dateSoutenance: Date;

    public domaine: DomaineDto ;
    public societe: SocieteDto ;
    public jury: JuryDto ;
    public filiere: FiliereDto ;
    public typeStage: TypeStageDto ;
     public stageEtudiants: Array<StageEtudiantDto>;
     public stageEncadrantInternes: Array<StageEncadrantInterneDto>;
     public stageEncadrantExternes: Array<StageEncadrantExterneDto>;
     public stageAttachements: Array<StageAttachementDto>;
    

    constructor() {
        super();

        this.sujet = '';
        this.description = '';
        this.dateDebut = null;
        this.dateFin = null;
        this.lieu = '';
        this.dureeSemaines = null;
        this.note = null;
        this.dateSoutenance = null;
        this.domaine = new DomaineDto() ;
        this.jury = new JuryDto() ;
        this.filiere = new FiliereDto() ;
        this.typeStage = new TypeStageDto() ;
        this.stageEtudiants = new Array<StageEtudiantDto>();
        this.stageEncadrantInternes = new Array<StageEncadrantInterneDto>();
        this.stageEncadrantExternes = new Array<StageEncadrantExterneDto>();
        this.stageAttachements = new Array<StageAttachementDto>();

        }

}
