import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtudiantDto} from '../etudiant/Etudiant.model';
import {StageDto} from './Stage.model';

export class StageEtudiantDto extends BaseDto{

    public stage: StageDto ;
    public etudiant: EtudiantDto ;
    

    constructor() {
        super();


        }

}
