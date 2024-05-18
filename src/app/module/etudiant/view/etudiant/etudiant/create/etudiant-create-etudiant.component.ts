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
  selector: 'app-etudiant-create-etudiant',
  templateUrl: './etudiant-create-etudiant.component.html'
})
export class EtudiantCreateEtudiantComponent  implements OnInit {

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



    private _validGenreLibelle = true;
    private _validGenreCode = true;
    private _validNationaliteLibelle = true;
    private _validNationaliteCode = true;
    private _validFiliereCode = true;
    private _validFiliereLibelle = true;

	constructor(private service: EtudiantEtudiantService , private filiereService: FiliereEtudiantService, private nationaliteService: NationaliteEtudiantService, private genreService: GenreEtudiantService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.genreService.findAll().subscribe((data) => this.genres = data);
        this.nationaliteService.findAll().subscribe((data) => this.nationalites = data);
        this.filiereService.findAll().subscribe((data) => this.filieres = data);
    }


    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new EtudiantDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
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
    get createNationaliteDialog(): boolean {
        return this.nationaliteService.createDialog;
    }
    set createNationaliteDialog(value: boolean) {
        this.nationaliteService.createDialog= value;
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
    get createGenreDialog(): boolean {
        return this.genreService.createDialog;
    }
    set createGenreDialog(value: boolean) {
        this.genreService.createDialog= value;
    }




    get validGenreLibelle(): boolean {
        return this._validGenreLibelle;
    }
    set validGenreLibelle(value: boolean) {
        this._validGenreLibelle = value;
    }
    get validGenreCode(): boolean {
        return this._validGenreCode;
    }
    set validGenreCode(value: boolean) {
        this._validGenreCode = value;
    }
    get validNationaliteLibelle(): boolean {
        return this._validNationaliteLibelle;
    }
    set validNationaliteLibelle(value: boolean) {
        this._validNationaliteLibelle = value;
    }
    get validNationaliteCode(): boolean {
        return this._validNationaliteCode;
    }
    set validNationaliteCode(value: boolean) {
        this._validNationaliteCode = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): EtudiantCriteria {
        return this.service.criteria;
    }

    set criteria(value: EtudiantCriteria) {
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
