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

import { PaysCreateAdminComponent } from './pays/create/pays-create-admin.component';
import { PaysEditAdminComponent } from './pays/edit/pays-edit-admin.component';
import { PaysViewAdminComponent } from './pays/view/pays-view-admin.component';
import { PaysListAdminComponent } from './pays/list/pays-list-admin.component';
import { GenreCreateAdminComponent } from './genre/create/genre-create-admin.component';
import { GenreEditAdminComponent } from './genre/edit/genre-edit-admin.component';
import { GenreViewAdminComponent } from './genre/view/genre-view-admin.component';
import { GenreListAdminComponent } from './genre/list/genre-list-admin.component';
import { NationaliteCreateAdminComponent } from './nationalite/create/nationalite-create-admin.component';
import { NationaliteEditAdminComponent } from './nationalite/edit/nationalite-edit-admin.component';
import { NationaliteViewAdminComponent } from './nationalite/view/nationalite-view-admin.component';
import { NationaliteListAdminComponent } from './nationalite/list/nationalite-list-admin.component';
import { VilleCreateAdminComponent } from './ville/create/ville-create-admin.component';
import { VilleEditAdminComponent } from './ville/edit/ville-edit-admin.component';
import { VilleViewAdminComponent } from './ville/view/ville-view-admin.component';
import { VilleListAdminComponent } from './ville/list/ville-list-admin.component';

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

    PaysCreateAdminComponent,
    PaysListAdminComponent,
    PaysViewAdminComponent,
    PaysEditAdminComponent,
    GenreCreateAdminComponent,
    GenreListAdminComponent,
    GenreViewAdminComponent,
    GenreEditAdminComponent,
    NationaliteCreateAdminComponent,
    NationaliteListAdminComponent,
    NationaliteViewAdminComponent,
    NationaliteEditAdminComponent,
    VilleCreateAdminComponent,
    VilleListAdminComponent,
    VilleViewAdminComponent,
    VilleEditAdminComponent,
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
  PaysCreateAdminComponent,
  PaysListAdminComponent,
  PaysViewAdminComponent,
  PaysEditAdminComponent,
  GenreCreateAdminComponent,
  GenreListAdminComponent,
  GenreViewAdminComponent,
  GenreEditAdminComponent,
  NationaliteCreateAdminComponent,
  NationaliteListAdminComponent,
  NationaliteViewAdminComponent,
  NationaliteEditAdminComponent,
  VilleCreateAdminComponent,
  VilleListAdminComponent,
  VilleViewAdminComponent,
  VilleEditAdminComponent,
  ],
})
export class AppartenanceAdminModule { }
