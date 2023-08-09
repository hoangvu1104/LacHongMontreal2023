import { Component, OnInit } from '@angular/core';
import { PlayerResult } from 'src/models/PlayerResult';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.page.html',
  styleUrls: ['./player-result.page.scss'],
})
export class PlayerResultPage implements OnInit {
  playerResults: PlayerResult[] = [];
  showGoalsStatic = true;
  displayTitle = '';
  constructor() {
    this.showPlayersResult();
  }

  changValue(event: any) {
    this.showGoalsStatic = event.detail.value === 'goals';
    this.showPlayersResult();
  }

  ngOnInit() { }

  showPlayersResult() {
    if (this.showGoalsStatic) {
      this.displayTitle = 'Danh sách cầu thủ ghi bàn';
    } else {
      this.displayTitle = 'Danh sách cầu thủ kiến tạo';
    }

    this.playerResults = [
      {
        teamName: Teams.Stechco2,
        playerName: 'Bùi Quang Hiển',
        playerNumber: 23,
        goals: 3,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.Stechco2,
        playerName: 'Lê Huy Bình',
        playerNumber: 11,
        goals: 2,//1+1
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.Stechco2,
        playerName: 'Khương Hùng',
        playerNumber: 2,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.Stechco2,
        playerName: 'Đỗ Văn Trung',
        playerNumber: 9,
        goals: 2,//0+1+0+1
        assists: 3,//1+0+2
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.Stechco2,
        playerName: 'Đỗ Văn Trung',
        playerNumber: 5,
        goals: 0,//0+0+0+0
        assists: 1,//0+0+0+1
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.Stechco2,
        playerName: 'Hoàng Estenban',
        playerNumber: 48,
        goals: 1,
        assists: 4,//3+0+1
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.Stechco2,
        playerName: 'Nguyễn Công Long',
        playerNumber: 28,
        goals: 3,//2+0+1
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco2,
        playerName: 'Huynh Hai',
        playerNumber: 77,
        goals: 2,//0+0+1+1
        assists: 1,//1+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco2,
        playerName: 'Nguyễn Nam (3M)',
        playerNumber: 39,
        goals: 2,//0+0+2
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco2,
        playerName: 'Tôn Việt Hưng',
        playerNumber: 36,
        goals: 1,//0+0+1
        assists: 0,//0+0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco2,
        playerName: 'Sỹ Quý',
        playerNumber: 16,
        goals: 1,//0+0+1
        assists: 0,//0+0+0
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.RBJunior,
        playerName: 'Võ Dương Huy',
        playerNumber: 20,
        goals: 7,//3+0+4
        assists: 4,//1+0+2+1
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.RBJunior,
        playerName: 'Trần Kevin',
        playerNumber: 11,
        goals: 3,//2+0+1
        assists: 4,//3+0+1
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.RBJunior,
        playerName: 'Phạm Hoàng Anh',
        playerNumber: 22,
        goals: 2,//1+1
        assists: 1,//1+0
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.RBJunior,
        playerName: 'Ngô Bá Tuyên',
        playerNumber: 7,
        goals: 2,
        assists: 2,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.RBJunior,
        playerName: 'Nguyễn Hoàng Quốc Anh',
        playerNumber: 25,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.RBJunior,
        playerName: 'Võ Hoàng Khương',
        playerNumber: 24,
        goals: 4,//1+0+3
        assists: 2,//0+0+2
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.RBJunior,
        playerName: 'Ngô Tiến Đạt',
        playerNumber: 6,
        goals: 1,//0+0+1
        assists: 5,//0+1+3+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.RBJunior,
        playerName: 'Bùi Phan Tùng',
        playerNumber: 26,
        goals: 0,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.RBJunior,
        playerName: 'Anthony Vu',
        playerNumber: 4,
        goals: 0,
        assists: 2,//1+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.RBJunior,
        playerName: 'Vuong Dinh Hoan',
        playerNumber: 16,
        goals: 4,//0+0+1+1+2
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.RBJunior,
        playerName: 'Tuan Nguyen',
        playerNumber: 0,
        goals: 2,//0+0+2
        assists: 2,//0+1+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.VMU,
        playerName: 'Công Hoan Nguyễn',
        playerNumber: 88,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.VMU,
        playerName: 'Hồ Trung Kiên',
        playerNumber: 99,
        goals: 2,//0+0+2
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.VMU,
        playerName: 'Thái Trần Minh Phát',
        playerNumber: 8,
        goals: 0,
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.VMU,
        playerName: 'Nam Vũ',
        playerNumber: 33,
        goals: 0,
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.VMU,
        playerName: 'Văn Nhật Nguyên',
        playerNumber: 91,
        goals: 1,//0+1
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.VMU,
        playerName: 'Nguyễn Anh Kiệt',
        playerNumber: 91,
        goals: 0,
        assists: 1,//0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Cuong Nguyen',
        playerNumber: 20,
        goals: 1,//0+1
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Duy Tran Si',
        playerNumber: 27,
        goals: 3,//0+3
        assists: 1,//0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Nguyen Van Phuc',
        playerNumber: 26,
        goals: 1,//0+1
        assists: 0,//0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Tam Le',
        playerNumber: 25,
        goals: 3,//0+2+1
        assists: 0,//0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Tam Le',
        playerNumber: 11,
        goals: 0,//0+0
        assists: 1,//0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Tam Le',
        playerNumber: 38,
        goals: 0,//0+0
        assists: 2,//0+1+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Tam Le',
        playerNumber: 28,
        goals: 0,//0+0
        assists: 1,//0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Quang Pham',
        playerNumber: 11,
        goals: 3,//0+1+2
        assists: 0,//0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Duc Loc Tran',
        playerNumber: 99,
        goals: 3,//0+0+3
        assists: 0,//0+0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Ha Nguyen',
        playerNumber: 21,
        goals: 2,//0+0+2
        assists: 2,//0+0+2
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Huu Tai Tran',
        playerNumber: 10,
        goals: 2,//0+0+2
        assists: 4,//0+0+4
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Bao Tran',
        playerNumber: 8,
        goals: 1,//0+0+1
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Vy To',
        playerNumber: 15,
        goals: 2,//0+0+2
        assists: 2,//0+0+2
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.FC3Mien,
        playerName: 'Phu Nguyen',
        playerNumber: 9,
        goals: 1,//0+0+1
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Nam Neo Vancouver',
        playerNumber: 28,
        goals: 2,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Tú Quách',
        playerNumber: 32,
        goals: 1,//1+0
        assists: 2,//1+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Phụng Minh',
        playerNumber: 55,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Nguyễn Ngọc Dũng',
        playerNumber: 40,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Trần Tuấn',
        playerNumber: 27,
        goals: 6,//1+1+2+1+1
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Minh Triết',
        playerNumber: 18,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Lê Nhật',
        playerNumber: 8,
        goals: 0,
        assists: 3,//2+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Cường Nguyễn',
        playerNumber: 35,
        goals: 0,
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.Stechco1,
        playerName: 'Phạm Hoàng Bảo',
        playerNumber: 7,
        goals: 0,
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Kyan Nguyễn',
        playerNumber: 82,
        goals: 2,//1+1
        assists: 2,//0+2
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Nguyễn Đức Anh',
        playerNumber: 34,
        goals: 1,//1+0
        assists: 0,//0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Hồ Minh Trúc',
        playerNumber: 77,
        goals: 1,//0+1
        assists: 3,//1+1+1
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.BFC,
        playerName: 'Tâm Nguyễn',
        playerNumber: 17,
        goals: 1,//0+1
        assists: 1,//0+1
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.BFC,
        playerName: 'Dũng Hoàng',
        playerNumber: 19,
        goals: 2,//1+1
        assists: 1,//1+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Luu Chi Duc',
        playerNumber: 16,
        goals: 1,//0+1
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Nguyen Duc Bao Toan',
        playerNumber: 8,
        goals: 1,//0+1
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Tran Ngoc Hoang Quan',
        playerNumber: 14,
        goals: 2,//0+2
        assists: 0,//0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Le The Dai Phong',
        playerNumber: 11,
        goals: 0,//0+0+0
        assists: 1,//0+0+1
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'The Hung',
        playerNumber: 6,
        goals: 4,//0+0+3+1
        assists: 0,//0+0+0
        yellowCards: 0,
        redCards: 0,
      },{
        teamName: Teams.BFC,
        playerName: 'Van Truong An',
        playerNumber: 12,
        goals: 1,//0+0+0+1
        assists: 0,//0+0+0+0
        yellowCards: 0,
        redCards: 0,
      }
    ].filter((p) =>{
      if (this.showGoalsStatic) {
        return p.goals > 0;
      } else {
        return p.assists > 0;
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
