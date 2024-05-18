import {Component, OnInit} from '@angular/core';
import {StageEtudiantService} from 'src/app/shared/service/etudiant/stage/StageEtudiant.service';
import {StageDto} from 'src/app/shared/model/stage/Stage.model';
import {StageCriteria} from 'src/app/shared/criteria/stage/StageCriteria.model';


import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
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

import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {ExportService} from 'src/app/zynerator/util/Export.service';


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
  selector: 'app-stage-list-etudiant',
  templateUrl: './stage-list-etudiant.component.html'
})
export class StageListEtudiantComponent implements OnInit {

    protected fileName = 'Stage';

    protected findByCriteriaShow = false;
    protected cols: any[] = [];
    protected excelPdfButons: MenuItem[];
    protected exportData: any[] = [];
    protected criteriaData: any[] = [];
    protected _totalRecords = 0;
    private _pdfName: string;


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    protected authService: AuthService;
    protected exportService: ExportService;
    protected excelFile: File | undefined;
    protected enableSecurity = false;


    domaines: Array<DomaineDto>;
    societes: Array<SocieteDto>;
    jurys: Array<JuryDto>;
    filieres: Array<FiliereDto>;
    typeStages: Array<TypeStageDto>;


    constructor( private service: StageEtudiantService  , private societeService: SocieteEtudiantService, private stageAttachementService: StageAttachementEtudiantService, private etudiantService: EtudiantEtudiantService, private stageEncadrantExterneService: StageEncadrantExterneEtudiantService, private attachementService: AttachementEtudiantService, private encadrantInterneService: EncadrantInterneEtudiantService, private stageEtudiantService: StageEtudiantEtudiantService, private juryService: JuryEtudiantService, private filiereService: FiliereEtudiantService, private encadrantExterneService: EncadrantExterneEtudiantService, private stageEncadrantInterneService: StageEncadrantInterneEtudiantService, private typeStageService: TypeStageEtudiantService, private domaineService: DomaineEtudiantService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.authService = ServiceLocator.injector.get(AuthService);
        this.exportService = ServiceLocator.injector.get(ExportService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadDomaine();
        this.loadSociete();
        this.loadJury();
        this.loadFiliere();
        this.loadTypeStage();

    }




    public onExcelFileSelected(event: any): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.excelFile = input.files[0];
        }
    }

    public importExcel(): void {
        if (this.excelFile) {
            this.service.importExcel(this.excelFile).subscribe(
                response => {
                    console.log('File uploaded successfully!', response);
                },
                error => {
                    console.error('Error uploading file:', error);
                }
            );
        }
    }

    public findPaginatedByCriteria() {
        this.service.findPaginatedByCriteria(this.criteria).subscribe(paginatedItems => {
            this.items = paginatedItems.list;
            this.totalRecords = paginatedItems.dataSize;
            this.selections = new Array<StageDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: StageDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: StageDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new StageDto();
        this.createDialog = true;
    }

    public async deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ces éléments ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultiple().subscribe(() => {
                    this.items = this.items.filter(item => !this.selections.includes(item));
                    this.selections = new Array<StageDto>();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Les éléments sélectionnés ont été supprimés',
                        life: 3000
                    });

                }, error => console.log(error));
            }
        });
    }


    public isSelectionDisabled(): boolean {
        return this.selections == null || this.selections.length == 0;
    }


    public async delete(dto: StageDto) {

        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.delete(dto).subscribe(status => {
                    if (status > 0) {
                        const position = this.items.indexOf(dto);
                        position > -1 ? this.items.splice(position, 1) : false;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Element Supprimé',
                            life: 3000
                        });
                    }

                }, error => console.log(error));
            }
        });

    }

    public async duplicate(dto: StageDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(
            res => {
                this.initDuplicate(res);
                this.item = res;
                this.item.id = null;
                this.createDialog = true;
            });
    }

    // TODO : check if correct
    public initExport(): void {
        this.excelPdfButons = [
            {
                label: 'CSV', icon: 'pi pi-file', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'XLS', icon: 'pi pi-file-excel', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'PDF', icon: 'pi pi-file-pdf', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);
                }
            }
        ];
    }

    public exportPdf(dto: StageDto): void {
        this.service.exportPdf(dto).subscribe((data: ArrayBuffer) => {
            const blob = new Blob([data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = this.pdfName;
            link.setAttribute('target', '_blank'); // open link in new tab
            link.click();
            window.URL.revokeObjectURL(url);
        }, (error) => {
            console.error(error); // handle any errors that occur
        });
    }

    public showSearch(): void {
        this.findByCriteriaShow = !this.findByCriteriaShow;
    }


    update() {
        this.service.edit().subscribe(data => {
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = data;
            this.editDialog = false;
            this.item = new StageDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new StageDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }
        }, error => {
            console.log(error);
        });
    }

// add


    public initCol() {
        this.cols = [
            {field: 'sujet', header: 'Sujet'},
            {field: 'description', header: 'Description'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'domaine?.code', header: 'Domaine'},
            {field: 'lieu', header: 'Lieu'},
            {field: 'dureeSemaines', header: 'Duree semaines'},
            {field: 'societe?.ice', header: 'Societe'},
            {field: 'jury?.ref', header: 'Jury'},
            {field: 'filiere?.libelle', header: 'Filiere'},
            {field: 'note', header: 'Note'},
            {field: 'dateSoutenance', header: 'Date soutenance'},
            {field: 'typeStage?.libelle', header: 'Type stage'},
        ];
    }


    public async loadDomaine(){
        this.domaineService.findAllOptimized().subscribe(domaines => this.domaines = domaines, error => console.log(error))
    }
    public async loadSociete(){
        this.societeService.findAllOptimized().subscribe(societes => this.societes = societes, error => console.log(error))
    }
    public async loadJury(){
        this.juryService.findAllOptimized().subscribe(jurys => this.jurys = jurys, error => console.log(error))
    }
    public async loadFiliere(){
        this.filiereService.findAllOptimized().subscribe(filieres => this.filieres = filieres, error => console.log(error))
    }
    public async loadTypeStage(){
        this.typeStageService.findAllOptimized().subscribe(typeStages => this.typeStages = typeStages, error => console.log(error))
    }


	public initDuplicate(res: StageDto) {
        if (res.stageEtudiants != null) {
             res.stageEtudiants.forEach(d => { d.stage = null; d.id = null; });
        }
        if (res.stageEncadrantInternes != null) {
             res.stageEncadrantInternes.forEach(d => { d.stage = null; d.id = null; });
        }
        if (res.stageEncadrantExternes != null) {
             res.stageEncadrantExternes.forEach(d => { d.stage = null; d.id = null; });
        }
        if (res.stageAttachements != null) {
             res.stageAttachements.forEach(d => { d.stage = null; d.id = null; });
        }
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Sujet': e.sujet ,
                 'Description': e.description ,
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Domaine': e.domaine?.code ,
                 'Lieu': e.lieu ,
                 'Duree semaines': e.dureeSemaines ,
                'Societe': e.societe?.ice ,
                'Jury': e.jury?.ref ,
                'Filiere': e.filiere?.libelle ,
                 'Note': e.note ,
                'Date soutenance': this.datePipe.transform(e.dateSoutenance , 'dd/MM/yyyy hh:mm'),
                'Type stage': e.typeStage?.libelle ,
            }
        });

        this.criteriaData = [{
            'Sujet': this.criteria.sujet ? this.criteria.sujet : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
        //'Domaine': this.criteria.domaine?.code ? this.criteria.domaine?.code : environment.emptyForExport ,
            'Lieu': this.criteria.lieu ? this.criteria.lieu : environment.emptyForExport ,
            'Duree semaines Min': this.criteria.dureeSemainesMin ? this.criteria.dureeSemainesMin : environment.emptyForExport ,
            'Duree semaines Max': this.criteria.dureeSemainesMax ? this.criteria.dureeSemainesMax : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.ice ? this.criteria.societe?.ice : environment.emptyForExport ,
        //'Jury': this.criteria.jury?.ref ? this.criteria.jury?.ref : environment.emptyForExport ,
        //'Filiere': this.criteria.filiere?.libelle ? this.criteria.filiere?.libelle : environment.emptyForExport ,
            'Note Min': this.criteria.noteMin ? this.criteria.noteMin : environment.emptyForExport ,
            'Note Max': this.criteria.noteMax ? this.criteria.noteMax : environment.emptyForExport ,
            'Date soutenance Min': this.criteria.dateSoutenanceFrom ? this.datePipe.transform(this.criteria.dateSoutenanceFrom , this.dateFormat) : environment.emptyForExport ,
            'Date soutenance Max': this.criteria.dateSoutenanceTo ? this.datePipe.transform(this.criteria.dateSoutenanceTo , this.dateFormat) : environment.emptyForExport ,
        //'Type stage': this.criteria.typeStage?.libelle ? this.criteria.typeStage?.libelle : environment.emptyForExport ,
        }];
      }



    get items(): Array<StageDto> {
        return this.service.items;
    }

    set items(value: Array<StageDto>) {
        this.service.items = value;
    }

    get selections(): Array<StageDto> {
        return this.service.selections;
    }

    set selections(value: Array<StageDto>) {
        this.service.selections = value;
    }

    get item(): StageDto {
        return this.service.item;
    }

    set item(value: StageDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
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

    get dateFormat() {
        return environment.dateFormatList;
    }


    get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(value: number) {
        this._totalRecords = value;
    }

    get pdfName(): string {
        return this._pdfName;
    }

    set pdfName(value: string) {
        this._pdfName = value;
    }

    get createActionIsValid(): boolean {
        return this.service.createActionIsValid;
    }

    set createActionIsValid(value: boolean) {
        this.service.createActionIsValid = value;
    }


    get editActionIsValid(): boolean {
        return this.service.editActionIsValid;
    }

    set editActionIsValid(value: boolean) {
        this.service.editActionIsValid = value;
    }

    get listActionIsValid(): boolean {
        return this.service.listActionIsValid;
    }

    set listActionIsValid(value: boolean) {
        this.service.listActionIsValid = value;
    }

    get deleteActionIsValid(): boolean {
        return this.service.deleteActionIsValid;
    }

    set deleteActionIsValid(value: boolean) {
        this.service.deleteActionIsValid = value;
    }


    get viewActionIsValid(): boolean {
        return this.service.viewActionIsValid;
    }

    set viewActionIsValid(value: boolean) {
        this.service.viewActionIsValid = value;
    }

    get duplicateActionIsValid(): boolean {
        return this.service.duplicateActionIsValid;
    }

    set duplicateActionIsValid(value: boolean) {
        this.service.duplicateActionIsValid = value;
    }

    get createAction(): string {
        return this.service.createAction;
    }

    set createAction(value: string) {
        this.service.createAction = value;
    }

    get listAction(): string {
        return this.service.listAction;
    }

    set listAction(value: string) {
        this.service.listAction = value;
    }

    get editAction(): string {
        return this.service.editAction;
    }

    set editAction(value: string) {
        this.service.editAction = value;
    }

    get deleteAction(): string {
        return this.service.deleteAction;
    }

    set deleteAction(value: string) {
        this.service.deleteAction = value;
    }

    get viewAction(): string {
        return this.service.viewAction;
    }

    set viewAction(value: string) {
        this.service.viewAction = value;
    }

    get duplicateAction(): string {
        return this.service.duplicateAction;
    }

    set duplicateAction(value: string) {
        this.service.duplicateAction = value;
    }

    get entityName(): string {
        return this.service.entityName;
    }

    set entityName(value: string) {
        this.service.entityName = value;
    }
}
