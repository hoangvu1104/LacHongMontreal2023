import { Component, OnInit } from '@angular/core';
import { Division } from 'src/models/Division';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Fields } from 'src/shared/fields';

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
        teamA: 'Nhất Bảng (#1)', teamB: 'Nhì Bảng (#1)',
        resultA: 0, resultB: 0
      },
      {
        code: "QF12",
        time: this.time1, field: Fields.Field2,
        teamA: 'Nhất Bảng (#2)', teamB: 'Nhì Bảng (#2)',
        resultA: 0, resultB: 0
      },
      {
        code: "QF13",
        time: this.time1, field: Fields.Field3,
        teamA: 'Nhất Bảng (#3)', teamB: 'Nhì Bảng (#3)',
        resultA: 0, resultB: 0
      },
      {
        code: "QF14",
        time: this.time1, field: Fields.Field4,
        teamA: 'Nhất Bảng (#4)', teamB: 'Nhì Bảng (#4)',
        resultA: 0, resultB: 0
      },
      //'9h45-10h45' - QF Division 2
      {
        code: "QF21",
        time: this.time2, field: Fields.Field1,
        teamA: 'Ba Bảng (#1)', teamB: 'Tư Bảng (#1)',
        resultA: 0, resultB: 0
      },
      {
        code: "QF22",
        time: this.time2, field: Fields.Field2,
        teamA: 'Ba Bảng (#2)', teamB: 'Tư Bảng (#2)',
        resultA: 0, resultB: 0
      },
      {
        code: "QF23",
        time: this.time2, field: Fields.Field3,
        teamA: 'Ba Bảng (#3)', teamB: 'Tư Bảng (#3)',
        resultA: 0, resultB: 0
      },
      {
        code: "QF24",
        time: this.time2, field: Fields.Field4,
        teamA: 'Ba Bảng (#4)', teamB: 'Tư Bảng (#4)',
        resultA: 0, resultB: 0
      },
      //'11h-12h' - SF Division 1-2
      {
        code: "SF11",
        time: this.time2, field: Fields.Field1,
        teamA: 'WIN QF11', teamB: 'WIN QF13',
        resultA: 0, resultB: 0
      },
      {
        code: "SF12",
        time: this.time2, field: Fields.Field2,
        teamA: 'WIN QF12', teamB: 'WIN QF14',
        resultA: 0, resultB: 0
      },
      {
        code: "SF21",
        time: this.time2, field: Fields.Field3,
        teamA: 'WIN QF21', teamB: 'WIN QF23',
        resultA: 0, resultB: 0
      },
      {
        code: "SF22",
        time: this.time2, field: Fields.Field4,
        teamA: 'WIN QF22', teamB: 'WIN QF24',
        resultA: 0, resultB: 0
      }
    ];
    // Final
    this.finals = [
      {
        code: "TP1",
        time: this.time2, field: Fields.Field2,
        teamA: 'LOSE SF11', teamB: 'LOSE SF12',
        resultA: 4, resultB: 1
      },
      {
        code: "TP2",
        time: this.time2, field: Fields.Field3,
        teamA: 'LOSE SF21', teamB: 'LOSE SF22',
        resultA: 6, resultB: 1
      },
      {
        code: "FN2",
        time: this.time2, field: Fields.Field4,
        teamA: 'WIN SF21', teamB: 'WIN SF22',
        resultA: 2, resultB: 0
      }
    ];
    this.finalD1 = [{
      code: "FN1",
      time: this.time3, field: Fields.Field4,
      teamA: 'WIN SF11', teamB: 'WIN SF12',
      resultA: 1, resultB: 1
    }];
  }
}
