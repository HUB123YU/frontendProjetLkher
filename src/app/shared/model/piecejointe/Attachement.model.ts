import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {StageDto} from '../stage/Stage.model';
import {TypeAttachementDto} from './TypeAttachement.model';

export class AttachementDto extends BaseDto{

    public nom: string;

    public contenu: string;

    public taille: null | number;

    public typeAttachement: TypeAttachementDto ;
    public stage: StageDto ;
    

    constructor() {
        super();

        this.nom = '';
        this.contenu = '';
        this.taille = null;

        }

}
