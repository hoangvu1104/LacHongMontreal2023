import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonFunctions } from '../../../shared/commonFunctions';
import { NavController } from '@ionic/angular';
import { Division } from 'src/models/Division';
import { Fields } from 'src/shared/fields';
import { Team } from 'src/models/Team';
import { DataInfo } from 'src/data/DataInfo';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})

export class ResultPage implements OnInit {
  teamAssignments: any;
  groupA: Team[] = [];
  groupB: Team[] = [];
  groupC: Team[] = [];
  groupD: Team[] = [];
  divisions: Division[] = [];

  time1: string = '8h30-9h30';
  time2: string = '9h45-10h45';
  time3: string = '11h-12h';
  time4: string = '13h-14h';
  time5: string = '14h15-15h15';
  time6: string = '15h30-16h30';

  generateTeamName(team: Team) {
    return this.commonFunctions.generateTeamName(team, false);
  }

  generateDivisions(groupA: Team[], groupB: Team[], groupC: Team[], groupD: Team[]) {
    //get group A and B from page home
    this.divisions = [
      //Round 1 - AB
      {
        code: '',
        time: this.time1, field: Fields.Field1,
        teamA: this.generateTeamName(groupA[0]), teamB: this.generateTeamName(groupA[1]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time1, field: Fields.Field2,
        teamA: this.generateTeamName(groupA[2]), teamB: this.generateTeamName(groupA[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time1, field: Fields.Field3,
        teamA: this.generateTeamName(groupB[0]), teamB: this.generateTeamName(groupB[1]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time1, field: Fields.Field4,
        teamA: this.generateTeamName(groupB[2]), teamB: this.generateTeamName(groupB[3]),
        resultA: 0, resultB: 0
      },
      //Round 1 - CD
      {
        code: '',
        time: this.time2, field: Fields.Field1,
        teamA: this.generateTeamName(groupC[0]), teamB: this.generateTeamName(groupC[1]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time2, field: Fields.Field2,
        teamA: this.generateTeamName(groupC[2]), teamB: this.generateTeamName(groupC[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time2, field: Fields.Field3,
        teamA: this.generateTeamName(groupD[0]), teamB: this.generateTeamName(groupD[1]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time2, field: Fields.Field4,
        teamA: this.generateTeamName(groupD[2]), teamB: this.generateTeamName(groupD[3]),
        resultA: 0, resultB: 0
      },
      //Round 2 - AB
      {
        code: '',
        time: this.time3, field: Fields.Field1,
        teamA: this.generateTeamName(groupA[0]), teamB: this.generateTeamName(groupA[2]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time3, field: Fields.Field2,
        teamA: this.generateTeamName(groupA[1]), teamB: this.generateTeamName(groupA[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time3, field: Fields.Field3,
        teamA: this.generateTeamName(groupB[0]), teamB: this.generateTeamName(groupB[2]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time3, field: Fields.Field4,
        teamA: this.generateTeamName(groupB[1]), teamB: this.generateTeamName(groupB[3]),
        resultA: 0, resultB: 0
      },
      //Round 2 - CD
      {
        code: '',
        time: this.time4, field: Fields.Field1,
        teamA: this.generateTeamName(groupC[0]), teamB: this.generateTeamName(groupC[2]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time4, field: Fields.Field2,
        teamA: this.generateTeamName(groupC[1]), teamB: this.generateTeamName(groupC[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time4, field: Fields.Field3,
        teamA: this.generateTeamName(groupD[0]), teamB: this.generateTeamName(groupD[2]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time4, field: Fields.Field4,
        teamA: this.generateTeamName(groupD[1]), teamB: this.generateTeamName(groupD[3]),
        resultA: 0, resultB: 0
      },
      //Round 3 - AB
      {
        code: '',
        time: this.time5, field: Fields.Field1,
        teamA: this.generateTeamName(groupA[0]), teamB: this.generateTeamName(groupA[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time5, field: Fields.Field2,
        teamA: this.generateTeamName(groupA[1]), teamB: this.generateTeamName(groupA[2]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time5, field: Fields.Field3,
        teamA: this.generateTeamName(groupB[0]), teamB: this.generateTeamName(groupB[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time5, field: Fields.Field4,
        teamA: this.generateTeamName(groupB[1]), teamB: this.generateTeamName(groupB[2]),
        resultA: 0, resultB: 0
      },
      //Round 3 - CD
      {
        code: '',
        time: this.time6, field: Fields.Field1,
        teamA: this.generateTeamName(groupC[0]), teamB: this.generateTeamName(groupC[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time6, field: Fields.Field2,
        teamA: this.generateTeamName(groupC[1]), teamB: this.generateTeamName(groupC[2]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time6, field: Fields.Field3,
        teamA: this.generateTeamName(groupD[0]), teamB: this.generateTeamName(groupD[3]),
        resultA: 0, resultB: 0
      },
      {
        code: '',
        time: this.time6, field: Fields.Field4,
        teamA: this.generateTeamName(groupD[1]), teamB: this.generateTeamName(groupD[2]),
        resultA: 0, resultB: 0
      }
      // Add more divisions as needed
    ];
  }

  constructor(private route: ActivatedRoute, private commonFunctions: CommonFunctions, private navCtrl: NavController) {
    //only use when starting from page home

    this.teamAssignments = this.route.snapshot.queryParams;
    //this.teamAssignments = JSON.parse(data);
    //this.route.queryParams['groupA']
    // console.log('this.teamAssignments', this.teamAssignments);
    // this.groupA = JSON.parse(this.teamAssignments?.groupA);
    // this.groupB = JSON.parse(this.teamAssignments?.groupB);
    // this.groupC = JSON.parse(this.teamAssignments?.groupC);
    // this.groupD = JSON.parse(this.teamAssignments?.groupD);

    this.commonFunctions.enableMenuSwipe();
    //groupA: Teams.VietUnitedFC, Teams.KWFC, Teams.Stechco2, Teams.BFC
    this.groupA = [DataInfo.SeedsTeam[1], DataInfo.OntarioTeams[2], DataInfo.QuebecTeams[2], DataInfo.OntarioTeams[3]];
    //groupB: Teams.CalgaryVFC, Teams.SFC, Teams.FCAE, Teams.YGOfVN
    this.groupB = [DataInfo.SeedsTeam[3], DataInfo.QuebecTeams[0], DataInfo.OntarioTeams[5], DataInfo.OntarioTeams[4]];
    //groupC: Teams.CICC, Teams.LankFC, Teams.RBJunior, Teams.VMU
    this.groupC = [DataInfo.SeedsTeam[2], DataInfo.OntarioTeams[6], DataInfo.QuebecTeams[4], DataInfo.QuebecTeams[1]];
    //groupD: Teams.Stechco1, Teams.FC3Mien, Teams.CTC, Teams.FCKingston
    this.groupD = [DataInfo.SeedsTeam[0], DataInfo.QuebecTeams[3], DataInfo.OntarioTeams[0], DataInfo.OntarioTeams[1]];
  }

  ngOnInit() {
    this.generateDivisions(this.groupA, this.groupB, this.groupC, this.groupD);
  }

  generateTeams() {
    this.navCtrl.navigateRoot('home');
  }
}
