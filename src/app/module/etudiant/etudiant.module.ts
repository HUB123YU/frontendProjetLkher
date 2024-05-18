import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { JuryEtudiantModule } from './view/jury/jury-etudiant.module';
import { JuryEtudiantRoutingModule } from './view/jury/jury-etudiant-routing.module';
import { AppartenanceEtudiantModule } from './view/appartenance/appartenance-etudiant.module';
import { AppartenanceEtudiantRoutingModule } from './view/appartenance/appartenance-etudiant-routing.module';
import { DepartementEtudiantModule } from './view/departement/departement-etudiant.module';
import { DepartementEtudiantRoutingModule } from './view/departement/departement-etudiant-routing.module';
import { StageEtudiantModule } from './view/stage/stage-etudiant.module';
import { StageEtudiantRoutingModule } from './view/stage/stage-etudiant-routing.module';
import { EncadrantEtudiantModule } from './view/encadrant/encadrant-etudiant.module';
import { EncadrantEtudiantRoutingModule } from './view/encadrant/encadrant-etudiant-routing.module';
import { SocieteEtudiantModule } from './view/societe/societe-etudiant.module';
import { SocieteEtudiantRoutingModule } from './view/societe/societe-etudiant-routing.module';
import { EtudiantEtudiantModule } from './view/etudiant/etudiant-etudiant.module';
import { EtudiantEtudiantRoutingModule } from './view/etudiant/etudiant-etudiant-routing.module';
import { PiecejointeEtudiantModule } from './view/piecejointe/piecejointe-etudiant.module';
import { PiecejointeEtudiantRoutingModule } from './view/piecejointe/piecejointe-etudiant-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginEtudiantComponent,
   RegisterEtudiantComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  JuryEtudiantModule,
  JuryEtudiantRoutingModule,
  AppartenanceEtudiantModule,
  AppartenanceEtudiantRoutingModule,
  DepartementEtudiantModule,
  DepartementEtudiantRoutingModule,
  StageEtudiantModule,
  StageEtudiantRoutingModule,
  EncadrantEtudiantModule,
  EncadrantEtudiantRoutingModule,
  SocieteEtudiantModule,
  SocieteEtudiantRoutingModule,
  EtudiantEtudiantModule,
  EtudiantEtudiantRoutingModule,
  PiecejointeEtudiantModule,
  PiecejointeEtudiantRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginEtudiantComponent,
  RegisterEtudiantComponent,

    JuryEtudiantModule,
    AppartenanceEtudiantModule,
    DepartementEtudiantModule,
    StageEtudiantModule,
    EncadrantEtudiantModule,
    SocieteEtudiantModule,
    EtudiantEtudiantModule,
    PiecejointeEtudiantModule,
  SecurityModule
  ],

})
export class EtudiantModule { }
