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

import { StageAttachementCreateEtudiantComponent } from './stage-attachement/create/stage-attachement-create-etudiant.component';
import { StageAttachementEditEtudiantComponent } from './stage-attachement/edit/stage-attachement-edit-etudiant.component';
import { StageAttachementViewEtudiantComponent } from './stage-attachement/view/stage-attachement-view-etudiant.component';
import { StageAttachementListEtudiantComponent } from './stage-attachement/list/stage-attachement-list-etudiant.component';
import { TypeStageCreateEtudiantComponent } from './type-stage/create/type-stage-create-etudiant.component';
import { TypeStageEditEtudiantComponent } from './type-stage/edit/type-stage-edit-etudiant.component';
import { TypeStageViewEtudiantComponent } from './type-stage/view/type-stage-view-etudiant.component';
import { TypeStageListEtudiantComponent } from './type-stage/list/type-stage-list-etudiant.component';
import { StageCreateEtudiantComponent } from './stage/create/stage-create-etudiant.component';
import { StageEditEtudiantComponent } from './stage/edit/stage-edit-etudiant.component';
import { StageViewEtudiantComponent } from './stage/view/stage-view-etudiant.component';
import { StageListEtudiantComponent } from './stage/list/stage-list-etudiant.component';

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

    StageAttachementCreateEtudiantComponent,
    StageAttachementListEtudiantComponent,
    StageAttachementViewEtudiantComponent,
    StageAttachementEditEtudiantComponent,
    TypeStageCreateEtudiantComponent,
    TypeStageListEtudiantComponent,
    TypeStageViewEtudiantComponent,
    TypeStageEditEtudiantComponent,
    StageCreateEtudiantComponent,
    StageListEtudiantComponent,
    StageViewEtudiantComponent,
    StageEditEtudiantComponent,
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
  StageAttachementCreateEtudiantComponent,
  StageAttachementListEtudiantComponent,
  StageAttachementViewEtudiantComponent,
  StageAttachementEditEtudiantComponent,
  TypeStageCreateEtudiantComponent,
  TypeStageListEtudiantComponent,
  TypeStageViewEtudiantComponent,
  TypeStageEditEtudiantComponent,
  StageCreateEtudiantComponent,
  StageListEtudiantComponent,
  StageViewEtudiantComponent,
  StageEditEtudiantComponent,
  ],
})
export class StageEtudiantModule { }
