import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from "src/app/zynerator/security/guards/auth.guard";
import {AccessComponent} from "src/app/demo/components/auth/access/access.component";
import {AppLayoutComponent} from "src/app/layout/app.layout.component";

import {LoginAdminComponent} from 'src/app/module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from 'src/app/module/admin/register-admin/register-admin.component';
import {LoginEncadrantinterneComponent} from 'src/app/module/encadrantinterne/login-encadrantinterne/login-encadrantinterne.component';
import {RegisterEncadrantinterneComponent} from 'src/app/module/encadrantinterne/register-encadrantinterne/register-encadrantinterne.component';
import {LoginEtudiantComponent} from 'src/app/module/etudiant/login-etudiant/login-etudiant.component';
import {RegisterEtudiantComponent} from 'src/app/module/etudiant/register-etudiant/register-etudiant.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {path: '', component: LoginAdminComponent},
            {path: 'admin/login', component: LoginAdminComponent },
            {path: 'admin/register', component: RegisterAdminComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'etudiant/login', component: LoginEtudiantComponent },
            {path: 'etudiant/register', component: RegisterEtudiantComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {path: 'encadrantinterne/login', component: LoginEncadrantinterneComponent },
            {path: 'encadrantinterne/register', component: RegisterEncadrantinterneComponent },
            {
            path: 'app',
            component: AppLayoutComponent,
            children: [
                {
                    path: 'admin',
                    loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'etudiant',
                    loadChildren: () => import( './module/etudiant/etudiant-routing.module').then(x => x.EtudiantRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'encadrantinterne',
                    loadChildren: () => import( './module/encadrantinterne/encadrantinterne-routing.module').then(x => x.EncadrantinterneRoutingModule),
                    canActivate: [AuthGuard],
                },
                    { path: 'denied', component: AccessComponent },
                ],
                canActivate: [AuthGuard]
                },
            ],
                { scrollPositionRestoration: 'enabled' }
            ),
        ],
    exports: [RouterModule],
    })
export class AppRoutingModule { }
