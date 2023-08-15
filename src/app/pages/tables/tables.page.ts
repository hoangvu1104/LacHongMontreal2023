import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {
  groupA = [Teams.VietUnitedFC, Teams.CTC, Teams.YGOfVN, Teams.RBJunior];
  groupB = [Teams.CalgaryVFC, Teams.FCKingston, Teams.FCAE, Teams.FC3Mien];
  groupC = [Teams.CICC, Teams.KWFC, Teams.Stechco2, Teams.VMU];
  groupD = [Teams.Stechco1, Teams.BFC, Teams.LankFC, Teams.SFC];

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
