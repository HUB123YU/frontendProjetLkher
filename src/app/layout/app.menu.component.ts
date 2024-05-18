import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
  modelEncadrantinterne: any[];
  modelEtudiant: any[];

constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Appartenance',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste pays',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/appartenance/pays/list']
								  },
								  {
									label: 'Liste genre',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/appartenance/genre/list']
								  },
								  {
									label: 'Liste nationalite',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/appartenance/nationalite/list']
								  },
								  {
									label: 'Liste ville',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/appartenance/ville/list']
								  },
						]
					  },
					  {
						label: 'Jury',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste jury',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/jury/jury/list']
								  },
						]
					  },
					  {
						label: 'Departement',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste departement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/departement/departement/list']
								  },
								  {
									label: 'Liste domaine',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/departement/domaine/list']
								  },
								  {
									label: 'Liste filiere',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/departement/filiere/list']
								  },
								  {
									label: 'Liste secteur activite',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/departement/secteur-activite/list']
								  },
						]
					  },
					  {
						label: 'Stage',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste stage attachement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/stage/stage-attachement/list']
								  },
								  {
									label: 'Liste type stage',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/stage/type-stage/list']
								  },
								  {
									label: 'Liste stage',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/stage/stage/list']
								  },
						]
					  },
					  {
						label: 'Encadrant',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste encadrant externe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/encadrant/encadrant-externe/list']
								  },
								  {
									label: 'Liste encadrant interne',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/encadrant/encadrant-interne/list']
								  },
						]
					  },
					  {
						label: 'Societe',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste societe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/societe/societe/list']
								  },
						]
					  },
					  {
						label: 'Etudiant',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/etudiant/etudiant/list']
								  },
						]
					  },
					  {
						label: 'Piecejointe',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste attachement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/piecejointe/attachement/list']
								  },
								  {
									label: 'Liste type attachement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/piecejointe/type-attachement/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEtudiant =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Appartenance',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste pays',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/appartenance/pays/list']
								  },
								  {
									label: 'Liste genre',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/appartenance/genre/list']
								  },
								  {
									label: 'Liste nationalite',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/appartenance/nationalite/list']
								  },
								  {
									label: 'Liste ville',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/appartenance/ville/list']
								  },
						]
					  },
					  {
						label: 'Jury',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste jury',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/jury/jury/list']
								  },
						]
					  },
					  {
						label: 'Departement',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste departement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/departement/departement/list']
								  },
								  {
									label: 'Liste domaine',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/departement/domaine/list']
								  },
								  {
									label: 'Liste filiere',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/departement/filiere/list']
								  },
								  {
									label: 'Liste secteur activite',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/departement/secteur-activite/list']
								  },
						]
					  },
					  {
						label: 'Stage',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste stage attachement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/stage/stage-attachement/list']
								  },
								  {
									label: 'Liste type stage',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/stage/type-stage/list']
								  },
								  {
									label: 'Liste stage',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/stage/stage/list']
								  },
						]
					  },
					  {
						label: 'Encadrant',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste encadrant externe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/encadrant/encadrant-externe/list']
								  },
								  {
									label: 'Liste encadrant interne',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/encadrant/encadrant-interne/list']
								  },
						]
					  },
					  {
						label: 'Societe',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste societe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/societe/societe/list']
								  },
						]
					  },
					  {
						label: 'Etudiant',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste etudiant',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/etudiant/etudiant/list']
								  },
						]
					  },
					  {
						label: 'Piecejointe',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste attachement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/piecejointe/attachement/list']
								  },
								  {
									label: 'Liste type attachement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/etudiant/piecejointe/type-attachement/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelEncadrantinterne =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
