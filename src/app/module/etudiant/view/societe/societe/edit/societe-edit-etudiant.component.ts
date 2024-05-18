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
  selector: 'app-societe-edit-etudiant',
  templateUrl: './societe-edit-etudiant.component.html'
})
export class SocieteEditEtudiantComponent implements OnInit {

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



    private _validSocieteIce = true;

    private _validVilleReference = true;
    private _validVilleLibelle = true;
    private _validSecteurActiviteReference = true;
    private _validSecteurActiviteLibelle = true;
    private _validPaysReference = true;
    private _validPaysLibelle = true;



    constructor(private service: SocieteEtudiantService , private secteurActiviteService: SecteurActiviteEtudiantService, private villeService: VilleEtudiantService, private paysService: PaysEtudiantService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.villeService.findAll().subscribe((data) => this.villes = data);
        this.secteurActiviteService.findAll().subscribe((data) => this.secteurActivites = data);
        this.paysService.findAll().subscribe((data) => this.payss = data);
    }

    public prepareEdit() {
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
            this.item = new SocieteDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validSocieteIce = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSocieteIce();
    }

    public validateSocieteIce(){
        if (this.stringUtilService.isEmpty(this.item.ice)) {
            this.errorMessages.push('Ice non valide');
            this.validSocieteIce = false;
        } else {
            this.validSocieteIce = true;
        }
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
    get createVilleDialog(): boolean {
        return this.villeService.createDialog;
    }
    set createVilleDialog(value: boolean) {
        this.villeService.createDialog= value;
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
    get createSecteurActiviteDialog(): boolean {
        return this.secteurActiviteService.createDialog;
    }
    set createSecteurActiviteDialog(value: boolean) {
        this.secteurActiviteService.createDialog= value;
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
    get createPaysDialog(): boolean {
        return this.paysService.createDialog;
    }
    set createPaysDialog(value: boolean) {
        this.paysService.createDialog= value;
    }


    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }
    set validSocieteIce(value: boolean) {
        this._validSocieteIce = value;
    }

    get validVilleReference(): boolean {
        return this._validVilleReference;
    }
    set validVilleReference(value: boolean) {
        this._validVilleReference = value;
    }
    get validVilleLibelle(): boolean {
        return this._validVilleLibelle;
    }
    set validVilleLibelle(value: boolean) {
        this._validVilleLibelle = value;
    }
    get validSecteurActiviteReference(): boolean {
        return this._validSecteurActiviteReference;
    }
    set validSecteurActiviteReference(value: boolean) {
        this._validSecteurActiviteReference = value;
    }
    get validSecteurActiviteLibelle(): boolean {
        return this._validSecteurActiviteLibelle;
    }
    set validSecteurActiviteLibelle(value: boolean) {
        this._validSecteurActiviteLibelle = value;
    }
    get validPaysReference(): boolean {
        return this._validPaysReference;
    }
    set validPaysReference(value: boolean) {
        this._validPaysReference = value;
    }
    get validPaysLibelle(): boolean {
        return this._validPaysLibelle;
    }
    set validPaysLibelle(value: boolean) {
        this._validPaysLibelle = value;
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

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): SocieteCriteria {
        return this.service.criteria;
    }

    set criteria(value: SocieteCriteria) {
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
