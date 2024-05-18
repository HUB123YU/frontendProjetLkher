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


import {EtudiantEtudiantService} from 'src/app/shared/service/etudiant/etudiant/EtudiantEtudiant.service';
import {EtudiantDto} from 'src/app/shared/model/etudiant/Etudiant.model';
import {EtudiantCriteria} from 'src/app/shared/criteria/etudiant/EtudiantCriteria.model';

import {FiliereDto} from 'src/app/shared/model/departement/Filiere.model';
import {FiliereEtudiantService} from 'src/app/shared/service/etudiant/departement/FiliereEtudiant.service';
import {NationaliteDto} from 'src/app/shared/model/appartenance/Nationalite.model';
import {NationaliteEtudiantService} from 'src/app/shared/service/etudiant/appartenance/NationaliteEtudiant.service';
import {GenreDto} from 'src/app/shared/model/appartenance/Genre.model';
import {GenreEtudiantService} from 'src/app/shared/service/etudiant/appartenance/GenreEtudiant.service';
@Component({
  selector: 'app-etudiant-view-etudiant',
  templateUrl: './etudiant-view-etudiant.component.html'
})
export class EtudiantViewEtudiantComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: EtudiantEtudiantService, private filiereService: FiliereEtudiantService, private nationaliteService: NationaliteEtudiantService, private genreService: GenreEtudiantService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get nationalite(): NationaliteDto {
        return this.nationaliteService.item;
    }
    set nationalite(value: NationaliteDto) {
        this.nationaliteService.item = value;
    }
    get nationalites(): Array<NationaliteDto> {
        return this.nationaliteService.items;
    }
    set nationalites(value: Array<NationaliteDto>) {
        this.nationaliteService.items = value;
    }
    get filiere(): FiliereDto {
        return this.filiereService.item;
    }
    set filiere(value: FiliereDto) {
        this.filiereService.item = value;
    }
    get filieres(): Array<FiliereDto> {
        return this.filiereService.items;
    }
    set filieres(value: Array<FiliereDto>) {
        this.filiereService.items = value;
    }
    get genre(): GenreDto {
        return this.genreService.item;
    }
    set genre(value: GenreDto) {
        this.genreService.item = value;
    }
    get genres(): Array<GenreDto> {
        return this.genreService.items;
    }
    set genres(value: Array<GenreDto>) {
        this.genreService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<EtudiantDto> {
        return this.service.items;
    }

    set items(value: Array<EtudiantDto>) {
        this.service.items = value;
    }

    get item(): EtudiantDto {
        return this.service.item;
    }

    set item(value: EtudiantDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): EtudiantCriteria {
        return this.service.criteria;
    }

    set criteria(value: EtudiantCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
