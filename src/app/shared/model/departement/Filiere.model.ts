import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DepartementDto} from './Departement.model';

export class FiliereDto extends BaseDto{

    public code: string;

    public libelle: string;

    public departement: DepartementDto ;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.departement = new DepartementDto() ;

        }

}
