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




import {StageAttachementAdminService} from 'src/app/shared/service/admin/stage/StageAttachementAdmin.service';
import {StageAttachementDto} from 'src/app/shared/model/stage/StageAttachement.model';
import {StageAttachementCriteria} from 'src/app/shared/criteria/stage/StageAttachementCriteria.model';


import {StageDto} from 'src/app/shared/model/stage/Stage.model';
import {StageAdminService} from 'src/app/shared/service/admin/stage/StageAdmin.service';
import {AttachementDto} from 'src/app/shared/model/piecejointe/Attachement.model';
import {AttachementAdminService} from 'src/app/shared/service/admin/piecejointe/AttachementAdmin.service';

@Component({
  selector: 'app-stage-attachement-edit-admin',
  templateUrl: './stage-attachement-edit-admin.component.html'
})
export class StageAttachementEditAdminComponent implements OnInit {

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







    constructor(private service: StageAttachementAdminService , private stageService: StageAdminService, private attachementService: AttachementAdminService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.stageService.findAll().subscribe((data) => this.stages = data);
        this.attachementService.findAll().subscribe((data) => this.attachements = data);
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
            this.item = new StageAttachementDto();
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




   public async openCreateStage(stage: string) {
        const isPermistted = await this.roleService.isPermitted('Stage', 'edit');
        if (isPermistted) {
             this.stage = new StageDto();
             this.createStageDialog = true;
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
    get attachement(): AttachementDto {
        return this.attachementService.item;
    }
    set attachement(value: AttachementDto) {
        this.attachementService.item = value;
    }
    get attachements(): Array<AttachementDto> {
        return this.attachementService.items;
    }
    set attachements(value: Array<AttachementDto>) {
        this.attachementService.items = value;
    }
    get createAttachementDialog(): boolean {
        return this.attachementService.createDialog;
    }
    set createAttachementDialog(value: boolean) {
        this.attachementService.createDialog= value;
    }




	get items(): Array<StageAttachementDto> {
        return this.service.items;
    }

    set items(value: Array<StageAttachementDto>) {
        this.service.items = value;
    }

    get item(): StageAttachementDto {
        return this.service.item;
    }

    set item(value: StageAttachementDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): StageAttachementCriteria {
        return this.service.criteria;
    }

    set criteria(value: StageAttachementCriteria) {
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
