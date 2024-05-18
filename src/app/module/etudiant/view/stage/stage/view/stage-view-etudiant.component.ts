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


import {StageEtudiantService} from 'src/app/shared/service/etudiant/stage/StageEtudiant.service';
import {StageDto} from 'src/app/shared/model/stage/Stage.model';
import {StageCriteria} from 'src/app/shared/criteria/stage/StageCriteria.model';

import {SocieteDto} from 'src/app/shared/model/societe/Societe.model';
import {SocieteEtudiantService} from 'src/app/shared/service/etudiant/societe/SocieteEtudiant.service';
import {StageAttachementDto} from 'src/app/shared/model/stage/StageAttachement.model';
import {StageAttachementEtudiantService} from 'src/app/shared/service/etudiant/stage/StageAttachementEtudiant.service';
import {EtudiantDto} from 'src/app/shared/model/etudiant/Etudiant.model';
import {EtudiantEtudiantService} from 'src/app/shared/service/etudiant/etudiant/EtudiantEtudiant.service';
import {StageEncadrantExterneDto} from 'src/app/shared/model/stage/StageEncadrantExterne.model';
import {StageEncadrantExterneEtudiantService} from 'src/app/shared/service/etudiant/stage/StageEncadrantExterneEtudiant.service';
import {AttachementDto} from 'src/app/shared/model/piecejointe/Attachement.model';
import {AttachementEtudiantService} from 'src/app/shared/service/etudiant/piecejointe/AttachementEtudiant.service';
import {EncadrantInterneDto} from 'src/app/shared/model/encadrant/EncadrantInterne.model';
import {EncadrantInterneEtudiantService} from 'src/app/shared/service/etudiant/encadrant/EncadrantInterneEtudiant.service';
import {StageEtudiantDto} from 'src/app/shared/model/stage/StageEtudiant.model';
import {StageEtudiantEtudiantService} from 'src/app/shared/service/etudiant/stage/StageEtudiantEtudiant.service';
import {JuryDto} from 'src/app/shared/model/jury/Jury.model';
import {JuryEtudiantService} from 'src/app/shared/service/etudiant/jury/JuryEtudiant.service';
import {FiliereDto} from 'src/app/shared/model/departement/Filiere.model';
import {FiliereEtudiantService} from 'src/app/shared/service/etudiant/departement/FiliereEtudiant.service';
import {EncadrantExterneDto} from 'src/app/shared/model/encadrant/EncadrantExterne.model';
import {EncadrantExterneEtudiantService} from 'src/app/shared/service/etudiant/encadrant/EncadrantExterneEtudiant.service';
import {StageEncadrantInterneDto} from 'src/app/shared/model/stage/StageEncadrantInterne.model';
import {StageEncadrantInterneEtudiantService} from 'src/app/shared/service/etudiant/stage/StageEncadrantInterneEtudiant.service';
import {TypeStageDto} from 'src/app/shared/model/stage/TypeStage.model';
import {TypeStageEtudiantService} from 'src/app/shared/service/etudiant/stage/TypeStageEtudiant.service';
import {DomaineDto} from 'src/app/shared/model/departement/Domaine.model';
import {DomaineEtudiantService} from 'src/app/shared/service/etudiant/departement/DomaineEtudiant.service';
@Component({
  selector: 'app-stage-view-etudiant',
  templateUrl: './stage-view-etudiant.component.html'
})
export class StageViewEtudiantComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    stageEtudiants = new StageEtudiantDto();
    stageEtudiantss: Array<StageEtudiantDto> = [];
    stageEncadrantInternes = new StageEncadrantInterneDto();
    stageEncadrantInterness: Array<StageEncadrantInterneDto> = [];
    stageEncadrantExternes = new StageEncadrantExterneDto();
    stageEncadrantExterness: Array<StageEncadrantExterneDto> = [];
    stageAttachements = new StageAttachementDto();
    stageAttachementss: Array<StageAttachementDto> = [];

    constructor(private service: StageEtudiantService, private societeService: SocieteEtudiantService, private stageAttachementService: StageAttachementEtudiantService, private etudiantService: EtudiantEtudiantService, private stageEncadrantExterneService: StageEncadrantExterneEtudiantService, private attachementService: AttachementEtudiantService, private encadrantInterneService: EncadrantInterneEtudiantService, private stageEtudiantService: StageEtudiantEtudiantService, private juryService: JuryEtudiantService, private filiereService: FiliereEtudiantService, private encadrantExterneService: EncadrantExterneEtudiantService, private stageEncadrantInterneService: StageEncadrantInterneEtudiantService, private typeStageService: TypeStageEtudiantService, private domaineService: DomaineEtudiantService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get jury(): JuryDto {
        return this.juryService.item;
    }
    set jury(value: JuryDto) {
        this.juryService.item = value;
    }
    get jurys(): Array<JuryDto> {
        return this.juryService.items;
    }
    set jurys(value: Array<JuryDto>) {
        this.juryService.items = value;
    }
    get domaine(): DomaineDto {
        return this.domaineService.item;
    }
    set domaine(value: DomaineDto) {
        this.domaineService.item = value;
    }
    get domaines(): Array<DomaineDto> {
        return this.domaineService.items;
    }
    set domaines(value: Array<DomaineDto>) {
        this.domaineService.items = value;
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
    get encadrantExterne(): EncadrantExterneDto {
        return this.encadrantExterneService.item;
    }
    set encadrantExterne(value: EncadrantExterneDto) {
        this.encadrantExterneService.item = value;
    }
    get encadrantExternes(): Array<EncadrantExterneDto> {
        return this.encadrantExterneService.items;
    }
    set encadrantExternes(value: Array<EncadrantExterneDto>) {
        this.encadrantExterneService.items = value;
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
    get etudiant(): EtudiantDto {
        return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }
    get typeStage(): TypeStageDto {
        return this.typeStageService.item;
    }
    set typeStage(value: TypeStageDto) {
        this.typeStageService.item = value;
    }
    get typeStages(): Array<TypeStageDto> {
        return this.typeStageService.items;
    }
    set typeStages(value: Array<TypeStageDto>) {
        this.typeStageService.items = value;
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

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<StageDto> {
        return this.service.items;
    }

    set items(value: Array<StageDto>) {
        this.service.items = value;
    }

    get item(): StageDto {
        return this.service.item;
    }

    set item(value: StageDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): StageCriteria {
        return this.service.criteria;
    }

    set criteria(value: StageCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
