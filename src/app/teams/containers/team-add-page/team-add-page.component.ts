import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeamService} from "@team-handling/teams/services/team.service";
import {Team} from "@team-handling/teams/models/team";
import {Observable} from "rxjs";

@Component({
  selector: 'app-team-add-page',
  templateUrl: './team-add-page.component.html',
  styleUrls: ['./team-add-page.component.scss']
})
export class TeamAddPageComponent implements OnInit {

  addTeamForm! : FormGroup;

  constructor(private fb:FormBuilder,
              private teamService : TeamService) {

  }

  ngOnInit(): void {
  }
  private createForm() : void {
      this.addTeamForm = this.fb.group({
        name : ['',Validators.required],
        slogan : ['',Validators.required],
      })
  }

  // @ts-ignore
  createTeam(team : Team):Observable<Team> {

  }
}
