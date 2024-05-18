import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EncadrantInterneDto} from '../encadrant/EncadrantInterne.model';
import {StageDto} from './Stage.model';

export class StageEncadrantInterneDto extends BaseDto{

    public stage: StageDto ;
    public encadrantInterne: EncadrantInterneDto ;
    

    constructor() {
        super();


        }

}
