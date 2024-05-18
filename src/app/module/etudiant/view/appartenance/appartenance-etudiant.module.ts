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

import { PaysCreateEtudiantComponent } from './pays/create/pays-create-etudiant.component';
import { PaysEditEtudiantComponent } from './pays/edit/pays-edit-etudiant.component';
import { PaysViewEtudiantComponent } from './pays/view/pays-view-etudiant.component';
import { PaysListEtudiantComponent } from './pays/list/pays-list-etudiant.component';
import { GenreCreateEtudiantComponent } from './genre/create/genre-create-etudiant.component';
import { GenreEditEtudiantComponent } from './genre/edit/genre-edit-etudiant.component';
import { GenreViewEtudiantComponent } from './genre/view/genre-view-etudiant.component';
import { GenreListEtudiantComponent } from './genre/list/genre-list-etudiant.component';
import { NationaliteCreateEtudiantComponent } from './nationalite/create/nationalite-create-etudiant.component';
import { NationaliteEditEtudiantComponent } from './nationalite/edit/nationalite-edit-etudiant.component';
import { NationaliteViewEtudiantComponent } from './nationalite/view/nationalite-view-etudiant.component';
import { NationaliteListEtudiantComponent } from './nationalite/list/nationalite-list-etudiant.component';
import { VilleCreateEtudiantComponent } from './ville/create/ville-create-etudiant.component';
import { VilleEditEtudiantComponent } from './ville/edit/ville-edit-etudiant.component';
import { VilleViewEtudiantComponent } from './ville/view/ville-view-etudiant.component';
import { VilleListEtudiantComponent } from './ville/list/ville-list-etudiant.component';

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

    PaysCreateEtudiantComponent,
    PaysListEtudiantComponent,
    PaysViewEtudiantComponent,
    PaysEditEtudiantComponent,
    GenreCreateEtudiantComponent,
    GenreListEtudiantComponent,
    GenreViewEtudiantComponent,
    GenreEditEtudiantComponent,
    NationaliteCreateEtudiantComponent,
    NationaliteListEtudiantComponent,
    NationaliteViewEtudiantComponent,
    NationaliteEditEtudiantComponent,
    VilleCreateEtudiantComponent,
    VilleListEtudiantComponent,
    VilleViewEtudiantComponent,
    VilleEditEtudiantComponent,
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
  PaysCreateEtudiantComponent,
  PaysListEtudiantComponent,
  PaysViewEtudiantComponent,
  PaysEditEtudiantComponent,
  GenreCreateEtudiantComponent,
  GenreListEtudiantComponent,
  GenreViewEtudiantComponent,
  GenreEditEtudiantComponent,
  NationaliteCreateEtudiantComponent,
  NationaliteListEtudiantComponent,
  NationaliteViewEtudiantComponent,
  NationaliteEditEtudiantComponent,
  VilleCreateEtudiantComponent,
  VilleListEtudiantComponent,
  VilleViewEtudiantComponent,
  VilleEditEtudiantComponent,
  ],
})
export class AppartenanceEtudiantModule { }
