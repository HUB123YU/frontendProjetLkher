import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {StageDto} from './Stage.model';
import {AttachementDto} from '../piecejointe/Attachement.model';

export class StageAttachementDto extends BaseDto{

    public size: null | number;

    public stage: StageDto ;
    public attachement: AttachementDto ;
    

    constructor() {
        super();

        this.size = null;
        this.attachement = new AttachementDto() ;

        }

}
