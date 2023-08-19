import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataInfo } from 'src/data/DataInfo';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {
  //groupA: Teams.VietUnitedFC, Teams.KWFC, Teams.Stechco2, Teams.BFC
  groupA = [DataInfo.SeedsTeam[1], DataInfo.OntarioTeams[2], DataInfo.QuebecTeams[2], DataInfo.OntarioTeams[3]];
  //groupB: Teams.CalgaryVFC, Teams.SFC, Teams.FCAE, Teams.YGOfVN
  groupB = [DataInfo.SeedsTeam[3], DataInfo.QuebecTeams[0], DataInfo.OntarioTeams[5], DataInfo.OntarioTeams[4]];
  //groupC: Teams.CICC, Teams.LankFC, Teams.RBJunior, Teams.VMU
  groupC = [DataInfo.SeedsTeam[2], DataInfo.OntarioTeams[6], DataInfo.QuebecTeams[4], DataInfo.QuebecTeams[1]];
  //groupD: Teams.Stechco1, Teams.FC3Mien, Teams.CTC, Teams.FCKingston
  groupD = [DataInfo.SeedsTeam[0], DataInfo.QuebecTeams[3], DataInfo.OntarioTeams[0], DataInfo.OntarioTeams[1]];

  constructor(public commonFunctions: CommonFunctions, private navCtrl: NavController) { }

  ngOnInit() {
  }

  getTeamImageStyle(team: string): any {
    return this.commonFunctions.getTeamImageStyle(team);
  }

  loadTeamInfo(teamName: string) {
    console.log('teamName', teamName);
    this.navCtrl.navigateRoot(['/', RoutesUrl.TeamInfo, teamName]);
  }
}
