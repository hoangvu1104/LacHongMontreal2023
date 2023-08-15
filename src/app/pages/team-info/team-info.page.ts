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
      //Quebec
      case Teams.Stechco1:
        this.teamInfo = DataInfo.Stechco1Players;
        break;
      case Teams.Stechco2:
        this.teamInfo = DataInfo.Stechco2Players;
        break;
      case Teams.FC3Mien:
        this.teamInfo = DataInfo.FC3MienPlayers;
        break;
      case Teams.VMU:
        this.teamInfo = DataInfo.VMUPlayers;
        break;
      case Teams.SFC:
        this.teamInfo = DataInfo.SFCPlayers;
        break;
      case Teams.RBJunior:
        this.teamInfo = DataInfo.RBJuniorPlayers;
        break;
      //Ontario
      case Teams.CICC:
        this.teamInfo = DataInfo.CICCPlayers;
        break;
      case Teams.CTC:
        this.teamInfo = DataInfo.CTCPlayers;
        break;
      case Teams.FCKingston:
        this.teamInfo = DataInfo.FCKingstonPlayers;
        break;
      case Teams.KWFC:
        this.teamInfo = DataInfo.KWFCPlayers;
        break;
      case Teams.BFC:
        this.teamInfo = DataInfo.BFCPlayers;
        break;
      case Teams.YGOfVN:
        this.teamInfo = DataInfo.YGOfVNPlayers;
        break;
      case Teams.FCAE:
        this.teamInfo = DataInfo.FCAEPlayers;
        break;
      case Teams.LankFC:
        this.teamInfo = DataInfo.LankFCPlayers;
        break;
      //Alberta
      case Teams.CalgaryVFC:
        this.teamInfo = DataInfo.CalgaryVFCPlayers;
        break;
      //British Columbia
      case Teams.VietUnitedFC:
        this.teamInfo = DataInfo.VietUnitedFCPlayers;
        break;
    }
  }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    this.getTeamInfo(this.teamName);
  }
}
