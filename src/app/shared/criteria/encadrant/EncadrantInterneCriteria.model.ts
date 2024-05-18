import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class EncadrantInterneCriteria  extends BaseCriteria  {

    public code: string;
    public codeLike: string;
    public biographie: string;
    public biographieLike: string;
    public credentialsNonExpired: null | boolean;
    public enabled: null | boolean;
    public accountNonExpired: null | boolean;
    public accountNonLocked: null | boolean;
    public passwordChanged: null | boolean;
    public username: string;
    public usernameLike: string;
    public password: string;
    public passwordLike: string;

}
