import {Component, OnInit} from '@angular/core';


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
import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';


import {StageAttachementAdminService} from 'src/app/shared/service/admin/stage/StageAttachementAdmin.service';
import {StageAttachementDto} from 'src/app/shared/model/stage/StageAttachement.model';
import {StageAttachementCriteria} from 'src/app/shared/criteria/stage/StageAttachementCriteria.model';

import {StageDto} from 'src/app/shared/model/stage/Stage.model';
import {StageAdminService} from 'src/app/shared/service/admin/stage/StageAdmin.service';
import {AttachementDto} from 'src/app/shared/model/piecejointe/Attachement.model';
import {AttachementAdminService} from 'src/app/shared/service/admin/piecejointe/AttachementAdmin.service';
@Component({
  selector: 'app-stage-attachement-view-admin',
  templateUrl: './stage-attachement-view-admin.component.html'
})
export class StageAttachementViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: StageAttachementAdminService, private stageService: StageAdminService, private attachementService: AttachementAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): StageAttachementCriteria {
        return this.service.criteria;
    }

    set criteria(value: StageAttachementCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
