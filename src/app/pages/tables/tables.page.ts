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
  groupA = [Teams.VMU, Teams.Stechco2, Teams.Stechco1, Teams.RBJunior];
  groupB = [Teams.FC3Mien, Teams.BFC, Teams.Stechco1, Teams.VMU];
  groupC = [Teams.FC3Mien, Teams.BFC, Teams.Stechco1, Teams.VMU];
  groupD = [Teams.FC3Mien, Teams.BFC, Teams.Stechco1, Teams.VMU];

  constructor(public commonFunctions : CommonFunctions, private navCtrl: NavController) { }

  ngOnInit() {
  }

  getTeamImageStyle(team: string): any  {
    return this.commonFunctions.getTeamImageStyle(team);
  }

  loadTeamInfo(teamName: string){
    console.log('teamName', teamName);
    this.navCtrl.navigateRoot(['/', RoutesUrl.TeamInfo, teamName]);
  }
}
