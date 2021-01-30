import { Component, OnInit } from '@angular/core';
import {Team} from "@team-handling/teams/models/team";
import {TeamService} from "@team-handling/teams/services/team.service";
import {mergeMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-team-detail-page',
  templateUrl: './team-detail-page.component.html',
  styleUrls: ['./team-detail-page.component.scss']
})
export class TeamDetailPageComponent implements OnInit {

  team : Team | null;

  constructor(private teamService : TeamService,
              private route : ActivatedRoute) {
    this.team = null;
  }

  ngOnInit(): void {
    this.route.params.pipe(
      mergeMap(params =>this.teamService.getTeamByID(params['id'])))
      .subscribe(team => this.team = team );
  }

}
