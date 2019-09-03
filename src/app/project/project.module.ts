import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectListComponent } from '../project/project-list/project-list.component';
import { ProjectItemComponent } from '../project/project-item/project-item.component';
import { NewProjectComponent } from '../project/new-project/new-project.component';
import { InviteComponent } from '../project/invite/invite.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { ProjectRoutingModule  } from '../project/project-routing_module';
@NgModule({
    imports:[
        SharedModule,
        ProjectRoutingModule
    ],
    declarations:[
        ProjectListComponent,
        ProjectItemComponent,
        NewProjectComponent,
        InviteComponent,

    ],
    entryComponents:[
        NewProjectComponent,
        InviteComponent,
        ConfirmDialogComponent
    ]
})
export class ProjectModule{}