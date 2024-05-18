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

import { AttachementCreateEtudiantComponent } from './attachement/create/attachement-create-etudiant.component';
import { AttachementEditEtudiantComponent } from './attachement/edit/attachement-edit-etudiant.component';
import { AttachementViewEtudiantComponent } from './attachement/view/attachement-view-etudiant.component';
import { AttachementListEtudiantComponent } from './attachement/list/attachement-list-etudiant.component';
import { TypeAttachementCreateEtudiantComponent } from './type-attachement/create/type-attachement-create-etudiant.component';
import { TypeAttachementEditEtudiantComponent } from './type-attachement/edit/type-attachement-edit-etudiant.component';
import { TypeAttachementViewEtudiantComponent } from './type-attachement/view/type-attachement-view-etudiant.component';
import { TypeAttachementListEtudiantComponent } from './type-attachement/list/type-attachement-list-etudiant.component';

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

    AttachementCreateEtudiantComponent,
    AttachementListEtudiantComponent,
    AttachementViewEtudiantComponent,
    AttachementEditEtudiantComponent,
    TypeAttachementCreateEtudiantComponent,
    TypeAttachementListEtudiantComponent,
    TypeAttachementViewEtudiantComponent,
    TypeAttachementEditEtudiantComponent,
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
  AttachementCreateEtudiantComponent,
  AttachementListEtudiantComponent,
  AttachementViewEtudiantComponent,
  AttachementEditEtudiantComponent,
  TypeAttachementCreateEtudiantComponent,
  TypeAttachementListEtudiantComponent,
  TypeAttachementViewEtudiantComponent,
  TypeAttachementEditEtudiantComponent,
  ],
})
export class PiecejointeEtudiantModule { }
