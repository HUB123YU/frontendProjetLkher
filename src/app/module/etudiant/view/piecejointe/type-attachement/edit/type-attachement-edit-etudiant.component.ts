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




import {TypeAttachementEtudiantService} from 'src/app/shared/service/etudiant/piecejointe/TypeAttachementEtudiant.service';
import {TypeAttachementDto} from 'src/app/shared/model/piecejointe/TypeAttachement.model';
import {TypeAttachementCriteria} from 'src/app/shared/criteria/piecejointe/TypeAttachementCriteria.model';



@Component({
  selector: 'app-type-attachement-edit-etudiant',
  templateUrl: './type-attachement-edit-etudiant.component.html'
})
export class TypeAttachementEditEtudiantComponent implements OnInit {

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



    private _validTypeAttachementReference = true;
    private _validTypeAttachementLibelle = true;




    constructor(private service: TypeAttachementEtudiantService , @Inject(PLATFORM_ID) private platformId?) {
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
            this.item = new TypeAttachementDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validTypeAttachementReference = value;
        this.validTypeAttachementLibelle = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeAttachementReference();
        this.validateTypeAttachementLibelle();
    }

    public validateTypeAttachementReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
            this.errorMessages.push('Reference non valide');
            this.validTypeAttachementReference = false;
        } else {
            this.validTypeAttachementReference = true;
        }
    }

    public validateTypeAttachementLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeAttachementLibelle = false;
        } else {
            this.validTypeAttachementLibelle = true;
        }
    }







    get validTypeAttachementReference(): boolean {
        return this._validTypeAttachementReference;
    }
    set validTypeAttachementReference(value: boolean) {
        this._validTypeAttachementReference = value;
    }
    get validTypeAttachementLibelle(): boolean {
        return this._validTypeAttachementLibelle;
    }
    set validTypeAttachementLibelle(value: boolean) {
        this._validTypeAttachementLibelle = value;
    }


	get items(): Array<TypeAttachementDto> {
        return this.service.items;
    }

    set items(value: Array<TypeAttachementDto>) {
        this.service.items = value;
    }

    get item(): TypeAttachementDto {
        return this.service.item;
    }

    set item(value: TypeAttachementDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): TypeAttachementCriteria {
        return this.service.criteria;
    }

    set criteria(value: TypeAttachementCriteria) {
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
