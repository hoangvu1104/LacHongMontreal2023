import { Component, OnInit } from '@angular/core';
import { TeamResult } from 'src/models/TeamResult';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.page.html',
  styleUrls: ['./table-result.page.scss'],
})
export class TableResultPage implements OnInit {
  teamResultGroupA: TeamResult[] = [];
  teamResultGroupB: TeamResult[] = [];
  teamResultGroupC: TeamResult[] = [];
  teamResultGroupD: TeamResult[] = [];
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';
  constructor(public commonFunctions: CommonFunctions) { }

  changeDisplayImages() {
    this.displayLogo = !this.displayLogo;
    if (this.displayLogo) {
      this.message = 'Hiển thị logo';
    }
    else {
      this.message = 'Hiển thị màu áo';
    }
  }

  ngOnInit() {
    this.teamResultGroupA = [
      {
        teamName: Teams.VietUnitedFC,
        point: 9,
        won: 3,//1-1-1
        lost: 0,
        draw: 0,
        goalsFor: 19,//7+9+3
        goalsAgainst: 2,//1+0+1
        yellowCards: 0,//0+0+5
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.KWFC,
        point: 0,
        won: 0,
        lost: 3,
        draw: 0,
        goalsFor: 4,//1+1+2
        goalsAgainst: 20,//7+8+5
        yellowCards: 4,//2+1+1
        redCards: 1//0+0+1
      },
      {
        teamName: Teams.Stechco2,
        point: 3,
        won: 1,
        lost: 2,
        draw: 0,
        goalsFor: 7,//2+0+5
        goalsAgainst: 17,//6+9+2
        yellowCards: 2,//1+0+1
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.BFC,
        point: 6,
        won: 2,
        lost: 1,
        draw: 0,
        goalsFor: 15,//6+8+1
        goalsAgainst: 6,//2+1+3
        yellowCards: 5,//0+1+4
        redCards: 0//0+0+0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });

    this.teamResultGroupB = [
      {
        teamName: Teams.CalgaryVFC,
        point: 3,
        won: 1,
        lost: 2,
        draw: 0,
        goalsFor: 7,//5+1+1
        goalsAgainst: 9,//1+5+3
        yellowCards: 3,//1+0+2
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.SFC,
        point: 0,
        won: 0,
        lost: 3,
        draw: 0,
        goalsFor: 3,//1+2+0
        goalsAgainst: 13,//5+4+4
        yellowCards: 2,//0+2+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.FCAE,
        point: 9,
        won: 3,
        lost: 0,
        draw: 0,
        goalsFor: 11,//3+4+4
        goalsAgainst: 2,//0+2+0
        yellowCards: 7,//5+2+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.YGOfVN,
        point: 6,
        won: 2,
        lost: 1,
        draw: 0,
        goalsFor: 7,//0+4+3
        goalsAgainst: 6,//3+2+1
        yellowCards: 4,//0+2+2
        redCards: 0//0+0+0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });

    this.teamResultGroupC = [
      {
        teamName: Teams.CICC,
        point: 7,
        won: 2,
        lost: 0,
        draw: 1,
        goalsFor: 18,//5+2+11
        goalsAgainst: 4,//2+2+0
        yellowCards: 3,//1+2+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.LankFC,
        point: 6,
        won: 2,
        lost: 1,
        draw: 0,
        goalsFor: 17,//2+10+5
        goalsAgainst: 8,//5+1+2
        yellowCards: 1,//0+0+1
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.RBJunior,
        point: 4,
        won: 1,
        lost: 1,
        draw: 1,
        goalsFor: 8,//4+2+2
        goalsAgainst: 8,//1+2+5
        yellowCards: 1,//1+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.VMU,
        point: 0,
        won: 0,
        lost: 3,
        draw: 0,
        goalsFor: 2,//1+1+1
        goalsAgainst: 25,//4+10+11
        yellowCards: 2,//0+0+2
        redCards: 0//0+0+0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });

    this.teamResultGroupD = [
      {
        teamName: Teams.Stechco1,
        point: 6,
        won: 2,
        lost: 1,
        draw: 0,
        goalsFor: 12,//1+4+7
        goalsAgainst: 4,//2+0+2
        yellowCards: 4,//0+2+2
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.FC3Mien,
        point: 9,
        won: 3,
        lost: 0,
        draw: 0,
        goalsFor: 18,//2+10+6
        goalsAgainst: 2,//1+0+1
        yellowCards: 0,//1+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.CTC,
        point: 3,
        won: 1,
        lost: 2,
        draw: 0,
        goalsFor: 4,//3+0+1
        goalsAgainst: 11,//1+4+6
        yellowCards: 3,//2+1+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.FCKingston,
        point: 0,
        won: 0,
        lost: 3,
        draw: 0,
        goalsFor: 3,//0+0+2
        goalsAgainst: 20,//3+10+7
        yellowCards: 2,//1+0+1
        redCards: 0//0+0+0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });
  }
}
