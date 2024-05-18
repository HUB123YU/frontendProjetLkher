import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {FiliereDto} from '../departement/Filiere.model';
import {NationaliteDto} from '../appartenance/Nationalite.model';
import {GenreDto} from '../appartenance/Genre.model';

export class EtudiantDto extends BaseDto{

    public adresse: string;

    public telephone: string;

   public dateNaissance: Date;

    public codeAppoge: string;

   public credentialsNonExpired: null | boolean;

   public enabled: null | boolean;

   public accountNonExpired: null | boolean;

   public accountNonLocked: null | boolean;

   public passwordChanged: null | boolean;

    public username: string;

    public password: string;

    public genre: GenreDto ;
    public nationalite: NationaliteDto ;
    public filiere: FiliereDto ;
    

    constructor() {
        super();

        this.adresse = '';
        this.telephone = '';
        this.dateNaissance = null;
        this.codeAppoge = '';
        this.credentialsNonExpired = null;
        this.enabled = null;
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.passwordChanged = null;
        this.username = '';
        this.password = '';
        this.genre = new GenreDto() ;
        this.nationalite = new NationaliteDto() ;
        this.filiere = new FiliereDto() ;

        }

}
