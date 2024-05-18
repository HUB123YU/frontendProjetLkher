
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';

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
                                    component: LoginEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'jury',
                            loadChildren: () => import('./view/jury/jury-etudiant-routing.module').then(x => x.JuryEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'appartenance',
                            loadChildren: () => import('./view/appartenance/appartenance-etudiant-routing.module').then(x => x.AppartenanceEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'departement',
                            loadChildren: () => import('./view/departement/departement-etudiant-routing.module').then(x => x.DepartementEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'stage',
                            loadChildren: () => import('./view/stage/stage-etudiant-routing.module').then(x => x.StageEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'encadrant',
                            loadChildren: () => import('./view/encadrant/encadrant-etudiant-routing.module').then(x => x.EncadrantEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'societe',
                            loadChildren: () => import('./view/societe/societe-etudiant-routing.module').then(x => x.SocieteEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'etudiant',
                            loadChildren: () => import('./view/etudiant/etudiant-etudiant-routing.module').then(x => x.EtudiantEtudiantRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'piecejointe',
                            loadChildren: () => import('./view/piecejointe/piecejointe-etudiant-routing.module').then(x => x.PiecejointeEtudiantRoutingModule),
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
export class EtudiantRoutingModule { }
