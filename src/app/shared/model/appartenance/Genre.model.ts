import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class GenreDto extends BaseDto{

    public libelle: string;

    public code: string;

    

    constructor() {
        super();

        this.libelle = '';
        this.code = '';

        }

}
