import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EncadrantInterneDto extends BaseDto{

    public code: string;

    public biographie: string;

   public credentialsNonExpired: null | boolean;

   public enabled: null | boolean;

   public accountNonExpired: null | boolean;

   public accountNonLocked: null | boolean;

   public passwordChanged: null | boolean;

    public username: string;

    public password: string;

    

    constructor() {
        super();

        this.code = '';
        this.biographie = '';
        this.credentialsNonExpired = null;
        this.enabled = null;
        this.accountNonExpired = null;
        this.accountNonLocked = null;
        this.passwordChanged = null;
        this.username = '';
        this.password = '';

        }

}
