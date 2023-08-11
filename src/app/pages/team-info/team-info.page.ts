import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataInfo } from 'src/data/DataInfo';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage implements OnInit {
  teamInfo: any;
  teamName: any;

  constructor(private route: ActivatedRoute) {
    //this.getTeamInfo(Teams.FC3Mien);
  }

  getTeamInfo(teamName: string) {
    switch (teamName) {
      case Teams.Stechco1:
        this.teamInfo = DataInfo.Stechco1Players;
        break;
      case Teams.Stechco2:
        this.teamInfo = DataInfo.Stechco1Players;
        break;
      case Teams.FC3Mien:
        this.teamInfo = DataInfo.FC3MienPlayers;
        break;
    }
  }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.getTeamInfo(this.teamName);
  }
}
