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



import {JuryAdminService} from 'src/app/shared/service/admin/jury/JuryAdmin.service';
import {JuryDto} from 'src/app/shared/model/jury/Jury.model';
import {JuryCriteria} from 'src/app/shared/criteria/jury/JuryCriteria.model';
import {EncadrantInterneDto} from 'src/app/shared/model/encadrant/EncadrantInterne.model';
import {EncadrantInterneAdminService} from 'src/app/shared/service/admin/encadrant/EncadrantInterneAdmin.service';
import {JuryEncadrantInterneDto} from 'src/app/shared/model/encadrant/JuryEncadrantInterne.model';
import {JuryEncadrantInterneAdminService} from 'src/app/shared/service/admin/encadrant/JuryEncadrantInterneAdmin.service';
@Component({
  selector: 'app-jury-create-admin',
  templateUrl: './jury-create-admin.component.html'
})
export class JuryCreateAdminComponent  implements OnInit {

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

    private _juryEncadrantInternesElement = new JuryEncadrantInterneDto();


   private _validJuryRef = true;
    private _juryEncadrantInternes: Array<JuryEncadrantInterneDto> = [];

	constructor(private service: JuryAdminService , private encadrantInterneService: EncadrantInterneAdminService, private juryEncadrantInterneService: JuryEncadrantInterneAdminService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.encadrantInterneService.findAll().subscribe(data => this.prepareJuryEncadrantInternes(data));
        this.juryEncadrantInternesElement.encadrantInterne = new EncadrantInterneDto();
        this.encadrantInterneService.findAll().subscribe((data) => this.encadrantInternes = data);
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
                this.item = new JuryDto();
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


     prepareJuryEncadrantInternes(encadrantInternes: Array<EncadrantInterneDto>): void{
        if( encadrantInternes != null){
                encadrantInternes.forEach(e => {
                const juryEncadrantInterne = new JuryEncadrantInterneDto();
                juryEncadrantInterne.encadrantInterne = e;
                this.juryEncadrantInternes.push(juryEncadrantInterne);
            });
        }
    }



    public  setValidation(value: boolean){
        this.validJuryRef = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateJuryRef();
    }

    public validateJuryRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validJuryRef = false;
        } else {
            this.validJuryRef = true;
        }
    }



    get encadrantInterne(): EncadrantInterneDto {
        return this.encadrantInterneService.item;
    }
    set encadrantInterne(value: EncadrantInterneDto) {
        this.encadrantInterneService.item = value;
    }
    get encadrantInternes(): Array<EncadrantInterneDto> {
        return this.encadrantInterneService.items;
    }
    set encadrantInternes(value: Array<EncadrantInterneDto>) {
        this.encadrantInterneService.items = value;
    }
    get createEncadrantInterneDialog(): boolean {
        return this.encadrantInterneService.createDialog;
    }
    set createEncadrantInterneDialog(value: boolean) {
        this.encadrantInterneService.createDialog= value;
    }

    get juryEncadrantInternes(): Array<JuryEncadrantInterneDto> {
        if( this._juryEncadrantInternes == null )
            this._juryEncadrantInternes = new Array();
        return this._juryEncadrantInternes;
    }

    set juryEncadrantInternes(value: Array<JuryEncadrantInterneDto>) {
        this._juryEncadrantInternes = value;
    }


    get validJuryRef(): boolean {
        return this._validJuryRef;
    }

    set validJuryRef(value: boolean) {
         this._validJuryRef = value;
    }


    get juryEncadrantInternesElement(): JuryEncadrantInterneDto {
        if( this._juryEncadrantInternesElement == null )
            this._juryEncadrantInternesElement = new JuryEncadrantInterneDto();
        return this._juryEncadrantInternesElement;
    }

    set juryEncadrantInternesElement(value: JuryEncadrantInterneDto) {
        this._juryEncadrantInternesElement = value;
    }

    get items(): Array<JuryDto> {
        return this.service.items;
    }

    set items(value: Array<JuryDto>) {
        this.service.items = value;
    }

    get item(): JuryDto {
        return this.service.item;
    }

    set item(value: JuryDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): JuryCriteria {
        return this.service.criteria;
    }

    set criteria(value: JuryCriteria) {
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
