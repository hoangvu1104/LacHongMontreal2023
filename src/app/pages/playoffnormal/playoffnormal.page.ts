import { Component, OnInit } from '@angular/core';
import { Division } from 'src/models/Division';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Fields } from 'src/shared/fields';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-playoffnormal',
  templateUrl: './playoffnormal.page.html',
  styleUrls: ['./playoffnormal.page.scss'],
})
export class PlayoffnormalPage implements OnInit {
  playoffs: Division[] = [];
  finals: Division[] = [];
  finalD1: Division[] = [];
  time1: string = '8h30-9h30';
  time2: string = '9h45-10h45';
  time3: string = '11h-12h';
  time4: string = '13h-14h';
  time5: string = '14h15-15h15';
  constructor(public commonFunctions: CommonFunctions) {
    this.commonFunctions.enableMenuSwipe();
    this.initData();
  }

  ngOnInit() {
  }

  initData() {
    this.playoffs = [
      //'8h30-9h30' - QF Division 1
      {
        code: "QF11",
        time: this.time1, field: Fields.Field1,
        teamA: Teams.CICC_Star, teamB: Teams.Stechco1,
        resultA: 1, resultB: 1, ref: ''
      },
      {
        code: "QF12",
        time: this.time1, field: Fields.Field2,
        teamA: Teams.VietUnitedFC, teamB: Teams.LankFC,
        resultA: 4, resultB: 1, ref: 'Fakhri'
      },
      {
        code: "QF13",
        time: this.time1, field: Fields.Field3,
        teamA: Teams.FCAE, teamB: Teams.BFC,
        resultA: 3, resultB: 5, ref: 'Adam'
      },
      {
        code: "QF14",
        time: this.time1, field: Fields.Field4,
        teamA: Teams.FC3Mien, teamB: Teams.YGOfVN,
        resultA: 3, resultB: 1, ref: ''
      },
      //'9h45-10h45' - QF Division 2
      {
        code: "QF21",
        time: this.time2, field: Fields.Field1,
        teamA: Teams.CTC, teamB: Teams.SFC,
        resultA: 1, resultB: 3, ref: 'Walid'
      },
      {
        code: "QF22",
        time: this.time2, field: Fields.Field2,
        teamA: Teams.RBJunior, teamB: Teams.KWFC,
        resultA: 7, resultB: 3, ref: 'Fakhri'
      },
      {
        code: "QF23",
        time: this.time2, field: Fields.Field3,
        teamA: Teams.Stechco2, teamB: Teams.FCKingston,
        resultA: 2, resultB: 1, ref: 'Adam'
      },
      {
        code: "QF24",
        time: this.time2, field: Fields.Field4,
        teamA: Teams.CalgaryVFC, teamB: Teams.VMU,
        resultA: 1, resultB: 4, ref: 'Rami'
      },
      //'11h-12h' - SF Division 1-2
      {
        code: "SF11",
        time: this.time3, field: Fields.Field1,
        teamA: Teams.CICC, teamB: Teams.BFC,
        resultA: 0, resultB: 0, ref: ''
      },
      {
        code: "SF12",
        time: this.time3, field: Fields.Field2,
        teamA: Teams.VietUnitedFC, teamB: Teams.FC3Mien,
        resultA: 0, resultB: 0, ref: ''
      },
      {
        code: "SF21",
        time: this.time3, field: Fields.Field3,
        teamA: Teams.SFC, teamB: Teams.Stechco2,
        resultA: 0, resultB: 0, ref: ''
      },
      {
        code: "SF22",
        time: this.time3, field: Fields.Field4,
        teamA: Teams.RBJunior, teamB: Teams.VMU,
        resultA: 0, resultB: 0, ref: ''
      }
    ];
    // Final
    this.finals = [
      {
        code: "TP1",
        time: this.time4, field: Fields.Field2,
        teamA: 'LOSE SF11', teamB: 'LOSE SF12',
        resultA: 0, resultB: 0, ref: ''
      },
      {
        code: "TP2",
        time: this.time4, field: Fields.Field3,
        teamA: 'LOSE SF21', teamB: 'LOSE SF22',
        resultA: 0, resultB: 0, ref: ''
      },
      {
        code: "FN2",
        time: this.time4, field: Fields.Field4,
        teamA: 'WIN SF21', teamB: 'WIN SF22',
        resultA: 0, resultB: 0, ref: ''
      }
    ];
    this.finalD1 = [{
      code: "FN1",
      time: this.time5, field: Fields.Field4,
      teamA: 'WIN SF11', teamB: 'WIN SF12',
      resultA: 0, resultB: 0, ref: ''
    }];
  }
}
