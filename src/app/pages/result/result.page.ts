import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonFunctions } from '../../../shared/commonFunctions';
import { NavController } from '@ionic/angular';
import { Division } from 'src/models/Division';
import { Fields } from 'src/shared/fields';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})

export class ResultPage implements OnInit {
  teamAssignments: any;
  groupA: string[] = [];
  groupB: string[] = [];
  groupC: string[] = [];
  groupD: string[] = [];
  divisions: Division[] = [];

  time1: string = '8h30-9h30';
  time2: string = '9h45-10h45';
  time3: string = '11h-12h';
  time4: string = '13h-14h';
  time5: string = '14h15-15h15';
  time6: string = '15h30-16h30';

  generateDivisions(groupA: string[], groupB: string[], groupC: string[], groupD: string[]) {
    //get group A and B from page home
    this.divisions = [
      //Round 1 - AB
      {
        time: this.time1, field: Fields.Field1,
        teamA: groupA[0], teamB: groupA[1],
        resultA: 0, resultB: 0
      },
      {
        time: this.time1, field: Fields.Field2,
        teamA: groupA[2], teamB: groupA[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time1, field: Fields.Field3,
        teamA: groupB[0], teamB: groupB[1],
        resultA: 0, resultB: 0
      },
      {
        time: this.time1, field: Fields.Field4,
        teamA: groupB[2], teamB: groupB[3],
        resultA: 0, resultB: 0
      },
      //Round 1 - CD
      {
        time: this.time2, field: Fields.Field1,
        teamA: groupC[0], teamB: groupC[1],
        resultA: 0, resultB: 0
      },
      {
        time: this.time2, field: Fields.Field2,
        teamA: groupC[2], teamB: groupC[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time2, field: Fields.Field3,
        teamA: groupD[0], teamB: groupD[1],
        resultA: 0, resultB: 0
      },
      {
        time: this.time2, field: Fields.Field4,
        teamA: groupD[2], teamB: groupD[3],
        resultA: 0, resultB: 0
      },
      //Round 2 - AB
      {
        time: this.time3, field: Fields.Field1,
        teamA: groupA[0], teamB: groupA[2],
        resultA: 0, resultB: 0
      },
      {
        time: this.time3, field: Fields.Field2,
        teamA: groupA[1], teamB: groupA[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time3, field: Fields.Field3,
        teamA: groupB[0], teamB: groupB[2],
        resultA: 0, resultB: 0
      },
      {
        time: this.time3, field: Fields.Field4,
        teamA: groupB[1], teamB: groupB[3],
        resultA: 0, resultB: 0
      },
      //Round 2 - CD
      {
        time: this.time4, field: Fields.Field1,
        teamA: groupC[0], teamB: groupC[2],
        resultA: 0, resultB: 0
      },
      {
        time: this.time4, field: Fields.Field2,
        teamA: groupC[1], teamB: groupC[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time4, field: Fields.Field3,
        teamA: groupD[0], teamB: groupD[2],
        resultA: 0, resultB: 0
      },
      {
        time: this.time4, field: Fields.Field4,
        teamA: groupD[1], teamB: groupD[3],
        resultA: 0, resultB: 0
      },
      //Round 3 - AB
      {
        time: this.time5, field: Fields.Field1,
        teamA: groupA[0], teamB: groupA[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time5, field: Fields.Field2,
        teamA: groupA[1], teamB: groupA[2],
        resultA: 0, resultB: 0
      },
      {
        time: this.time5, field: Fields.Field3,
        teamA: groupB[0], teamB: groupB[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time5, field: Fields.Field4,
        teamA: groupB[1], teamB: groupB[2],
        resultA: 0, resultB: 0
      },
      //Round 3 - CD
      {
        time: this.time5, field: Fields.Field1,
        teamA: groupC[0], teamB: groupC[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time5, field: Fields.Field2,
        teamA: groupC[1], teamB: groupC[2],
        resultA: 0, resultB: 0
      },
      {
        time: this.time5, field: Fields.Field3,
        teamA: groupD[0], teamB: groupD[3],
        resultA: 0, resultB: 0
      },
      {
        time: this.time5, field: Fields.Field4,
        teamA: groupD[1], teamB: groupD[2],
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
    console.log('this.teamAssignments', this.teamAssignments);
    this.groupA = JSON.parse(this.teamAssignments?.groupA);
    this.groupB = JSON.parse(this.teamAssignments?.groupB);
    this.groupC = JSON.parse(this.teamAssignments?.groupC);
    this.groupD = JSON.parse(this.teamAssignments?.groupD);

    this.commonFunctions.enableMenuSwipe();
    // this.groupA = [Teams.VMU, Teams.Stechco2, Teams.VMU, Teams.RBJunior];
    // this.groupB = [Teams.FC3Mien, Teams.BFC, Teams.Stechco1, Teams.Stechco1];
  }

  ngOnInit() {
    this.generateDivisions(this.groupA, this.groupB, this.groupC, this.groupD);
  }

  generateTeams() {
    this.navCtrl.navigateRoot('home');
  }
}
