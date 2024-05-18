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

import { DepartementCreateAdminComponent } from './departement/create/departement-create-admin.component';
import { DepartementEditAdminComponent } from './departement/edit/departement-edit-admin.component';
import { DepartementViewAdminComponent } from './departement/view/departement-view-admin.component';
import { DepartementListAdminComponent } from './departement/list/departement-list-admin.component';
import { DomaineCreateAdminComponent } from './domaine/create/domaine-create-admin.component';
import { DomaineEditAdminComponent } from './domaine/edit/domaine-edit-admin.component';
import { DomaineViewAdminComponent } from './domaine/view/domaine-view-admin.component';
import { DomaineListAdminComponent } from './domaine/list/domaine-list-admin.component';
import { FiliereCreateAdminComponent } from './filiere/create/filiere-create-admin.component';
import { FiliereEditAdminComponent } from './filiere/edit/filiere-edit-admin.component';
import { FiliereViewAdminComponent } from './filiere/view/filiere-view-admin.component';
import { FiliereListAdminComponent } from './filiere/list/filiere-list-admin.component';
import { SecteurActiviteCreateAdminComponent } from './secteur-activite/create/secteur-activite-create-admin.component';
import { SecteurActiviteEditAdminComponent } from './secteur-activite/edit/secteur-activite-edit-admin.component';
import { SecteurActiviteViewAdminComponent } from './secteur-activite/view/secteur-activite-view-admin.component';
import { SecteurActiviteListAdminComponent } from './secteur-activite/list/secteur-activite-list-admin.component';

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

    DepartementCreateAdminComponent,
    DepartementListAdminComponent,
    DepartementViewAdminComponent,
    DepartementEditAdminComponent,
    DomaineCreateAdminComponent,
    DomaineListAdminComponent,
    DomaineViewAdminComponent,
    DomaineEditAdminComponent,
    FiliereCreateAdminComponent,
    FiliereListAdminComponent,
    FiliereViewAdminComponent,
    FiliereEditAdminComponent,
    SecteurActiviteCreateAdminComponent,
    SecteurActiviteListAdminComponent,
    SecteurActiviteViewAdminComponent,
    SecteurActiviteEditAdminComponent,
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
  DepartementCreateAdminComponent,
  DepartementListAdminComponent,
  DepartementViewAdminComponent,
  DepartementEditAdminComponent,
  DomaineCreateAdminComponent,
  DomaineListAdminComponent,
  DomaineViewAdminComponent,
  DomaineEditAdminComponent,
  FiliereCreateAdminComponent,
  FiliereListAdminComponent,
  FiliereViewAdminComponent,
  FiliereEditAdminComponent,
  SecteurActiviteCreateAdminComponent,
  SecteurActiviteListAdminComponent,
  SecteurActiviteViewAdminComponent,
  SecteurActiviteEditAdminComponent,
  ],
})
export class DepartementAdminModule { }
