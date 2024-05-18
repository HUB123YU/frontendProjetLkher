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

import { AttachementCreateAdminComponent } from './attachement/create/attachement-create-admin.component';
import { AttachementEditAdminComponent } from './attachement/edit/attachement-edit-admin.component';
import { AttachementViewAdminComponent } from './attachement/view/attachement-view-admin.component';
import { AttachementListAdminComponent } from './attachement/list/attachement-list-admin.component';
import { TypeAttachementCreateAdminComponent } from './type-attachement/create/type-attachement-create-admin.component';
import { TypeAttachementEditAdminComponent } from './type-attachement/edit/type-attachement-edit-admin.component';
import { TypeAttachementViewAdminComponent } from './type-attachement/view/type-attachement-view-admin.component';
import { TypeAttachementListAdminComponent } from './type-attachement/list/type-attachement-list-admin.component';

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

    AttachementCreateAdminComponent,
    AttachementListAdminComponent,
    AttachementViewAdminComponent,
    AttachementEditAdminComponent,
    TypeAttachementCreateAdminComponent,
    TypeAttachementListAdminComponent,
    TypeAttachementViewAdminComponent,
    TypeAttachementEditAdminComponent,
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
  AttachementCreateAdminComponent,
  AttachementListAdminComponent,
  AttachementViewAdminComponent,
  AttachementEditAdminComponent,
  TypeAttachementCreateAdminComponent,
  TypeAttachementListAdminComponent,
  TypeAttachementViewAdminComponent,
  TypeAttachementEditAdminComponent,
  ],
})
export class PiecejointeAdminModule { }
