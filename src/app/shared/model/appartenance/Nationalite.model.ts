import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class NationaliteDto extends BaseDto{

    public libelle: string;

    public code: string;

    

    constructor() {
        super();

        this.libelle = '';
        this.code = '';

        }

}
