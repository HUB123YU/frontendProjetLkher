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

import { StageAttachementCreateAdminComponent } from './stage-attachement/create/stage-attachement-create-admin.component';
import { StageAttachementEditAdminComponent } from './stage-attachement/edit/stage-attachement-edit-admin.component';
import { StageAttachementViewAdminComponent } from './stage-attachement/view/stage-attachement-view-admin.component';
import { StageAttachementListAdminComponent } from './stage-attachement/list/stage-attachement-list-admin.component';
import { TypeStageCreateAdminComponent } from './type-stage/create/type-stage-create-admin.component';
import { TypeStageEditAdminComponent } from './type-stage/edit/type-stage-edit-admin.component';
import { TypeStageViewAdminComponent } from './type-stage/view/type-stage-view-admin.component';
import { TypeStageListAdminComponent } from './type-stage/list/type-stage-list-admin.component';
import { StageCreateAdminComponent } from './stage/create/stage-create-admin.component';
import { StageEditAdminComponent } from './stage/edit/stage-edit-admin.component';
import { StageViewAdminComponent } from './stage/view/stage-view-admin.component';
import { StageListAdminComponent } from './stage/list/stage-list-admin.component';

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

    StageAttachementCreateAdminComponent,
    StageAttachementListAdminComponent,
    StageAttachementViewAdminComponent,
    StageAttachementEditAdminComponent,
    TypeStageCreateAdminComponent,
    TypeStageListAdminComponent,
    TypeStageViewAdminComponent,
    TypeStageEditAdminComponent,
    StageCreateAdminComponent,
    StageListAdminComponent,
    StageViewAdminComponent,
    StageEditAdminComponent,
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
  StageAttachementCreateAdminComponent,
  StageAttachementListAdminComponent,
  StageAttachementViewAdminComponent,
  StageAttachementEditAdminComponent,
  TypeStageCreateAdminComponent,
  TypeStageListAdminComponent,
  TypeStageViewAdminComponent,
  TypeStageEditAdminComponent,
  StageCreateAdminComponent,
  StageListAdminComponent,
  StageViewAdminComponent,
  StageEditAdminComponent,
  ],
})
export class StageAdminModule { }
