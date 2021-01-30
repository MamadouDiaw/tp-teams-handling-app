import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Team} from "@team-handling/teams/models/team";
import {environment} from "@team-handling-env/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private subject = new BehaviorSubject<Team>({id:0,name:'',slogan:''});

  constructor(private  http: HttpClient) {

  }

  pushTeam(team:Team) : void{
      this.subject.next(team);
  }

  getTeams(): Observable<Team[]> {

    return this.http.get<Team[]>(`${environment.backendPoint}/teams/`);
  }


  getTeamByID(id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.backendPoint}/teamByID/${id}`);
  }
}


