import { Component, OnInit } from '@angular/core';
import { DataInfo } from 'src/data/DataInfo';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.page.html',
  styleUrls: ['./player-result.page.scss'],
})
export class PlayerResultPage implements OnInit {
  playerResults: Player[] = [];
  showGoalsStatic = true;
  showAssistsStatic = false;
  showYellowCardsStatic = false;
  showRedCardsStatic = false;
  displayTitle = '';
  constructor() {

  }

  changValue(event: any) {
    this.showGoalsStatic = event.detail.value === 'goals';
    this.showAssistsStatic = event.detail.value === 'assists';
    this.showYellowCardsStatic = event.detail.value === 'yellowCards';
    this.showRedCardsStatic = event.detail.value === 'redCards';
    this.playerResults = [];
    this.showPlayersResult();
  }

  ngOnInit() {
    this.showPlayersResult();
  }

  showPlayersResult() {
    if (this.showGoalsStatic) {
      this.displayTitle = 'Danh sách cầu thủ ghi bàn';
    } else if (this.showAssistsStatic) {
      this.displayTitle = 'Danh sách cầu thủ kiến tạo';
    } else if (this.showYellowCardsStatic) {
      this.displayTitle = 'Danh sách nhận thẻ vàng';
    } else {
      this.displayTitle = 'Danh sách nhận thẻ đỏ';
    }
    this.playerResults.push(
      ...DataInfo.VietUnitedFCPlayers.teamMembers, ...DataInfo.CalgaryVFCPlayers.teamMembers, ...DataInfo.Stechco1Players.teamMembers,
      ...DataInfo.Stechco2Players.teamMembers, ...DataInfo.SFCPlayers.teamMembers, ...DataInfo.VMUPlayers.teamMembers,
      ...DataInfo.FC3MienPlayers.teamMembers, ...DataInfo.RBJuniorPlayers.teamMembers, ...DataInfo.CICCPlayers.teamMembers,
      ...DataInfo.CTCPlayers.teamMembers, ...DataInfo.FCKingstonPlayers.teamMembers, ...DataInfo.KWFCPlayers.teamMembers,
      ...DataInfo.BFCPlayers.teamMembers, ...DataInfo.YGOfVNPlayers.teamMembers, ...DataInfo.FCAEPlayers.teamMembers,
      ...DataInfo.LankFCPlayers.teamMembers);
    this.playerResults = this.playerResults
      .filter((p) => {
        if (this.showGoalsStatic) {
          return p.goals > 0;
        } else if (this.showAssistsStatic) {
          return p.assists > 0;
        } else if (this.showYellowCardsStatic) {
          return p.yellowCards > 0;
        } else {
          return p.redCards > 0;
        }
      })
      .sort((a, b) => {
        if (this.showGoalsStatic) {
          return b.goals - a.goals;
        } else {
          return b.assists - a.assists;
        }
      });
  }
}
