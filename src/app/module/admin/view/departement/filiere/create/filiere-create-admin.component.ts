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



import {FiliereAdminService} from 'src/app/shared/service/admin/departement/FiliereAdmin.service';
import {FiliereDto} from 'src/app/shared/model/departement/Filiere.model';
import {FiliereCriteria} from 'src/app/shared/criteria/departement/FiliereCriteria.model';
import {DepartementDto} from 'src/app/shared/model/departement/Departement.model';
import {DepartementAdminService} from 'src/app/shared/service/admin/departement/DepartementAdmin.service';
@Component({
  selector: 'app-filiere-create-admin',
  templateUrl: './filiere-create-admin.component.html'
})
export class FiliereCreateAdminComponent  implements OnInit {

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



   private _validFiliereCode = true;
   private _validFiliereLibelle = true;
    private _validDepartementLibelle = true;
    private _validDepartementCode = true;

	constructor(private service: FiliereAdminService , private departementService: DepartementAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.departementService.findAll().subscribe((data) => this.departements = data);
    }


    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new FiliereDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
        this.validFiliereCode = value;
        this.validFiliereLibelle = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFiliereCode();
        this.validateFiliereLibelle();
    }

    public validateFiliereCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validFiliereCode = false;
        } else {
            this.validFiliereCode = true;
        }
    }
    public validateFiliereLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFiliereLibelle = false;
        } else {
            this.validFiliereLibelle = true;
        }
    }


    public async openCreateDepartement(departement: string) {
    const isPermistted = await this.roleService.isPermitted('Departement', 'add');
    if(isPermistted) {
         this.departement = new DepartementDto();
         this.createDepartementDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get departement(): DepartementDto {
        return this.departementService.item;
    }
    set departement(value: DepartementDto) {
        this.departementService.item = value;
    }
    get departements(): Array<DepartementDto> {
        return this.departementService.items;
    }
    set departements(value: Array<DepartementDto>) {
        this.departementService.items = value;
    }
    get createDepartementDialog(): boolean {
        return this.departementService.createDialog;
    }
    set createDepartementDialog(value: boolean) {
        this.departementService.createDialog= value;
    }



    get validFiliereCode(): boolean {
        return this._validFiliereCode;
    }

    set validFiliereCode(value: boolean) {
         this._validFiliereCode = value;
    }
    get validFiliereLibelle(): boolean {
        return this._validFiliereLibelle;
    }

    set validFiliereLibelle(value: boolean) {
         this._validFiliereLibelle = value;
    }

    get validDepartementLibelle(): boolean {
        return this._validDepartementLibelle;
    }
    set validDepartementLibelle(value: boolean) {
        this._validDepartementLibelle = value;
    }
    get validDepartementCode(): boolean {
        return this._validDepartementCode;
    }
    set validDepartementCode(value: boolean) {
        this._validDepartementCode = value;
    }


    get items(): Array<FiliereDto> {
        return this.service.items;
    }

    set items(value: Array<FiliereDto>) {
        this.service.items = value;
    }

    get item(): FiliereDto {
        return this.service.item;
    }

    set item(value: FiliereDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): FiliereCriteria {
        return this.service.criteria;
    }

    set criteria(value: FiliereCriteria) {
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
