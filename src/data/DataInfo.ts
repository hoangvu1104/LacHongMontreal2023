import { Team } from "src/models/Team";
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
  static OtherTeams: Team[] = [
    //Ontario
    { name: Teams.CTC, province: DataInfo.OntarioProvince, club: 'CTC' },
    { name: Teams.FCKingston, province: DataInfo.OntarioProvince, club: 'FCKingston' },
    { name: Teams.KWFC, province: DataInfo.OntarioProvince, club: 'KWFC' },
    { name: Teams.BFC, province: DataInfo.OntarioProvince, club: 'BFC' },
    { name: Teams.YGOfVN, province: DataInfo.OntarioProvince, club: 'YGOfVN' },
    { name: Teams.FCAE, province: DataInfo.OntarioProvince, club: 'FCAE' },
    { name: Teams.LankFC, province: DataInfo.OntarioProvince, club: 'LankFC' },
    //Quebec
    { name: Teams.SFC, province: DataInfo.QuebecProvince, club: 'SFC' },
    { name: Teams.VMU, province: DataInfo.QuebecProvince, club: 'VMU' },
    { name: Teams.Stechco2, province: DataInfo.QuebecProvince, club: 'Stechco' },
    { name: Teams.FC3Mien, province: DataInfo.QuebecProvince, club: 'FC3Mien' },
    { name: Teams.RBJunior, province: DataInfo.QuebecProvince, club: 'RBJunior' }
  ];
}
