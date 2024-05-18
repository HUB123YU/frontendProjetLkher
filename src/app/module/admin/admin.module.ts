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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
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

import { JuryAdminModule } from './view/jury/jury-admin.module';
import { JuryAdminRoutingModule } from './view/jury/jury-admin-routing.module';
import { AppartenanceAdminModule } from './view/appartenance/appartenance-admin.module';
import { AppartenanceAdminRoutingModule } from './view/appartenance/appartenance-admin-routing.module';
import { DepartementAdminModule } from './view/departement/departement-admin.module';
import { DepartementAdminRoutingModule } from './view/departement/departement-admin-routing.module';
import { StageAdminModule } from './view/stage/stage-admin.module';
import { StageAdminRoutingModule } from './view/stage/stage-admin-routing.module';
import { EncadrantAdminModule } from './view/encadrant/encadrant-admin.module';
import { EncadrantAdminRoutingModule } from './view/encadrant/encadrant-admin-routing.module';
import { SocieteAdminModule } from './view/societe/societe-admin.module';
import { SocieteAdminRoutingModule } from './view/societe/societe-admin-routing.module';
import { EtudiantAdminModule } from './view/etudiant/etudiant-admin.module';
import { EtudiantAdminRoutingModule } from './view/etudiant/etudiant-admin-routing.module';
import { PiecejointeAdminModule } from './view/piecejointe/piecejointe-admin.module';
import { PiecejointeAdminRoutingModule } from './view/piecejointe/piecejointe-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
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
  JuryAdminModule,
  JuryAdminRoutingModule,
  AppartenanceAdminModule,
  AppartenanceAdminRoutingModule,
  DepartementAdminModule,
  DepartementAdminRoutingModule,
  StageAdminModule,
  StageAdminRoutingModule,
  EncadrantAdminModule,
  EncadrantAdminRoutingModule,
  SocieteAdminModule,
  SocieteAdminRoutingModule,
  EtudiantAdminModule,
  EtudiantAdminRoutingModule,
  PiecejointeAdminModule,
  PiecejointeAdminRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    JuryAdminModule,
    AppartenanceAdminModule,
    DepartementAdminModule,
    StageAdminModule,
    EncadrantAdminModule,
    SocieteAdminModule,
    EtudiantAdminModule,
    PiecejointeAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
