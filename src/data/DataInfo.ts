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
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Cuong Nguyen', //#2
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Dat Nguyen', //#3
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Duc Hung Nguyen', //#4
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Hao Pham', //#5
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Hiep Do', //#6
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Huy Phuc Loc Cao', //#7
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Huy Phuoc Cao', //#8
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Linh Hoang', //#9
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Mai Kien', //#10
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Nguyen Le', //#11
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Phuong Nam Nguyen', //#12
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Tai Tran', //#13
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Thanh Luan Le', //#14
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Van Quang Cao', //#15
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.VietUnitedFC,
          playerName: 'Vy Trinh', //#16
          playerNumber: 24,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
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
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Tôn Nguyễn', //#2
          playerNumber: 12,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Sơn Dương', //#3
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Sơn Nguyễn', //#4
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Sơn Đinh', //#5
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Toàn Nguyễn', //#6
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Khoa Đinh', //#7
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Nhật Đinh', //#8
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Hùng Nguyễn', //#9
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Hiếu Nguyễn', //#10
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Trọng Lương', //#11
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Vĩnh Kiều', //#12
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Tuấn Anh Vũ', //#13
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CalgaryVFC,
          playerName: 'Steven Mã', //#14
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
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
          playerName: 'Nam Dinh', //#1
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Huy Trinh', //#2
          playerNumber: 19,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Quang Hoàng', //#3
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Phuong Nguyen', //#4
          playerNumber: 23,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Quỳnh Nguyễn', //#5
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Tung Mai', //#6
          playerNumber: 33,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Hoàn Cao', //#7
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Sang Sang', //#8
          playerNumber: 66,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Tuấn Anh Trịnh', //#9
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Thế Bảo', //#10
          playerNumber: 24,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Đạt Nguyễn', //#11
          playerNumber: 18,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Tin Tran', //#12
          playerNumber: 25,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Quốc Anh', //#13
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Thiện Trần', //#14
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Toàn Lê', //#15
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Cường Phạm', //#16
          playerNumber: 86,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.CICC,
          playerName: 'Văn Hoá', //#17
          playerNumber: 68,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
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
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Hiếu Trọng', //#2
          playerNumber: 88,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Trần Đại Dương', //#3
          playerNumber: 16,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Tạ Thành Huân', //#4
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Bùi Khoa Điềm', //#5
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Mai Trung', //#6
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Văn Thịnh', //#7
          playerNumber: 6,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Đức Trung', //#8
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Lê Văn Đức', //#9
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Đào Viết Thịnh', //#10
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Đặng Thế Huy', //#11
          playerNumber: 13,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Thành Nam', //#12
          playerNumber: 14,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Đặng Tiến Dũng', //#13
          playerNumber: 20,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Hồ Hoàng Đông Quân', //#14
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Quốc Việt', //#15
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Lê Anh Nhật', //#16
          playerNumber: 3,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Trường Khang', //#17
          playerNumber: 4,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Đoàn', //#18
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Trung Kiên', //#19
          playerNumber: 98,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },
        {
          teamName: Teams.CTC,
          playerName: 'Nguyễn Quốc Trung', //#20
          playerNumber: 92,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
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
          playerName: 'FCKingston',
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
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Tín Trương', // #2
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Thắng Đào', // #3
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Lê Văn Luân', // #4
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Thế Cường', // #5
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Trần Đức Huy', // #6
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Cao Quý', // #7
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Huỳnh Khôi Nguyên', // #8
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Ngô Đức Nguyên Khang', // #9
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Võ Trí Tài', // #10
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Trần Quốc Anh', // #11
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Trần Viết Bảo', // #12
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Nhân Võ', // #13
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Nguyễn Tiến', // #14
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Văn Công Lãm', // #15
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Vũ Đức Thông', // #16
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Dương Gia Kỳ', // #17
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Trần Phan Thông', // #18
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: 'Trung Nguyên', // #19
          playerNumber: 0,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.KWFC,
          playerName: '', // #20
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
  //Ontario - KWFC (#5)
  static BFCPlayers: any =
    {
      teamName: Teams.BFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.BFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.BFC,
          playerName: 'BFC',
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
  //Ontario - YGOfVN (#6)
  static YGOfVNPlayers: any =
    {
      teamName: Teams.YGOfVN,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.YGOfVNLogo}`,
      teamMembers: [
        {
          teamName: Teams.YGOfVN,
          playerName: 'YGOfVN',
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
  //Ontario - FCAE (#7)
  static FCAEPlayers: any =
    {
      teamName: Teams.FCAE,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.FCAELogo}`,
      teamMembers: [
        {
          teamName: Teams.FCAE,
          playerName: 'FCAE',
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
  //Ontario - LankFC (#8)
  static LankFCPlayers: any =
    {
      teamName: Teams.LankFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.LankFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.LankFC,
          playerName: 'LankFC',
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
  //Quebec - Stechco 1 (#1)
  static Stechco1Players: any =
    {
      teamName: Teams.Stechco1,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
      teamMembers: [
        {
          teamName: Teams.Stechco1,
          playerName: 'Stechco 1',
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
  //Quebec - Stechco 2 (#2)
  static Stechco2Players: any =
    {
      teamName: Teams.Stechco2,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
      teamMembers: [
        {
          teamName: Teams.Stechco2,
          playerName: 'Stechco 2',
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
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Hanh Van', //#2
          playerNumber: 7,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Truong Pham', //#3
          playerNumber: 39,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Tung Uong', //#4
          playerNumber: 17,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Vy To', //#5
          playerNumber: 15,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Tai Tran', //#6
          playerNumber: 35,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Quang Pham', //#7
          playerNumber: 11,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Bao Tran', //#8
          playerNumber: 8,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Khoi Pham', //#9
          playerNumber: 30,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Loc Tran', //#10
          playerNumber: 99,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Kien Nguyen', //#11
          playerNumber: 2,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Phu Nguyen', //#12
          playerNumber: 9,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Kiet Nguyen', //#13
          playerNumber: 10,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Luat Nguyen', //#14
          playerNumber: 40,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Cuong Nguyen', //#15
          playerNumber: 32,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Phuoc Pham', //#16
          playerNumber: 1,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Thao Tran', //#17
          playerNumber: 5,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Hung Phan', //#18
          playerNumber: 29,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Ha Nguyen', //#19
          playerNumber: 21,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Kevin Phan', //#20
          playerNumber: 42,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
        },{
          teamName: Teams.FC3Mien,
          playerName: 'Cuong Phan', //#21
          playerNumber: 43,
          goals: 0,
          assists: 0,
          yellowCards: 0,
          redCards: 0
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
          playerName: 'VMU Player',
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
  //Quebec - SFC (#5)
  static SFCPlayers: any =
    {
      teamName: Teams.SFC,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.SFCLogo}`,
      teamMembers: [
        {
          teamName: Teams.SFC,
          playerName: 'SFC Player',
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
  //Quebec - RBJunior (#6)
  static RBJuniorPlayers: any =
    {
      teamName: Teams.RBJunior,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.RBJuniorLogo}`,
      teamMembers: [
        {
          teamName: Teams.RBJunior,
          playerName: 'SFC Player',
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
}
