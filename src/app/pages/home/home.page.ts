import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from "@angular/router";
import { CommonFunctions } from '../../../shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';
import { Team } from 'src/models/Team';
import { Group } from 'src/models/Group';
import { DataInfo } from 'src/data/DataInfo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  teamAssignments: Group = {
    A: [],
    B: [],
    C: [],
    D: []
  };

  showCongratulations = false;
  regenerateInterval: any;
  repetitions: number = 0;
  content: any;
  repeatTimes: number = 5;
  teamsToShowA: Team[] = []; // Teams to show for Group A
  teamsToShowB: Team[] = []; // Teams to show for Group B
  teamsToShowC: Team[] = []; // Teams to show for Group C
  teamsToShowD: Team[] = []; // Teams to show for Group D
  countdown = 10;
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

    this.teamAssignments = this.generateTeamAssignments(DataInfo.SeedsTeam);
    this.updateTeamsToShow(this.teamAssignments);
  }
  updateTeamsToShow(teamAssignments: any) {
    for (let i = 0; i < 4; i++) {
      let teamA = teamAssignments['A'][i];
      let teamB = teamAssignments['B'][i];
      let teamC = teamAssignments['C'][i];
      let teamD = teamAssignments['D'][i];
      setTimeout(() => {
        this.teamsToShowA.push(teamA);
        this.teamsToShowB.push(teamB);
        this.teamsToShowC.push(teamC);
        this.teamsToShowD.push(teamD);
      }, 1000 * (i));
    }
  }

  generateTeamAssignments(seedTeams: Team[]): Group {
    this.shuffleArray(DataInfo.OntarioTeams);
    this.shuffleArray(DataInfo.QuebecTeams);
    const cloneOtherTeams = [...DataInfo.QuebecTeams, ...DataInfo.OntarioTeams];
    const groups: Group = {
      A: [],
      B: [],
      C: [],
      D: []
    };
    //Shuffle seedTeams
    this.shuffleArray(seedTeams);
    //assign seed teams to groups
    seedTeams.forEach((seedTeam, index) => {
      const group = Object.keys(groups)[index];
      groups[group as keyof Group].push(seedTeam);
    });

    const stecho2Index = cloneOtherTeams.findIndex(team => team.name === Teams.Stechco2);
    if (stecho2Index !== -1) {
      cloneOtherTeams.push(...cloneOtherTeams.splice(stecho2Index, 1));
    }

    while (cloneOtherTeams.length > 0) {
      const currentTeam: Team = cloneOtherTeams.pop()!;
      for (const group in groups) {
        const currentProvince = currentTeam.province;
        let currentGroup = groups[group as keyof Group];
        if (currentGroup
          .every(team => !this.areSameClub(currentTeam, team) &&
            !this.hasTwoTeamsFromSameProvince(currentGroup, currentProvince) &&
            !this.isGroupFull(currentGroup))) {
          currentGroup.push(currentTeam);
          break;
        }
      }
    }
    return groups;
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
        groupA: JSON.stringify(this.teamAssignments['A']),
        groupB: JSON.stringify(this.teamAssignments['B']),
        groupC: JSON.stringify(this.teamAssignments['C']),
        groupD: JSON.stringify(this.teamAssignments['D'])
      }
    }
    return navData;
  }

  areSameClub(team1: Team, team2: Team) {
    return team1.club === team2.club;
  }

  hasTwoTeamsFromSameProvince(group: Team[], province: string) {
    const pronvinceCount = group.filter(team => team.province === province).length;
    return pronvinceCount >= 2;
  }

  isGroupFull(group: any[]) {
    return group.length >= 4;
  }
}
