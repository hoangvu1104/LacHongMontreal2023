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
  //Quebec - Stechco 1 (#1)
  static Stechco1Players: any =
    {
      teamName: Teams.Stechco1,
      teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
      teamMembers: [
        {
          teamName: Teams.Stechco1,
          playerName: 'Stechco 1',
          playerNumber: 4,
          goals: 2,
          assists: 1,
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
          playerNumber: 4,
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
          playerName: 'FC3Mien 2',
          playerNumber: 4,
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
          playerNumber: 4,
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
          playerNumber: 4,
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
          playerNumber: 4,
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
