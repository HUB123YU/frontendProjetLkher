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




import {AttachementEtudiantService} from 'src/app/shared/service/etudiant/piecejointe/AttachementEtudiant.service';
import {AttachementDto} from 'src/app/shared/model/piecejointe/Attachement.model';
import {AttachementCriteria} from 'src/app/shared/criteria/piecejointe/AttachementCriteria.model';


import {StageDto} from 'src/app/shared/model/stage/Stage.model';
import {StageEtudiantService} from 'src/app/shared/service/etudiant/stage/StageEtudiant.service';
import {TypeAttachementDto} from 'src/app/shared/model/piecejointe/TypeAttachement.model';
import {TypeAttachementEtudiantService} from 'src/app/shared/service/etudiant/piecejointe/TypeAttachementEtudiant.service';

@Component({
  selector: 'app-attachement-edit-etudiant',
  templateUrl: './attachement-edit-etudiant.component.html'
})
export class AttachementEditEtudiantComponent implements OnInit {

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



    constructor(private service: AttachementEtudiantService , private stageService: StageEtudiantService, private typeAttachementService: TypeAttachementEtudiantService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.typeAttachementService.findAll().subscribe((data) => this.typeAttachements = data);
        this.stageService.findAll().subscribe((data) => this.stages = data);
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
            this.item = new AttachementDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   public async openCreateTypeAttachement(typeAttachement: string) {
        const isPermistted = await this.roleService.isPermitted('TypeAttachement', 'edit');
        if (isPermistted) {
             this.typeAttachement = new TypeAttachementDto();
             this.createTypeAttachementDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get stage(): StageDto {
        return this.stageService.item;
    }
    set stage(value: StageDto) {
        this.stageService.item = value;
    }
    get stages(): Array<StageDto> {
        return this.stageService.items;
    }
    set stages(value: Array<StageDto>) {
        this.stageService.items = value;
    }
    get createStageDialog(): boolean {
        return this.stageService.createDialog;
    }
    set createStageDialog(value: boolean) {
        this.stageService.createDialog= value;
    }
    get typeAttachement(): TypeAttachementDto {
        return this.typeAttachementService.item;
    }
    set typeAttachement(value: TypeAttachementDto) {
        this.typeAttachementService.item = value;
    }
    get typeAttachements(): Array<TypeAttachementDto> {
        return this.typeAttachementService.items;
    }
    set typeAttachements(value: Array<TypeAttachementDto>) {
        this.typeAttachementService.items = value;
    }
    get createTypeAttachementDialog(): boolean {
        return this.typeAttachementService.createDialog;
    }
    set createTypeAttachementDialog(value: boolean) {
        this.typeAttachementService.createDialog= value;
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

	get items(): Array<AttachementDto> {
        return this.service.items;
    }

    set items(value: Array<AttachementDto>) {
        this.service.items = value;
    }

    get item(): AttachementDto {
        return this.service.item;
    }

    set item(value: AttachementDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): AttachementCriteria {
        return this.service.criteria;
    }

    set criteria(value: AttachementCriteria) {
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
