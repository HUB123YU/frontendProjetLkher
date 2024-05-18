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


import {JuryEtudiantService} from 'src/app/shared/service/etudiant/jury/JuryEtudiant.service';
import {JuryDto} from 'src/app/shared/model/jury/Jury.model';
import {JuryCriteria} from 'src/app/shared/criteria/jury/JuryCriteria.model';

import {EncadrantInterneDto} from 'src/app/shared/model/encadrant/EncadrantInterne.model';
import {EncadrantInterneEtudiantService} from 'src/app/shared/service/etudiant/encadrant/EncadrantInterneEtudiant.service';
import {JuryEncadrantInterneDto} from 'src/app/shared/model/encadrant/JuryEncadrantInterne.model';
import {JuryEncadrantInterneEtudiantService} from 'src/app/shared/service/etudiant/encadrant/JuryEncadrantInterneEtudiant.service';
@Component({
  selector: 'app-jury-view-etudiant',
  templateUrl: './jury-view-etudiant.component.html'
})
export class JuryViewEtudiantComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    juryEncadrantInternes = new JuryEncadrantInterneDto();
    juryEncadrantInterness: Array<JuryEncadrantInterneDto> = [];

    constructor(private service: JuryEtudiantService, private encadrantInterneService: EncadrantInterneEtudiantService, private juryEncadrantInterneService: JuryEncadrantInterneEtudiantService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): JuryCriteria {
        return this.service.criteria;
    }

    set criteria(value: JuryCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
