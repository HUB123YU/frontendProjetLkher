
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'jury',
                            loadChildren: () => import('./view/jury/jury-admin-routing.module').then(x => x.JuryAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'appartenance',
                            loadChildren: () => import('./view/appartenance/appartenance-admin-routing.module').then(x => x.AppartenanceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'departement',
                            loadChildren: () => import('./view/departement/departement-admin-routing.module').then(x => x.DepartementAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'stage',
                            loadChildren: () => import('./view/stage/stage-admin-routing.module').then(x => x.StageAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'encadrant',
                            loadChildren: () => import('./view/encadrant/encadrant-admin-routing.module').then(x => x.EncadrantAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'societe',
                            loadChildren: () => import('./view/societe/societe-admin-routing.module').then(x => x.SocieteAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'etudiant',
                            loadChildren: () => import('./view/etudiant/etudiant-admin-routing.module').then(x => x.EtudiantAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'piecejointe',
                            loadChildren: () => import('./view/piecejointe/piecejointe-admin-routing.module').then(x => x.PiecejointeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
