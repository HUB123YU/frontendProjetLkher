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
  selector: 'app-stage-edit-etudiant',
  templateUrl: './stage-edit-etudiant.component.html'
})
export class StageEditEtudiantComponent implements OnInit {

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


    private _stageEtudiantsElement = new StageEtudiantDto();
    private _stageEncadrantInternesElement = new StageEncadrantInterneDto();
    private _stageEncadrantExternesElement = new StageEncadrantExterneDto();
    private _stageAttachementsElement = new StageAttachementDto();


    private _validDomaineLibelle = true;
    private _validDomaineCode = true;
    private _validSocieteIce = true;
    private _validJuryRef = true;
    private _validFiliereCode = true;
    private _validFiliereLibelle = true;
    private _validTypeStageReference = true;
    private _validTypeStageLibelle = true;


    private _stageEtudiants: Array<StageEtudiantDto> = [];
    private _stageEncadrantInternes: Array<StageEncadrantInterneDto> = [];
    private _stageEncadrantExternes: Array<StageEncadrantExterneDto> = [];

    constructor(private service: StageEtudiantService , private societeService: SocieteEtudiantService, private stageAttachementService: StageAttachementEtudiantService, private etudiantService: EtudiantEtudiantService, private stageEncadrantExterneService: StageEncadrantExterneEtudiantService, private attachementService: AttachementEtudiantService, private encadrantInterneService: EncadrantInterneEtudiantService, private stageEtudiantService: StageEtudiantEtudiantService, private juryService: JuryEtudiantService, private filiereService: FiliereEtudiantService, private encadrantExterneService: EncadrantExterneEtudiantService, private stageEncadrantInterneService: StageEncadrantInterneEtudiantService, private typeStageService: TypeStageEtudiantService, private domaineService: DomaineEtudiantService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.etudiantService.findAll().subscribe(data => this.prepareStageEtudiants(data));
        this.stageEtudiantsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);

        this.encadrantInterneService.findAll().subscribe(data => this.prepareStageEncadrantInternes(data));
        this.stageEncadrantInternesElement.encadrantInterne = new EncadrantInterneDto();
        this.encadrantInterneService.findAll().subscribe((data) => this.encadrantInternes = data);

        this.encadrantExterneService.findAll().subscribe(data => this.prepareStageEncadrantExternes(data));
        this.stageEncadrantExternesElement.encadrantExterne = new EncadrantExterneDto();
        this.encadrantExterneService.findAll().subscribe((data) => this.encadrantExternes = data);

        this.stageAttachementsElement.attachement = new AttachementDto();
        this.attachementService.findAll().subscribe((data) => this.attachements = data);

        this.domaineService.findAll().subscribe((data) => this.domaines = data);
        this.societeService.findAll().subscribe((data) => this.societes = data);
        this.juryService.findAll().subscribe((data) => this.jurys = data);
        this.filiereService.findAll().subscribe((data) => this.filieres = data);
        this.typeStageService.findAll().subscribe((data) => this.typeStages = data);
    }

    public prepareEdit() {
        this.item.dateDebut = this.service.format(this.item.dateDebut);
        this.item.dateFin = this.service.format(this.item.dateFin);
        this.item.dateSoutenance = this.service.format(this.item.dateSoutenance);
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
            this.item = new StageDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }




    prepareStageEtudiants(etudiants: Array<EtudiantDto>): void{
        if( etudiants != null){
            etudiants.forEach(e => {
                const stageEtudiant = new StageEtudiantDto();
                stageEtudiant.etudiant = e;
                this.stageEtudiants.push(stageEtudiant);
            });
        }
    }
    prepareStageEncadrantInternes(encadrantInternes: Array<EncadrantInterneDto>): void{
        if( encadrantInternes != null){
            encadrantInternes.forEach(e => {
                const stageEncadrantInterne = new StageEncadrantInterneDto();
                stageEncadrantInterne.encadrantInterne = e;
                this.stageEncadrantInternes.push(stageEncadrantInterne);
            });
        }
    }
    prepareStageEncadrantExternes(encadrantExternes: Array<EncadrantExterneDto>): void{
        if( encadrantExternes != null){
            encadrantExternes.forEach(e => {
                const stageEncadrantExterne = new StageEncadrantExterneDto();
                stageEncadrantExterne.encadrantExterne = e;
                this.stageEncadrantExternes.push(stageEncadrantExterne);
            });
        }
    }

    public validateStageAttachements(){
        this.errorMessages = new Array();
    }

    public setValidation(value: boolean){
    }

   public addStageAttachements() {
        if( this.item.stageAttachements == null )
            this.item.stageAttachements = new Array<StageAttachementDto>();
       this.validateStageAttachements();
       if (this.errorMessages.length === 0) {
            if(this.stageAttachementsElement.id == null){
                this.item.stageAttachements.push(this.stageAttachementsElement);
            }else{
                const index = this.item.stageAttachements.findIndex(e => e.id == this.stageAttachementsElement.id);
                this.item.stageAttachements[index] = this.stageAttachementsElement;
            }
          this.stageAttachementsElement = new StageAttachementDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteStageAttachements(p: StageAttachementDto) {
        this.item.stageAttachements.forEach((element, index) => {
            if (element === p) { this.item.stageAttachements.splice(index, 1); }
        });
    }

    public editStageAttachements(p: StageAttachementDto) {
        this.stageAttachementsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   public async openCreateTypeStage(typeStage: string) {
        const isPermistted = await this.roleService.isPermitted('TypeStage', 'edit');
        if (isPermistted) {
             this.typeStage = new TypeStageDto();
             this.createTypeStageDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
    get createJuryDialog(): boolean {
        return this.juryService.createDialog;
    }
    set createJuryDialog(value: boolean) {
        this.juryService.createDialog= value;
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
    get createDomaineDialog(): boolean {
        return this.domaineService.createDialog;
    }
    set createDomaineDialog(value: boolean) {
        this.domaineService.createDialog= value;
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
    get createEncadrantInterneDialog(): boolean {
        return this.encadrantInterneService.createDialog;
    }
    set createEncadrantInterneDialog(value: boolean) {
        this.encadrantInterneService.createDialog= value;
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
    get createEncadrantExterneDialog(): boolean {
        return this.encadrantExterneService.createDialog;
    }
    set createEncadrantExterneDialog(value: boolean) {
        this.encadrantExterneService.createDialog= value;
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
    get createSocieteDialog(): boolean {
        return this.societeService.createDialog;
    }
    set createSocieteDialog(value: boolean) {
        this.societeService.createDialog= value;
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
    get createEtudiantDialog(): boolean {
        return this.etudiantService.createDialog;
    }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createDialog= value;
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
    get createTypeStageDialog(): boolean {
        return this.typeStageService.createDialog;
    }
    set createTypeStageDialog(value: boolean) {
        this.typeStageService.createDialog= value;
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
    get createFiliereDialog(): boolean {
        return this.filiereService.createDialog;
    }
    set createFiliereDialog(value: boolean) {
        this.filiereService.createDialog= value;
    }

    get stageEtudiants(): Array<StageEtudiantDto> {
        if( this._stageEtudiants == null )
            this._stageEtudiants = new Array();
         return this._stageEtudiants;
    }

    set stageEtudiants(value: Array<StageEtudiantDto>) {
        this._stageEtudiants = value;
    }
    get stageEncadrantInternes(): Array<StageEncadrantInterneDto> {
        if( this._stageEncadrantInternes == null )
            this._stageEncadrantInternes = new Array();
         return this._stageEncadrantInternes;
    }

    set stageEncadrantInternes(value: Array<StageEncadrantInterneDto>) {
        this._stageEncadrantInternes = value;
    }
    get stageEncadrantExternes(): Array<StageEncadrantExterneDto> {
        if( this._stageEncadrantExternes == null )
            this._stageEncadrantExternes = new Array();
         return this._stageEncadrantExternes;
    }

    set stageEncadrantExternes(value: Array<StageEncadrantExterneDto>) {
        this._stageEncadrantExternes = value;
    }
    get stageEtudiantsElement(): StageEtudiantDto {
        if( this._stageEtudiantsElement == null )
            this._stageEtudiantsElement = new StageEtudiantDto();
         return this._stageEtudiantsElement;
    }

    set stageEtudiantsElement(value: StageEtudiantDto) {
        this._stageEtudiantsElement = value;
    }
    get stageEncadrantInternesElement(): StageEncadrantInterneDto {
        if( this._stageEncadrantInternesElement == null )
            this._stageEncadrantInternesElement = new StageEncadrantInterneDto();
         return this._stageEncadrantInternesElement;
    }

    set stageEncadrantInternesElement(value: StageEncadrantInterneDto) {
        this._stageEncadrantInternesElement = value;
    }
    get stageEncadrantExternesElement(): StageEncadrantExterneDto {
        if( this._stageEncadrantExternesElement == null )
            this._stageEncadrantExternesElement = new StageEncadrantExterneDto();
         return this._stageEncadrantExternesElement;
    }

    set stageEncadrantExternesElement(value: StageEncadrantExterneDto) {
        this._stageEncadrantExternesElement = value;
    }
    get stageAttachementsElement(): StageAttachementDto {
        if( this._stageAttachementsElement == null )
            this._stageAttachementsElement = new StageAttachementDto();
         return this._stageAttachementsElement;
    }

    set stageAttachementsElement(value: StageAttachementDto) {
        this._stageAttachementsElement = value;
    }


    get validDomaineLibelle(): boolean {
        return this._validDomaineLibelle;
    }
    set validDomaineLibelle(value: boolean) {
        this._validDomaineLibelle = value;
    }
    get validDomaineCode(): boolean {
        return this._validDomaineCode;
    }
    set validDomaineCode(value: boolean) {
        this._validDomaineCode = value;
    }
    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }
    set validSocieteIce(value: boolean) {
        this._validSocieteIce = value;
    }
    get validJuryRef(): boolean {
        return this._validJuryRef;
    }
    set validJuryRef(value: boolean) {
        this._validJuryRef = value;
    }
    get validFiliereCode(): boolean {
        return this._validFiliereCode;
    }
    set validFiliereCode(value: boolean) {
        this._validFiliereCode = value;
    }
    get validFiliereLibelle(): boolean {
        return this._validFiliereLibelle;
    }
    set validFiliereLibelle(value: boolean) {
        this._validFiliereLibelle = value;
    }
    get validTypeStageReference(): boolean {
        return this._validTypeStageReference;
    }
    set validTypeStageReference(value: boolean) {
        this._validTypeStageReference = value;
    }
    get validTypeStageLibelle(): boolean {
        return this._validTypeStageLibelle;
    }
    set validTypeStageLibelle(value: boolean) {
        this._validTypeStageLibelle = value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): StageCriteria {
        return this.service.criteria;
    }

    set criteria(value: StageCriteria) {
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
