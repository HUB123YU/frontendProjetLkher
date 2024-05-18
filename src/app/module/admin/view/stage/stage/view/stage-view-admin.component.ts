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


import {StageAdminService} from 'src/app/shared/service/admin/stage/StageAdmin.service';
import {StageDto} from 'src/app/shared/model/stage/Stage.model';
import {StageCriteria} from 'src/app/shared/criteria/stage/StageCriteria.model';

import {SocieteDto} from 'src/app/shared/model/societe/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/societe/SocieteAdmin.service';
import {StageAttachementDto} from 'src/app/shared/model/stage/StageAttachement.model';
import {StageAttachementAdminService} from 'src/app/shared/service/admin/stage/StageAttachementAdmin.service';
import {EtudiantDto} from 'src/app/shared/model/etudiant/Etudiant.model';
import {EtudiantAdminService} from 'src/app/shared/service/admin/etudiant/EtudiantAdmin.service';
import {StageEncadrantExterneDto} from 'src/app/shared/model/stage/StageEncadrantExterne.model';
import {StageEncadrantExterneAdminService} from 'src/app/shared/service/admin/stage/StageEncadrantExterneAdmin.service';
import {AttachementDto} from 'src/app/shared/model/piecejointe/Attachement.model';
import {AttachementAdminService} from 'src/app/shared/service/admin/piecejointe/AttachementAdmin.service';
import {EncadrantInterneDto} from 'src/app/shared/model/encadrant/EncadrantInterne.model';
import {EncadrantInterneAdminService} from 'src/app/shared/service/admin/encadrant/EncadrantInterneAdmin.service';
import {StageEtudiantDto} from 'src/app/shared/model/stage/StageEtudiant.model';
import {StageEtudiantAdminService} from 'src/app/shared/service/admin/stage/StageEtudiantAdmin.service';
import {JuryDto} from 'src/app/shared/model/jury/Jury.model';
import {JuryAdminService} from 'src/app/shared/service/admin/jury/JuryAdmin.service';
import {FiliereDto} from 'src/app/shared/model/departement/Filiere.model';
import {FiliereAdminService} from 'src/app/shared/service/admin/departement/FiliereAdmin.service';
import {EncadrantExterneDto} from 'src/app/shared/model/encadrant/EncadrantExterne.model';
import {EncadrantExterneAdminService} from 'src/app/shared/service/admin/encadrant/EncadrantExterneAdmin.service';
import {StageEncadrantInterneDto} from 'src/app/shared/model/stage/StageEncadrantInterne.model';
import {StageEncadrantInterneAdminService} from 'src/app/shared/service/admin/stage/StageEncadrantInterneAdmin.service';
import {TypeStageDto} from 'src/app/shared/model/stage/TypeStage.model';
import {TypeStageAdminService} from 'src/app/shared/service/admin/stage/TypeStageAdmin.service';
import {DomaineDto} from 'src/app/shared/model/departement/Domaine.model';
import {DomaineAdminService} from 'src/app/shared/service/admin/departement/DomaineAdmin.service';
@Component({
  selector: 'app-stage-view-admin',
  templateUrl: './stage-view-admin.component.html'
})
export class StageViewAdminComponent implements OnInit {


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

    constructor(private service: StageAdminService, private societeService: SocieteAdminService, private stageAttachementService: StageAttachementAdminService, private etudiantService: EtudiantAdminService, private stageEncadrantExterneService: StageEncadrantExterneAdminService, private attachementService: AttachementAdminService, private encadrantInterneService: EncadrantInterneAdminService, private stageEtudiantService: StageEtudiantAdminService, private juryService: JuryAdminService, private filiereService: FiliereAdminService, private encadrantExterneService: EncadrantExterneAdminService, private stageEncadrantInterneService: StageEncadrantInterneAdminService, private typeStageService: TypeStageAdminService, private domaineService: DomaineAdminService){
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
