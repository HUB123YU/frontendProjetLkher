import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {StageDto} from './Stage.model';
import {EncadrantExterneDto} from '../encadrant/EncadrantExterne.model';

export class StageEncadrantExterneDto extends BaseDto{

    public stage: StageDto ;
    public encadrantExterne: EncadrantExterneDto ;
    

    constructor() {
        super();

        this.stage = new StageDto() ;
        this.encadrantExterne = new EncadrantExterneDto() ;

        }

}
