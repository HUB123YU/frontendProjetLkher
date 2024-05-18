import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {JuryEncadrantInterneDto} from '../encadrant/JuryEncadrantInterne.model';

export class JuryDto extends BaseDto{

    public ref: string;

    public nombreMembres: null | number;

     public juryEncadrantInternes: Array<JuryEncadrantInterneDto>;
    

    constructor() {
        super();

        this.ref = '';
        this.nombreMembres = null;
        this.juryEncadrantInternes = new Array<JuryEncadrantInterneDto>();

        }

}
