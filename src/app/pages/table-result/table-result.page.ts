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
        point: 6,
        won: 2,//1-1-0
        lost: 0,
        draw: 0,
        goalsFor: 16,//7+9+0
        goalsAgainst: 1,//1+0+0
        yellowCards: 0,//0+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.KWFC,
        point: 0,
        won: 0,
        lost: 2,
        draw: 0,
        goalsFor: 2,//1+1+0
        goalsAgainst: 15,//7+8+0
        yellowCards: 3,//2+1+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.Stechco2,
        point: 0,
        won: 0,
        lost: 2,
        draw: 0,
        goalsFor: 2,//2+0+0
        goalsAgainst: 15,//6+9+0
        yellowCards: 1,//1+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.BFC,
        point: 6,
        won: 2,
        lost: 0,
        draw: 0,
        goalsFor: 14,//6+8+0
        goalsAgainst: 3,//2+1+0
        yellowCards: 1,//0+1+0
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
        lost: 1,
        draw: 0,
        goalsFor: 6,//5+1+0
        goalsAgainst: 6,//1+5+0
        yellowCards: 1,//1+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.SFC,
        point: 0,
        won: 0,
        lost: 2,
        draw: 0,
        goalsFor: 3,//1+2+0
        goalsAgainst: 9,//5+4+0
        yellowCards: 2,//0+2+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.FCAE,
        point: 6,
        won: 2,
        lost: 0,
        draw: 0,
        goalsFor: 7,//3+4+0
        goalsAgainst: 2,//0+2+0
        yellowCards: 7,//5+2+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.YGOfVN,
        point: 3,
        won: 1,
        lost: 1,
        draw: 0,
        goalsFor: 4,//0+4+0
        goalsAgainst: 5,//3+2+0
        yellowCards: 2,//0+2+0
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
        point: 3,
        won: 1,
        lost: 0,
        draw: 0,
        goalsFor: 5,//5+0+0
        goalsAgainst: 2,//2+0+0
        yellowCards: 1,//0+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.LankFC,
        point: 0,
        won: 0,
        lost: 1,
        draw: 0,
        goalsFor: 2,//2+0+0
        goalsAgainst: 5,//5+0+0
        yellowCards: 0,//0+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.RBJunior,
        point: 3,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 4,//4+0+0
        goalsAgainst: 1,//1+0+0
        yellowCards: 1,//1+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.VMU,
        point: 0,
        won: 0,
        lost: 1,
        draw: 0,
        goalsFor: 1,//1+0+0
        goalsAgainst: 4,//4+0+0
        yellowCards: 0,//0+0+0
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
        point: 0,
        won: 0,
        lost: 1,
        draw: 0,
        goalsFor: 1,//1+0+0
        goalsAgainst: 2,//2+0+0
        yellowCards: 0,//0+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.FC3Mien,
        point: 3,
        won: 1,
        lost: 0,
        draw: 0,
        goalsFor: 2,//2+0+0
        goalsAgainst: 1,//1+0+0
        yellowCards: 0,//1+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.CTC,
        point: 3,
        won: 1,
        lost: 0,
        draw: 0,
        goalsFor: 3,//3+0+0
        goalsAgainst: 1,//1+0+0
        yellowCards: 2,//2+0+0
        redCards: 0//0+0+0
      },
      {
        teamName: Teams.FCKingston,
        point: 0,
        won: 1,
        lost: 0,
        draw: 0,
        goalsFor: 1,//0+0+0
        goalsAgainst: 3,//0+0+0
        yellowCards: 1,//1+0+0
        redCards: 0//0+0+0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
        (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor;
    });
  }
}
