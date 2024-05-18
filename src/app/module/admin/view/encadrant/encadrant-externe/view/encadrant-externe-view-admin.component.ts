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


import {EncadrantExterneAdminService} from 'src/app/shared/service/admin/encadrant/EncadrantExterneAdmin.service';
import {EncadrantExterneDto} from 'src/app/shared/model/encadrant/EncadrantExterne.model';
import {EncadrantExterneCriteria} from 'src/app/shared/criteria/encadrant/EncadrantExterneCriteria.model';

import {SocieteDto} from 'src/app/shared/model/societe/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/societe/SocieteAdmin.service';
@Component({
  selector: 'app-encadrant-externe-view-admin',
  templateUrl: './encadrant-externe-view-admin.component.html'
})
export class EncadrantExterneViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: EncadrantExterneAdminService, private societeService: SocieteAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get societe(): SocieteDto {
        return this.societeService.item;
    }
    set societe(value: SocieteDto) {
        this.societeService.item = value;
    }
    get societes(): Array<SocieteDto> {
        return this.societeService.items;
    }
    set societes(value: Array<SocieteDto>) {
        this.societeService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<EncadrantExterneDto> {
        return this.service.items;
    }

    set items(value: Array<EncadrantExterneDto>) {
        this.service.items = value;
    }

    get item(): EncadrantExterneDto {
        return this.service.item;
    }

    set item(value: EncadrantExterneDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): EncadrantExterneCriteria {
        return this.service.criteria;
    }

    set criteria(value: EncadrantExterneCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
