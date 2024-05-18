import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SecteurActiviteDto} from '../departement/SecteurActivite.model';
import {VilleDto} from '../appartenance/Ville.model';
import {PaysDto} from '../appartenance/Pays.model';

export class SocieteDto extends BaseDto{

    public ice: string;

    public nom: string;

    public adresse: string;

    public fax: string;

    public domaine: string;

    public email: string;

    public telephone: string;

    public codePostal: string;

    public ville: VilleDto ;
    public secteurActivite: SecteurActiviteDto ;
    public pays: PaysDto ;
    

    constructor() {
        super();

        this.ice = '';
        this.nom = '';
        this.adresse = '';
        this.fax = '';
        this.domaine = '';
        this.email = '';
        this.telephone = '';
        this.codePostal = '';
        this.ville = new VilleDto() ;
        this.secteurActivite = new SecteurActiviteDto() ;
        this.pays = new PaysDto() ;

        }

}
