import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EncadrantInterneDto} from './EncadrantInterne.model';
import {JuryDto} from '../jury/Jury.model';

export class JuryEncadrantInterneDto extends BaseDto{

    public encadrantInterne: EncadrantInterneDto ;
    public jury: JuryDto ;
    

    constructor() {
        super();


        }

}
