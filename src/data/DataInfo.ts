import { Team } from "src/models/Team";
import { StaticVariable } from "src/shared/staticVariable";
import { Teams } from "src/shared/teams";

export class DataInfo {
  static QuebecProvince: string = 'QC';
  static AlbertaProvince: string = 'AB';
  static BritishColumbiaProvince: string = 'BC';
  static OntarioProvince: string = 'ON';
  static SeedsTeam: Team[] = [
    { name: Teams.Stechco1, province: DataInfo.QuebecProvince, club: 'Stechco' },
    { name: Teams.VietUnitedFC, province: DataInfo.BritishColumbiaProvince, club: 'VietUnitedFC' },
    { name: Teams.CICC, province: DataInfo.OntarioProvince, club: 'CICC' },
    { name: Teams.CalgaryVFC, province: DataInfo.AlbertaProvince, club: 'CalgaryVFC' }
  ];
  static OntarioTeams: Team[] = [
    //Ontario
    { name: Teams.CTC, province: DataInfo.OntarioProvince, club: 'CTC' },
    { name: Teams.FCKingston, province: DataInfo.OntarioProvince, club: 'FCKingston' },
    { name: Teams.KWFC, province: DataInfo.OntarioProvince, club: 'KWFC' },
    { name: Teams.BFC, province: DataInfo.OntarioProvince, club: 'BFC' },
    { name: Teams.YGOfVN, province: DataInfo.OntarioProvince, club: 'YGOfVN' },
    { name: Teams.FCAE, province: DataInfo.OntarioProvince, club: 'FCAE' },
    { name: Teams.LankFC, province: DataInfo.OntarioProvince, club: 'LankFC' }
  ];
  static QuebecTeams: Team[] = [
    //Quebec
    { name: Teams.SFC, province: DataInfo.QuebecProvince, club: 'SFC' },
    { name: Teams.VMU, province: DataInfo.QuebecProvince, club: 'VMU' },
    { name: Teams.Stechco2, province: DataInfo.QuebecProvince, club: 'Stechco' },
    { name: Teams.FC3Mien, province: DataInfo.QuebecProvince, club: 'FC3Mien' },
    { name: Teams.RBJunior, province: DataInfo.QuebecProvince, club: 'RBJunior' }
  ];

  //Players in each Team
  //BritishColumbia - VietUnitedFC (#1)
  static VietUnitedFCPlayers: any =
    {
      teamName: Teams.VietUnitedFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VietUnitedFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.VietUnitedFC,
          playerName: 'Cong Chinh Nguyen', //#1
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Cuong Nguyen', //#2
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Dat Nguyen', //#3
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Duc Hung Nguyen', //#4
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1980
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Hao Pham', //#5
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Hiep Do', //#6
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Huy Phuoc Cao', //#8
          playerNumber: 25,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1991
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Huy Phuoc Loc Cao', //#8
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1991
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Linh Hoang', //#9
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Mai Kien', //#10
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Nguyen Le', //#11
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1980
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Phuong Nam Nguyen', //#12
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1984
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Tai Tran', //#13
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1996
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Thanh Luan Le', //#14
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Van Quang Cao', //#15
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Vy Trinh', //#16
          playerNumber: 24,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1982
        }, {
          teamName: Teams.VietUnitedFC,
          playerName: 'Hồ Bá Phúc', //#17
          playerNumber: 22,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Alberta - CalgaryVFC (#1)
  static CalgaryVFCPlayers: any =
    {
      teamName: Teams.CalgaryVFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.CalgaryVFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.CalgaryVFC,
          playerName: 'Minh Mã', //#1
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1975
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Tôn Nguyễn (C)', //#2
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Vinh Tăng', //#3
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Thế Anh Trần', //#4
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1989
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Trọng Lương', //#5
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1989
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Hùng Nguyễn', //#6
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1991
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Khoa Đinh', //#7
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1987
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Nha Lê', //#8
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1992
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Steven Mã', //#9
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Toàn Nguyễn', //#10
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Hiếu Nguyễn', //#11
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Sơn Đinh', //#12
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1984
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Nhật Đinh', //#13
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1993
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Anh Vũ', //#14
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Vĩnh Kiều', //#15
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Nguyên Bùi', //#16
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1980
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Thanh Bùi', //#17
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.CalgaryVFC,
          playerName: 'Việt Mai', //#18
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - CICC (#1)
  static CICCPlayers: any =
    {
      teamName: Teams.CICC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.CICCLogo}`,
      teamMembers: [
        {
          teamName: Teams.CICC,
          playerName: 'Nam Dinh (C)', //#1
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.CICC,
          playerName: 'Huy Trinh', //#2
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }, {
          teamName: Teams.CICC,
          playerName: 'Quang Hoàng', //#3
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1991
        }, {
          teamName: Teams.CICC,
          playerName: 'Phuong Nguyen', //#4
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1987
        }, {
          teamName: Teams.CICC,
          playerName: 'Quỳnh Nguyễn', //#5
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.CICC,
          playerName: 'Tung Mai', //#6
          playerNumber: 33,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1994
        }, {
          teamName: Teams.CICC,
          playerName: 'Hoàn Cao', //#7
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.CICC,
          playerName: 'Sang Sang', //#8
          playerNumber: 66,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.CICC,
          playerName: 'Tuấn Anh Trịnh', //#9
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.CICC,
          playerName: 'Thế Bảo', //#10
          playerNumber: 24,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.CICC,
          playerName: 'Đạt Nguyễn', //#11
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }, {
          teamName: Teams.CICC,
          playerName: 'Tin Tran', //#12
          playerNumber: 25,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.CICC,
          playerName: 'Quốc Anh', //#13
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.CICC,
          playerName: 'Thiện Trần', //#14
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.CICC,
          playerName: 'Toàn Lê', //#15
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.CICC,
          playerName: 'Cường Phạm', //#16
          playerNumber: 86,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.CICC,
          playerName: 'Huy Thục', //#17
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        }, {
          teamName: Teams.CICC,
          playerName: 'Thắng Phạm', //#18
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.CICC,
          playerName: 'Hòa Phạm', //#19
          playerNumber: 38,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.CICC,
          playerName: 'Minh Nguyễn', //#20
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.CICC,
          playerName: 'Nguyễn Ngọc Tuấn', //#21
          playerNumber: 30,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - CTC (#2)
  static CTCPlayers: any =
    {
      teamName: Teams.CTC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.CTCLogo}`,
      teamMembers: [
        {
          teamName: Teams.CTC,
          playerName: 'Hoàng Xuân Quỳnh', //#1
          playerNumber: 92,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1992
        },
        {
          teamName: Teams.CTC,
          playerName: 'Bùi Anh Minh', //#2
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2005
        },
        {
          teamName: Teams.CTC,
          playerName: 'Trần Đại Dương', //#3
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        },
        {
          teamName: Teams.CTC,
          playerName: 'Tạ Thành Huân', //#4
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Tuấn Anh', //#5
          playerNumber: 28,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        },
        {
          teamName: Teams.CTC,
          playerName: 'Đỗ Tuấn Anh', //#6
          playerNumber: 42,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        },
        {
          teamName: Teams.CTC,
          playerName: 'Lê Đức Trung', //#7
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        },
        {
          teamName: Teams.CTC,
          playerName: 'Trung Đức', //#8
          playerNumber: 77,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        },
        {
          teamName: Teams.CTC,
          playerName: 'Đào Viết Thịnh', //#9
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Thành Nam', //#10
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        },
        {
          teamName: Teams.CTC,
          playerName: 'Đặng Tiến Dũng', //#11
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        },
        {
          teamName: Teams.CTC,
          playerName: 'Lê Đức Hùng', //#12
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Quốc Việt', //#13
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Đoàn', //#14
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        },
        {
          teamName: Teams.CTC,
          playerName: 'Phan Anh', //#15
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - FCKingston (#3)
  static FCKingstonPlayers: any =
    {
      teamName: Teams.FCKingston,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.FCKingstonLogo}`,
      teamMembers: [
        {
          teamName: Teams.FCKingston,
          playerName: 'BÙI QUANG THẮNG', //#1
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.FCKingston,
          playerName: 'PHẠM HOÀNG NAM',//#2
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.FCKingston,
          playerName: 'NGUYỄN TRƯỜNG SƠN',//#3
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }, {
          teamName: Teams.FCKingston,
          playerName: 'NGUYỄN QUỐC CHUNG',//#4
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCKingston,
          playerName: 'ĐOÀN QUỐC VƯƠNG',//#5
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.FCKingston,
          playerName: 'VŨ HOÀNG ANH',//#6
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.FCKingston,
          playerName: 'ĐỒNG TUẤN DƯƠNG',//#7
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.FCKingston,
          playerName: 'SÁNG LÊ',//#8
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.FCKingston,
          playerName: 'THÁI ZUBI',//#9
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.FCKingston,
          playerName: 'ĐẬU THẾ DIỆU',//#10
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.FCKingston,
          playerName: 'JACKSON BUI',//#11
          playerNumber: 22,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.FCKingston,
          playerName: 'NGUYỄN QUỐC HÙNG',//#12
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - KWFC (#4)
  static KWFCPlayers: any =
    {
      teamName: Teams.KWFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.KWFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.KWFC,
          playerName: 'Tony Duong', // #1
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Tín Trương', // #2
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Thắng Đào', // #3
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Lê Văn Luân', // #4
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Thế Cường', // #5
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Cao Quý', // #6
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Huỳnh Khôi Nguyên', // #7
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Phan Quang Minh', // #8
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Võ Trí Tài', // #9
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Trần Viết Bảo', // #10
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Nhân Võ', // #11
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Phan Văn Lê', // #12
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Văn Công Lãm', // #13
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Trần Văn Linh', // #14
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Viết Thành', // #15
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Trần Phan Thông', // #16
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Thành Trung', // #17
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - KWFC (#5)
  static BFCPlayers: any =
    {
      teamName: Teams.BFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.BFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.BFC,
          playerName: 'Nguyễn Đức Bảo Toàn (C)',  //#1
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.BFC,
          playerName: 'Lê Thế Đại Phong',  //#2
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.BFC,
          playerName: 'Lưu Chí Đức',  //#3
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.BFC,
          playerName: 'Trần Ngọc Hoàng Quân',  //#4
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.BFC,
          playerName: 'Tâm Nguyễn',  //#5
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1993
        }, {
          teamName: Teams.BFC,
          playerName: 'Thắng Đỗ',  //#6
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.BFC,
          playerName: 'Thế Hùng',  //#7
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.BFC,
          playerName: 'Hiễu Võ',  //#8
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.BFC,
          playerName: 'Đức Vũ',  //#9
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1992
        }, {
          teamName: Teams.BFC,
          playerName: 'Đức Anh Nguyễn',  //#10
          playerNumber: 34,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.BFC,
          playerName: 'Kyan Nguyễn',  //#11
          playerNumber: 82,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.BFC,
          playerName: 'Cubon Nguyễn',  //#12
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.BFC,
          playerName: 'Hồ Minh Trúc',  //#13
          playerNumber: 77,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.BFC,
          playerName: 'Việt Trần',  //#14
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1994
        }, {
          teamName: Teams.BFC,
          playerName: 'Nguyễn Công Khang',  //#15
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.BFC,
          playerName: 'Nathan Gawargy',  //#16
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.BFC,
          playerName: 'Hoàng Trương',  //#17
          playerNumber: 28,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1993
        }, {
          teamName: Teams.BFC,
          playerName: 'Nguyễn Xuân Đính',  //#18
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.BFC,
          playerName: 'Hoàng Võ',  //#19
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1996
        }, {
          teamName: Teams.BFC,
          playerName: 'Quang Định',  //#20
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.BFC,
          playerName: 'Nhật Hoàng',  //#21
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2006
        }, {
          teamName: Teams.BFC,
          playerName: 'Gia Bao',  //#22
          playerNumber: 22,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1996
        }, {
          teamName: Teams.BFC,
          playerName: 'Dung Dao',  //#23
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1996
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - YGOfVN (#6)
  static YGOfVNPlayers: any =
    {
      teamName: Teams.YGOfVN,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.YGOfVNLogo}`,
      teamMembers: [
        {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Trung', //#1
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Đậu, Văn Quyết Thắng', //#2
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Công Anh Duy', //#3
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Tôn, Thất Trường', //#4
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Phạm, Ngọc Thạch', //#5
          playerNumber: 34,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Quốc Trí', //#6
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Mai, Thanh Trình', //#7
          playerNumber: 35,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Đức Huy', //#8
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Trần, Nhật Tân', //#9
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Phùng, Nam Tiến', //#10
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Đức Duy', //#11
          playerNumber: 69,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Trịnh, Văn Mạnh', //#12
          playerNumber: 65,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Ngô, Việt Anh', //#13
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Trần, Lê Minh Khoa', //#14
          playerNumber: 66,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Văn Long', //#15
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Nguyễn, Tiến Linh', //#16
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Trần, Văn Thắng', //#17
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Hồ, Hữu Tài', //#18
          playerNumber: 29,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Trần, Phúc Diệm', //#19
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.YGOfVN,
          playerName: 'Lê, Văn Ngọc', //#20
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - FCAE (#7)
  static FCAEPlayers: any =
    {
      teamName: Teams.FCAE,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.FCAELogo}`,
      teamMembers: [
        {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Tự Do', //#1
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Minh Tấn', //#2
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Phạm Văn Khiêm', //#3
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Chí Quốc', //#4
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Minh Tuấn', //#5
          playerNumber: 99,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Hải Nam', //#6
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Phan Văn Thủy', //#7
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Minh Trung', //#8
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Tuấn Anh', //#9
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Huy Công', //#10
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Ngọc Đức', //#11
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Trần Minh Hiếu', //#12
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Tăng Đình Võ', //#13
          playerNumber: 88,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Trần Ngọc Anh', //#14
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Trần Văn Quân', //#15
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Anh Khoa', //#16
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FCAE,
          playerName: 'Nguyễn Văn Hùng', //#17
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Ontario - LankFC (#8)
  static LankFCPlayers: any =
    {
      teamName: Teams.LankFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.LankFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.LankFC,
          playerName: 'Bảo Khanh', //#1
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Duy Hồ', //#2
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Tùng Vũ', //#3
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Phương Hồ', //#4
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Linh Mai', //#5
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'An Hoàng', //#6
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Huy Than', //#7
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Nam Phạm', //#8
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Chiều Phạm', //#9
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Quang Minh', //#10
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.LankFC,
          playerName: 'Hoàng Anh', //#11
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Quebec - Stechco 1 (#1)
  static Stechco1Players: any =
    {
      teamName: Teams.Stechco1,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
      teamMembers: [
        {
          teamName: Teams.Stechco1,
          playerName: 'Wilson Thai', //#1
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Duong Binh Minh', //#2
          playerNumber: 31,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2005
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Bùi Hiển', //#3
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1981
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Lê Việt Hưng', //#4
          playerNumber: 22,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1994
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Nguyen Sy Quy', //#5
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Pham Minh Quang', //#6
          playerNumber: 33,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Dung Nguyen', //#7
          playerNumber: 35,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Trương Tiến Dũng', //#8
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Hoang Bao Pham (C)', //#9
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Tú Quách', //#10
          playerNumber: 29,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Trịnh Nhật Huy', //#11
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2003
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Esteban Hoàng', //#12
          playerNumber: 81,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Phùng Anh Minh', //#13
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Nguyễn Thanh Đức', //#14
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1987
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Tuấn Trần', //#15
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Nam Nguyen', //#16
          playerNumber: 27,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1993
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Trung Đỗ', //#17
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Vu Van Hung', //#18
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.Stechco1,
          playerName: 'Huynh Minh Thanh', //#19
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1968
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Quebec - Stechco 2 (#2)
  static Stechco2Players: any =
    {
      teamName: Teams.Stechco2,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
      teamMembers: [
        {
          teamName: Teams.Stechco2,
          playerName: 'Trần Thanh Bình', //#1
          playerNumber: 38,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1992
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Hoang Minh', //#2
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Phước Thái', //#3
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1974
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Đặng Hồng Khanh', //#4
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1982
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Đào Ngọc Hà (C)', //#5
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1979
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Lê Huy Bình', //#6
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.Stechco2,
          playerName: 'KHUONG Kim Hung', //#7
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Nguyễn Công Long', //#8
          playerNumber: 37,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1986
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Ton Viet Hung', //#10
          playerNumber: 36,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1987
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Nguyen Minh Triet', //#11
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1975
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Ho Cong Tai', //#12
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1984
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Huỳnh Duy Khoa', //#13
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Nguyen Dac Anh Son', //#14
          playerNumber: 99,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Phạm Minh Nhã', //#15
          playerNumber: 29,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Giang Nam', //#16
          playerNumber: 28,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Nam Vu', //#17
          playerNumber: 30,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1997
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Đình Quý', //#18
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1981
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Hoang', //#19
          playerNumber: 41,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Nguyễn Hữu Dũng', //#20
          playerNumber: 25,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1987
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Kieu Cuong', //#21
          playerNumber: 35,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Pham Duy', //#22
          playerNumber: 82,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.Stechco2,
          playerName: 'Pham Nam', //#22
          playerNumber: 88,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Quebec - FC3Mien (#3)
  static FC3MienPlayers: any =
    {
      teamName: Teams.FC3Mien,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.FC3MienLogo}`,
      teamMembers: [
        {
          teamName: Teams.FC3Mien,
          playerName: 'Thinh Ngo (C)', //#1
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1970
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Hanh Van', //#2
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1975
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Philip Nguyen', //#3
          playerNumber: 39,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Tung Uong', //#4
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1972
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Minh Nguyen', //#5
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Tai Tran', //#6
          playerNumber: 35,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Quang Pham', //#7
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Bao Tran', //#8
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Khoi Pham', //#9
          playerNumber: 30,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Loc Tran', //#10
          playerNumber: 99,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2004
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Kien Nguyen', //#11
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Phu Nguyen', //#12
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Kiet Nguyen', //#13
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Luat Nguyen', //#14
          playerNumber: 40,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1989
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Cuong Nguyen', //#15
          playerNumber: 32,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Phuoc Pham', //#16
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Xuan Hung', //#17
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1982
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Hung Phan', //#18
          playerNumber: 29,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Ha Nguyen', //#19
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1993
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Quoc Cuong', //#20
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1993
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Vo Van', //#21
          playerNumber: 42,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1995
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Son Nguyen', //#22
          playerNumber: 44,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1975
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Tam Le', //#23
          playerNumber: 45,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Phu Bui', //#24
          playerNumber: 46,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.FC3Mien,
          playerName: 'Ryan Phan', //#25
          playerNumber: 48,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Quebec - VMU (#4)
  static VMUPlayers: any =
    {
      teamName: Teams.VMU,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
      teamMembers: [
        {
          teamName: Teams.VMU,
          playerName: 'Trần Trung An (C)', //#1
          playerNumber: 27,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Trần Tuấn Hào', //#2
          playerNumber: 31,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Trần Trung Tín', //#3
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Thái Sơn', //#4
          playerNumber: 66,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Vũ Thắng', //#5
          playerNumber: 60,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Hồ Trung Kiên', //#6
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Trương Minh Lương', //#7
          playerNumber: 80,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Công Hoan', //#8
          playerNumber: 25,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Lê An Vinh', //#9
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Văn Nhật Nguyên', //#10
          playerNumber: 91,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Đào Duy Khánh', //#11
          playerNumber: 58,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Trương Minh Đạo', //#12
          playerNumber: 80,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Lê Bảo Đăng', //#13
          playerNumber: 89,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Trần Vinh Hào', //#14
          playerNumber: 92,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Đỗ Trần Minh Quân', //#15
          playerNumber: 49,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Phạm Thành Phát', //#16
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Anh Kiệt', //#17
          playerNumber: 55,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Hồ Lê Sơn Giang', //#18
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Thanh Duẫn', //#19
          playerNumber: 77,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Trần Tim', //#20
          playerNumber: 2003,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Steven Hà', //#21
          playerNumber: 81,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Việt Nam', //#22
          playerNumber: 22,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Đoàn Thanh Tùng', //#23
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Nguyễn Ngọc Duy', //#24
          playerNumber: 41,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.VMU,
          playerName: 'Alexandre Đặng Minh Nhân', //#25
          playerNumber: 86,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Quebec - SFC (#5)
  static SFCPlayers: any =
    {
      teamName: Teams.SFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.SFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.SFC,
          playerName: 'Phạm Hồng Phước', //#1
          playerNumber: 88,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.SFC,
          playerName: 'Nguyễn Thanh Phước', //#2
          playerNumber: 94,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.SFC,
          playerName: 'Đức Nguyễn', //#3
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.SFC,
          playerName: 'Diên Hồ', //#4
          playerNumber: 97,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.SFC,
          playerName: 'Nguyễn Mạnh Tùng', //#5
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.SFC,
          playerName: 'Nguyễn Thanh Hùng', //#6
          playerNumber: 30,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1989
        }, {
          teamName: Teams.SFC,
          playerName: 'Nguyễn Bảo Châu', //#7
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1990
        }, {
          teamName: Teams.SFC,
          playerName: 'Tường Nam', //#8
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.SFC,
          playerName: 'Tường Minh', //#9
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1998
        }, {
          teamName: Teams.SFC,
          playerName: 'Nguyễn Tiến Thành', //#10
          playerNumber: 27,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.SFC,
          playerName: 'Nguyễn Vũ Thắng', //#11
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.SFC,
          playerName: 'Đinh Hoàng Lân (C)', //#12
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1994
        }, {
          teamName: Teams.SFC,
          playerName: 'Phạm Anh Tuấn', //#13
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1985
        }, {
          teamName: Teams.SFC,
          playerName: 'Zinto Vỹ', //#14
          playerNumber: 89,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1988
        }, {
          teamName: Teams.SFC,
          playerName: 'Trần Văn Thảo', //#15
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1980
        }, {
          teamName: Teams.SFC,
          playerName: 'Phạm Trường', //#16
          playerNumber: 24,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1983
        }, {
          teamName: Teams.SFC,
          playerName: 'Lê Hữu Đức', //#17
          playerNumber: 85,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
  //Quebec - RBJunior (#6)
  static RBJuniorPlayers: any =
    {
      teamName: Teams.RBJunior,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.RBJuniorLogo}`,
      teamMembers: [
        {
          teamName: Teams.RBJunior,
          playerName: 'Vuong Dinh Hoan (C)', //#1
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1994
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Vo Hoang Khuong', //#2
          playerNumber: 49,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Ngo Ba Tuyen', //#3
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Ngo Tien Dat', //#4
          playerNumber: 29,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Nguyen Truong Nguyen', //#5
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1989
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Nguyen Hoang Quoc Anh', //#6
          playerNumber: 25,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Duong Quang Huy', //#8
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1991
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Pham Hoang Anh', //#9
          playerNumber: 22,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1994
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Minh Hoang', //#10
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1980
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Dung Nho', //#11
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1980
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Nguyen Ngoc Anh Huy', //#12
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Bui Phan Tung', //#13
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2001
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Huy Hoang', //#14
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Steven Hoang', //#15
          playerNumber: 24,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Danny Ly', //#16
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Hoang Huynh', //#17
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Ken Tran', //#18
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2002
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Quang Dinh', //#19
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 1999
        }, {
          teamName: Teams.RBJunior,
          playerName: 'Thuy Le', //#20
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0, yearOfBirth: 2000
        }
      ].sort((a, b) => {
        return a.playerNumber - b.playerNumber;
      })
    };
}
