import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';

import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';




import {SecteurActiviteAdminService} from 'src/app/shared/service/admin/departement/SecteurActiviteAdmin.service';
import {SecteurActiviteDto} from 'src/app/shared/model/departement/SecteurActivite.model';
import {SecteurActiviteCriteria} from 'src/app/shared/criteria/departement/SecteurActiviteCriteria.model';



@Component({
  selector: 'app-secteur-activite-edit-admin',
  templateUrl: './secteur-activite-edit-admin.component.html'
})
export class SecteurActiviteEditAdminComponent implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;



    private _validSecteurActiviteReference = true;
    private _validSecteurActiviteLibelle = true;




    constructor(private service: SecteurActiviteAdminService , @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
    }

    public prepareEdit() {
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new SecteurActiviteDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validSecteurActiviteReference = value;
        this.validSecteurActiviteLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSecteurActiviteReference();
        this.validateSecteurActiviteLibelle();
    }

    public validateSecteurActiviteReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validSecteurActiviteReference = false;
        } else {
            this.validSecteurActiviteReference = true;
        }
    }

    public validateSecteurActiviteLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validSecteurActiviteLibelle = false;
        } else {
            this.validSecteurActiviteLibelle = true;
        }
    }







    get validSecteurActiviteReference(): boolean {
        return this._validSecteurActiviteReference;
    }
    set validSecteurActiviteReference(value: boolean) {
        this._validSecteurActiviteReference = value;
    }
    get validSecteurActiviteLibelle(): boolean {
        return this._validSecteurActiviteLibelle;
    }
    set validSecteurActiviteLibelle(value: boolean) {
        this._validSecteurActiviteLibelle = value;
    }


	get items(): Array<SecteurActiviteDto> {
        return this.service.items;
    }

    set items(value: Array<SecteurActiviteDto>) {
        this.service.items = value;
    }

    get item(): SecteurActiviteDto {
        return this.service.item;
    }

    set item(value: SecteurActiviteDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): SecteurActiviteCriteria {
        return this.service.criteria;
    }

    set criteria(value: SecteurActiviteCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }


}
