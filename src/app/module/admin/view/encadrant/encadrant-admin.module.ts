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

import { EncadrantExterneCreateAdminComponent } from './encadrant-externe/create/encadrant-externe-create-admin.component';
import { EncadrantExterneEditAdminComponent } from './encadrant-externe/edit/encadrant-externe-edit-admin.component';
import { EncadrantExterneViewAdminComponent } from './encadrant-externe/view/encadrant-externe-view-admin.component';
import { EncadrantExterneListAdminComponent } from './encadrant-externe/list/encadrant-externe-list-admin.component';
import { EncadrantInterneCreateAdminComponent } from './encadrant-interne/create/encadrant-interne-create-admin.component';
import { EncadrantInterneEditAdminComponent } from './encadrant-interne/edit/encadrant-interne-edit-admin.component';
import { EncadrantInterneViewAdminComponent } from './encadrant-interne/view/encadrant-interne-view-admin.component';
import { EncadrantInterneListAdminComponent } from './encadrant-interne/list/encadrant-interne-list-admin.component';

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

    EncadrantExterneCreateAdminComponent,
    EncadrantExterneListAdminComponent,
    EncadrantExterneViewAdminComponent,
    EncadrantExterneEditAdminComponent,
    EncadrantInterneCreateAdminComponent,
    EncadrantInterneListAdminComponent,
    EncadrantInterneViewAdminComponent,
    EncadrantInterneEditAdminComponent,
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
  EncadrantExterneCreateAdminComponent,
  EncadrantExterneListAdminComponent,
  EncadrantExterneViewAdminComponent,
  EncadrantExterneEditAdminComponent,
  EncadrantInterneCreateAdminComponent,
  EncadrantInterneListAdminComponent,
  EncadrantInterneViewAdminComponent,
  EncadrantInterneEditAdminComponent,
  ],
})
export class EncadrantAdminModule { }
