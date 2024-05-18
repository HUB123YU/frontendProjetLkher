import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SocieteDto} from '../societe/Societe.model';

export class EncadrantExterneDto extends BaseDto{

    public code: string;

    public nom: string;

    public prenom: string;

    public email: string;

    public telephone: string;

    public biographie: string;

    public societe: SocieteDto ;
    

    constructor() {
        super();

        this.code = '';
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.telephone = '';
        this.biographie = '';

        }

}
