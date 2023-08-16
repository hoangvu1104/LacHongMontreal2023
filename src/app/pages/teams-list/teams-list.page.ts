import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataInfo } from 'src/data/DataInfo';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {

  listTeams = [...DataInfo.SeedsTeam, ...DataInfo.OntarioTeams, ...DataInfo.QuebecTeams]
    .sort((a, b) => (a.name > b.name) ? 1 : -1);

  constructor(public commonFunctions: CommonFunctions, private navCtrl: NavController) { }

  ngOnInit() {
  }

  getTeamImageStyle(team: string): any {
    return this.commonFunctions.getTeamImageStyle(team);
  }

  loadTeamInfo(teamName: string) {
    this.navCtrl.navigateRoot(['/', RoutesUrl.TeamInfo, teamName]);
  }

}
