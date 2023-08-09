import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from "@angular/router";
import { CommonFunctions } from '../../../shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  showCongratulations = false;
  regenerateInterval: any;
  repetitions: number = 0;
  content: any;
  repeatTimes: number = 5;
  groupA: string[] = [];
  groupB: string[] = [];
  groupC: string[] = [];
  groupD: string[] = [];

  teamsToShowA: string[] = []; // Teams to show for Group A
  teamsToShowB: string[] = []; // Teams to show for Group B
  teamsToShowC: string[] = []; // Teams to show for Group C
  teamsToShowD: string[] = []; // Teams to show for Group D
  countdown = 15;
  constructor(private navCtrl: NavController, public commonFunctions: CommonFunctions) { }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.startGenerateTeams();
      }
    }, 1000); // Decrease the countdown every second (1000 milliseconds)
  }

  startGenerateTeams() {
    this.showCongratulations = false;
    this.repetitions = 0;
    this.generateTeams();
    this.regenerateInterval = setInterval(() => {
      this.generateTeams();
      console.log('startRegeneration', this.repetitions);
    }, 10000);
  }

  generateTeams() {
    this.repetitions++;
    this.content = this.repetitions != this.repeatTimes ? 'Bốc thăm thử lần thứ ' + this.repetitions : 'Kết quả bốc thăm chính thức';
    this.showCongratulations = this.repetitions == this.repeatTimes;
    // Stop regenerating after 5 repetitions
    if (this.repetitions == this.repeatTimes) {
      clearInterval(this.regenerateInterval);
    }
    this.teamsToShowA = []; // Teams to show for Group A
    this.teamsToShowB = []; // Teams to show for Group B
    this.teamsToShowC = []; // Teams to show for Group C
    this.teamsToShowD = []; // Teams to show for Group D
    let teamAssignments: string[][] = this.generateTeamAssignments();
    while (teamAssignments.length === 0) {
      teamAssignments = this.generateTeamAssignments();
    }
    this.groupA = teamAssignments[0];
    this.groupB = teamAssignments[1];
    this.groupC = teamAssignments[2];
    this.groupD = teamAssignments[3];
    this.updateTeamsToShow();
  }

  updateTeamsToShow() {
    if (this.teamsToShowA.length < this.groupA.length) {
      this.teamsToShowA.push(this.groupA[this.teamsToShowA.length]);
    }
    if (this.teamsToShowB.length < this.groupB.length) {
      this.teamsToShowB.push(this.groupB[this.teamsToShowB.length]);
    }
    if (this.teamsToShowC.length < this.groupC.length) {
      this.teamsToShowC.push(this.groupC[this.teamsToShowC.length]);
    }
    if (this.teamsToShowD.length < this.groupD.length) {
      this.teamsToShowD.push(this.groupD[this.teamsToShowD.length]);
    }
    if (
      this.teamsToShowA.length < this.groupA.length ||
      this.teamsToShowB.length < this.groupB.length ||
      this.teamsToShowC.length < this.groupC.length ||
      this.teamsToShowD.length < this.groupD.length
    ) {
      setTimeout(() => {
        this.updateTeamsToShow();
      }, 1000);
    }
  }

  generateTeamAssignments(): string[][] {
    const teamsSeed: string[] = [Teams.Stechco1, Teams.VietUnitedFC, Teams.CICC, Teams.CalgaryVFC];
    const teamsOntario: string[] = [Teams.CTC, Teams.FCKingston, Teams.KWFC, Teams.BFC, Teams.YGOfVN, Teams.FCAE, Teams.LankFC];
    const teamsQuebec: string[] = [Teams.SFC, Teams.VMU, Teams.Stechco2, Teams.FC3Mien, Teams.RBJunior];

    //Random teams in these group before assign
    this.shuffleArray(teamsSeed);
    this.shuffleArray(teamsOntario);
    this.shuffleArray(teamsQuebec);

    const team2O1Q_1: string[] = [teamsQuebec[0], teamsOntario[0], teamsOntario[1]];
    const team2O1Q_2: string[] = [teamsQuebec[1], teamsOntario[2], teamsOntario[3]];
    const team2O1Q_3: string[] = [teamsQuebec[2], teamsOntario[4], teamsOntario[5]];
    const team1O2Q: string[] = [teamsQuebec[3], teamsQuebec[4], teamsOntario[6]];

    //Random teams in these group before assign
    this.shuffleArray(team2O1Q_1);
    this.shuffleArray(team2O1Q_2);
    this.shuffleArray(team2O1Q_3);
    this.shuffleArray(team1O2Q);

    const teamsA: string[] = [];
    const teamsB: string[] = [];
    const teamsC: string[] = [];
    const teamsD: string[] = [];

    if (teamsSeed[0] == Teams.CICC) {
      teamsA.push(teamsSeed[0]);
      teamsA.push(team1O2Q[0]);
      teamsA.push(team1O2Q[1]);
      teamsA.push(team1O2Q[2]);

      teamsB.push(teamsSeed[1]);
      teamsB.push(team2O1Q_1[0]);
      teamsB.push(team2O1Q_1[1]);
      teamsB.push(team2O1Q_1[2]);

      teamsC.push(teamsSeed[2]);
      teamsC.push(team2O1Q_2[0]);
      teamsC.push(team2O1Q_2[1]);
      teamsC.push(team2O1Q_2[2]);

      teamsD.push(teamsSeed[3]);
      teamsD.push(team2O1Q_3[0]);
      teamsD.push(team2O1Q_3[1]);
      teamsD.push(team2O1Q_3[2]);
    } else if (teamsSeed[1] == Teams.CICC) {
      teamsB.push(teamsSeed[1]);
      teamsB.push(team1O2Q[0]);
      teamsB.push(team1O2Q[1]);
      teamsB.push(team1O2Q[2]);

      teamsA.push(teamsSeed[0]);
      teamsA.push(team2O1Q_1[0]);
      teamsA.push(team2O1Q_1[1]);
      teamsA.push(team2O1Q_1[2]);

      teamsC.push(teamsSeed[2]);
      teamsC.push(team2O1Q_2[0]);
      teamsC.push(team2O1Q_2[1]);
      teamsC.push(team2O1Q_2[2]);

      teamsD.push(teamsSeed[3]);
      teamsD.push(team2O1Q_3[0]);
      teamsD.push(team2O1Q_3[1]);
      teamsD.push(team2O1Q_3[2]);
    }
    else if (teamsSeed[2] == Teams.CICC) {
      teamsC.push(teamsSeed[2]);
      teamsC.push(team1O2Q[0]);
      teamsC.push(team1O2Q[1]);
      teamsC.push(team1O2Q[2]);

      teamsA.push(teamsSeed[0]);
      teamsA.push(team2O1Q_1[0]);
      teamsA.push(team2O1Q_1[1]);
      teamsA.push(team2O1Q_1[2]);

      teamsB.push(teamsSeed[1]);
      teamsB.push(team2O1Q_2[0]);
      teamsB.push(team2O1Q_2[1]);
      teamsB.push(team2O1Q_2[2]);

      teamsD.push(teamsSeed[3]);
      teamsD.push(team2O1Q_3[0]);
      teamsD.push(team2O1Q_3[1]);
      teamsD.push(team2O1Q_3[2]);
    }
    else if (teamsSeed[3] == Teams.CICC) {
      teamsD.push(teamsSeed[3]);
      teamsD.push(team1O2Q[0]);
      teamsD.push(team1O2Q[1]);
      teamsD.push(team1O2Q[2]);

      teamsA.push(teamsSeed[0]);
      teamsA.push(team2O1Q_1[0]);
      teamsA.push(team2O1Q_1[1]);
      teamsA.push(team2O1Q_1[2]);

      teamsB.push(teamsSeed[1]);
      teamsB.push(team2O1Q_2[0]);
      teamsB.push(team2O1Q_2[1]);
      teamsB.push(team2O1Q_2[2]);

      teamsC.push(teamsSeed[2]);
      teamsC.push(team2O1Q_3[0]);
      teamsC.push(team2O1Q_3[1]);
      teamsC.push(team2O1Q_3[2]);
    }
    //Check if 2 teams Stechco are valid (not at the same table)
    if ((teamsA.includes(Teams.Stechco1) && teamsA.includes(Teams.Stechco2)) ||
      (teamsB.includes(Teams.Stechco1) && teamsB.includes(Teams.Stechco2)) ||
      (teamsC.includes(Teams.Stechco1) && teamsC.includes(Teams.Stechco2)) ||
      (teamsD.includes(Teams.Stechco1) && teamsD.includes(Teams.Stechco2))
    ) {
      console.log('regenerateTeamAssignments()');
      return [];

    } else {
      return [teamsA, teamsB, teamsC, teamsD];
    }
  }
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getTeamImageStyle(team: string): any {
    let imagePath: string = this.commonFunctions.getTeamImageStyle(team);
    return {
      'background-image': `url(${imagePath})`,
    };
  }

  scheduleDetail() {
    this.navCtrl.navigateRoot(RoutesUrl.RoundRobin, this.getGroupData());
  }

  getGroupData() {
    const navData: NavigationExtras = {
      queryParams: {
        groupA: JSON.stringify(this.groupA),
        groupB: JSON.stringify(this.groupB),
        groupC: JSON.stringify(this.groupC),
        groupD: JSON.stringify(this.groupD),
      }
    }
    return navData;
  }
}
