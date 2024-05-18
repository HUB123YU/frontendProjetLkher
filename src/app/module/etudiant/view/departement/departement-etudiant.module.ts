import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { DepartementCreateEtudiantComponent } from './departement/create/departement-create-etudiant.component';
import { DepartementEditEtudiantComponent } from './departement/edit/departement-edit-etudiant.component';
import { DepartementViewEtudiantComponent } from './departement/view/departement-view-etudiant.component';
import { DepartementListEtudiantComponent } from './departement/list/departement-list-etudiant.component';
import { DomaineCreateEtudiantComponent } from './domaine/create/domaine-create-etudiant.component';
import { DomaineEditEtudiantComponent } from './domaine/edit/domaine-edit-etudiant.component';
import { DomaineViewEtudiantComponent } from './domaine/view/domaine-view-etudiant.component';
import { DomaineListEtudiantComponent } from './domaine/list/domaine-list-etudiant.component';
import { FiliereCreateEtudiantComponent } from './filiere/create/filiere-create-etudiant.component';
import { FiliereEditEtudiantComponent } from './filiere/edit/filiere-edit-etudiant.component';
import { FiliereViewEtudiantComponent } from './filiere/view/filiere-view-etudiant.component';
import { FiliereListEtudiantComponent } from './filiere/list/filiere-list-etudiant.component';
import { SecteurActiviteCreateEtudiantComponent } from './secteur-activite/create/secteur-activite-create-etudiant.component';
import { SecteurActiviteEditEtudiantComponent } from './secteur-activite/edit/secteur-activite-edit-etudiant.component';
import { SecteurActiviteViewEtudiantComponent } from './secteur-activite/view/secteur-activite-view-etudiant.component';
import { SecteurActiviteListEtudiantComponent } from './secteur-activite/list/secteur-activite-list-etudiant.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    DepartementCreateEtudiantComponent,
    DepartementListEtudiantComponent,
    DepartementViewEtudiantComponent,
    DepartementEditEtudiantComponent,
    DomaineCreateEtudiantComponent,
    DomaineListEtudiantComponent,
    DomaineViewEtudiantComponent,
    DomaineEditEtudiantComponent,
    FiliereCreateEtudiantComponent,
    FiliereListEtudiantComponent,
    FiliereViewEtudiantComponent,
    FiliereEditEtudiantComponent,
    SecteurActiviteCreateEtudiantComponent,
    SecteurActiviteListEtudiantComponent,
    SecteurActiviteViewEtudiantComponent,
    SecteurActiviteEditEtudiantComponent,
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
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,
    EditorModule,


  ],
  exports: [
  DepartementCreateEtudiantComponent,
  DepartementListEtudiantComponent,
  DepartementViewEtudiantComponent,
  DepartementEditEtudiantComponent,
  DomaineCreateEtudiantComponent,
  DomaineListEtudiantComponent,
  DomaineViewEtudiantComponent,
  DomaineEditEtudiantComponent,
  FiliereCreateEtudiantComponent,
  FiliereListEtudiantComponent,
  FiliereViewEtudiantComponent,
  FiliereEditEtudiantComponent,
  SecteurActiviteCreateEtudiantComponent,
  SecteurActiviteListEtudiantComponent,
  SecteurActiviteViewEtudiantComponent,
  SecteurActiviteEditEtudiantComponent,
  ],
})
export class DepartementEtudiantModule { }
