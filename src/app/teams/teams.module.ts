import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListPageComponent } from './containers/team-list-page/team-list-page.component';
import {MatCardModule} from "@angular/material/card";
import { TeamDetailPageComponent } from './containers/team-detail-page/team-detail-page.component';
import { TeamAddPageComponent } from './containers/team-add-page/team-add-page.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TeamListPageComponent, TeamDetailPageComponent, TeamAddPageComponent],
  imports: [
    CommonModule,
    MatCardModule,

    ReactiveFormsModule,
  ]
})
export class TeamsModule { }
