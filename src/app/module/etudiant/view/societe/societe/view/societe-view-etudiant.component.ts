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


import {SocieteEtudiantService} from 'src/app/shared/service/etudiant/societe/SocieteEtudiant.service';
import {SocieteDto} from 'src/app/shared/model/societe/Societe.model';
import {SocieteCriteria} from 'src/app/shared/criteria/societe/SocieteCriteria.model';

import {SecteurActiviteDto} from 'src/app/shared/model/departement/SecteurActivite.model';
import {SecteurActiviteEtudiantService} from 'src/app/shared/service/etudiant/departement/SecteurActiviteEtudiant.service';
import {VilleDto} from 'src/app/shared/model/appartenance/Ville.model';
import {VilleEtudiantService} from 'src/app/shared/service/etudiant/appartenance/VilleEtudiant.service';
import {PaysDto} from 'src/app/shared/model/appartenance/Pays.model';
import {PaysEtudiantService} from 'src/app/shared/service/etudiant/appartenance/PaysEtudiant.service';
@Component({
  selector: 'app-societe-view-etudiant',
  templateUrl: './societe-view-etudiant.component.html'
})
export class SocieteViewEtudiantComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: SocieteEtudiantService, private secteurActiviteService: SecteurActiviteEtudiantService, private villeService: VilleEtudiantService, private paysService: PaysEtudiantService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get ville(): VilleDto {
        return this.villeService.item;
    }
    set ville(value: VilleDto) {
        this.villeService.item = value;
    }
    get villes(): Array<VilleDto> {
        return this.villeService.items;
    }
    set villes(value: Array<VilleDto>) {
        this.villeService.items = value;
    }
    get secteurActivite(): SecteurActiviteDto {
        return this.secteurActiviteService.item;
    }
    set secteurActivite(value: SecteurActiviteDto) {
        this.secteurActiviteService.item = value;
    }
    get secteurActivites(): Array<SecteurActiviteDto> {
        return this.secteurActiviteService.items;
    }
    set secteurActivites(value: Array<SecteurActiviteDto>) {
        this.secteurActiviteService.items = value;
    }
    get pays(): PaysDto {
        return this.paysService.item;
    }
    set pays(value: PaysDto) {
        this.paysService.item = value;
    }
    get payss(): Array<PaysDto> {
        return this.paysService.items;
    }
    set payss(value: Array<PaysDto>) {
        this.paysService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<SocieteDto> {
        return this.service.items;
    }

    set items(value: Array<SocieteDto>) {
        this.service.items = value;
    }

    get item(): SocieteDto {
        return this.service.item;
    }

    set item(value: SocieteDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): SocieteCriteria {
        return this.service.criteria;
    }

    set criteria(value: SocieteCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
