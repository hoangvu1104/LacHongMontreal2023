import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticVariable } from 'src/shared/staticVariable';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage implements OnInit {
  teamInfo: any;
  teamName: any;

  constructor(private route: ActivatedRoute) {
    this.getTeamInfo(Teams.FC3Mien);
  }

  getTeamInfo(teamName: string) {
    switch (teamName) {
      case Teams.FC3Mien:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.FC3MienLogo}`,
          teamMembers: [
            {
              playerName: 'Thinh Ngo (C)',
              playerNumber: 4,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Thao Tran',
              playerNumber: 5,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Ha Nguyen',
              playerNumber: 21,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Truong Pham',
              playerNumber: 39,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Cuong Nguyen',
              playerNumber: 32,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Tung Nguyen',
              playerNumber: 19,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Tung Uong',
              playerNumber: 17,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phuoc Nguyen',
              playerNumber: 2,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Duc Loc Tran',
              playerNumber: 99,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Bao Tran',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phi Hung Phan',
              playerNumber: 29,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phu Nguyen',
              playerNumber: 9,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Trong Luat Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hanh Van',
              playerNumber: 7,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Xuan Nhu Le',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Huu Khoi Pham',
              playerNumber: 30,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Quang Pham',
              playerNumber: 11,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Vy To',
              playerNumber: 15,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Huu Tai Tran',
              playerNumber: 10,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Bao Phan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Kiet Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Huu Tai Pham',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Van Thanh Ho',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phuoc Pham',
              playerNumber: 1,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.BFC:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.BFCLogo}`,
          teamMembers: [
            {
              playerName: 'Nguyen Duc Bao Toan (C)',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Le The Dai Phong',
              playerNumber: 11,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Luu Chi Duc',
              playerNumber: 16,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Ho Minh Truc',
              playerNumber: 82,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tran Quoc Viet',
              playerNumber: 4,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Van Truong An',
              playerNumber: 12,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Xuan Dinh',
              playerNumber: 2,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Cubon Nguyen',
              playerNumber: 13,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Cong Khang',
              playerNumber: 20,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tran Ngoc Hong Quan',
              playerNumber: 14,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Duc Anh',
              playerNumber: 34,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Kyan Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Dung Hoang',
              playerNumber: 19,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Vu Dinh Duc',
              playerNumber: 10,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'The Hung',
              playerNumber: 77,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tam Nguyen',
              playerNumber: 7,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Thang Do',
              playerNumber: 21,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hoang Truong',
              playerNumber: 28,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Huy Tran',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco1:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            {
              playerName: 'Phạm Hoàng Bảo (C)',
              playerNumber: 7,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Lê Hưng',
              playerNumber: 22,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Kiều Cường',
              playerNumber: 41,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Ngọc Dũng',
              playerNumber: 40,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Phụng Minh',
              playerNumber: 55,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nam Neo Vancouver',
              playerNumber: 28,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hoang Minh',
              playerNumber: 1,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Son Dac',
              playerNumber: 24,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Le Nhat',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tran Tuan',
              playerNumber: 27,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tu Quach',
              playerNumber: 32,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Cuong Nguyen',
              playerNumber: 35,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Duy',
              playerNumber: 39,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Huynh Thanh',
              playerNumber: 55,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Pham Quang',
              playerNumber: 30,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Minh Triết',
              playerNumber: 18,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco2:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            {
              playerName: 'Đào Hà (C)',
              playerNumber: 3,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Bình',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Thái Phước',
              playerNumber: 13,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Phạm Nhã',
              playerNumber: 29,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Khương Hùng',
              playerNumber: 2,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Khanh',
              playerNumber: 16,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Bùi Quang Hiển',
              playerNumber: 23,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Nam (3M)',
              playerNumber: 39,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tôn Việt Hưng',
              playerNumber: 36,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trương Tiến Dũng',
              playerNumber: 15,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Lê Huy Bình',
              playerNumber: 11,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Minh Granby',
              playerNumber: 35,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hoang Esteban',
              playerNumber: 48,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đỗ Văn Trung',
              playerNumber: 9,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Huỳnh Hai',
              playerNumber: 77,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Cong Long',
              playerNumber: 28,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Sỹ Quý',
              playerNumber: 6,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.VMU:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
          teamMembers: [
            {
              playerName: 'Hoàng Trung Kiên',
              playerNumber: 55,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Phạm Hoàng Vũ',
              playerNumber: 10,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Alexandre Đặng Minh Nhân',
              playerNumber: 86,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Vũ Đoàn Gia Huy',
              playerNumber: 18,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Hoàng Tuấn (C)',
              playerNumber: 96,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Văn Nhật Nguyên',
              playerNumber: 91,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Đặng Anh Vũ',
              playerNumber: 47,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Xuân Bách',
              playerNumber: 24,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Hoàng Lân',
              playerNumber: 84,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },  {
              playerName: 'Lâm Quốc Cường',
              playerNumber: 34,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Lê Bảo Đăng',
              playerNumber: 89,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Việt Nam',
              playerNumber: 22,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hà Tuấn Khôi',
              playerNumber: 43,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, 
            {
              playerName: 'Nguyễn Anh Kiệt',
              playerNumber: 55,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Bùi Trần Thiên Phú',
              playerNumber: 57,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Hoàng Thịnh',
              playerNumber: 42,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.VMU:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
          teamMembers: [
            {
              playerName: 'Lê Thanh Hùng',
              playerNumber: 55,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Lê Thành Đạt',
              playerNumber: 3,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Nguyễn Thái Sơn',
              playerNumber: 66,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Vũ Thắng',
              playerNumber: 9,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hồ Trung Kiên',
              playerNumber: 99,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Tuấn Hào',
              playerNumber: 6,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Thái Trần Minh Phát',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Văn Bình',
              playerNumber: 4,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Trung Tín',
              playerNumber: 5,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trương Minh Lương',
              playerNumber: 100,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Công Hoan Nguyễn',
              playerNumber: 88,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Trung An (C)',
              playerNumber: 7,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Thanh Duẫn',
              playerNumber: 77,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Đông',
              playerNumber: 44,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đào Duy Khánh',
              playerNumber: 58,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Ngọc Duy',
              playerNumber: 21,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Steve Hà',
              playerNumber: 81,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.RBJunior:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.RBJuniorLogo}`,
          teamMembers: [
            {
              playerName: 'Vuong Dinh Hoan (C)',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Le An Vinh',
              playerNumber: 15,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tran Kevin',
              playerNumber: 11,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Vo Hoang Khuong',
              playerNumber: 28,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Ngo Ba Tuyen',
              playerNumber: 17,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Ngo Tien Dat',
              playerNumber: 29,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Truong Nguyen',
              playerNumber: 6,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Hoang Quoc Anh',
              playerNumber: 25,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Vo Duong Huy',
              playerNumber: 20,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Duong Quang Huy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Pham Hoang Anh',
              playerNumber: 22,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Minh Hoang',
              playerNumber: 23,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Dung Nho',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Anthony Vu',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Pham Le Anh Tuan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Dang Nhat Minh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Ngoc Anh Huy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Phan Dinh Bao Long',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Dinh Hoang Lan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Bui Phan Tung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Bùi Cao Sơn',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Steve Hoang',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco1:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            {
              playerName: 'Nguyen V. Tuong (C)',
              playerNumber: 12,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Bang Nguyen',
              playerNumber: 15,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Uy Nguyen',
              playerNumber: 5,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tam Vo',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tam Le',
              playerNumber: 25,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyen Van Phuc',
              playerNumber: 26,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Duy Tran Si',
              playerNumber: 27,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Khoa Nguyen',
              playerNumber: 28,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hoang Thai Ca',
              playerNumber: 29,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Jimmy Nguyen',
              playerNumber: 18,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Cuong Nguyen',
              playerNumber: 30,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nhan Le',
              playerNumber: 31,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Dan Tran',
              playerNumber: 32,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Tung Do',
              playerNumber: 33,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Kim Le',
              playerNumber: 34,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
    }
  }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log('this.teamName', this.teamName);
    this.getTeamInfo(this.teamName);
  }
}
