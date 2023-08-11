import { Injectable } from "@angular/core";
import { Teams } from "./teams";
import { MenuController } from "@ionic/angular";
import { StaticVariable } from "./staticVariable";
import { Team } from "src/models/Team";

@Injectable({
  providedIn: 'root'
})
export class CommonFunctions {
  constructor(private menuCtrl: MenuController) { }
  getTeamImageStyle(team: string): string {
    let imagePath: string = `${StaticVariable.ImagesPath}`;
    // Map each team to a CSS class based on the uniform color
    switch (team) {

      //Alberta
      case Teams.CalgaryVFC:
      case Teams.CalgaryVFC_Star:
        imagePath += `${StaticVariable.CalgaryVFCLogo}`;
        break;
      //Ontario
      case Teams.CTC:
      case Teams.CTC_Star:
        imagePath += `${StaticVariable.CTCLogo}`;
        break;
      case Teams.FCKingston:
      case Teams.FCKingston_Star:
        imagePath += `${StaticVariable.FCKingstonLogo}`;
        break;
      case Teams.KWFC:
      case Teams.KWFC_Star:
        imagePath += `${StaticVariable.KWFCLogo}`;
        break;
      case Teams.BFC:
      case Teams.BFC_Star:
        imagePath += `${StaticVariable.BFCLogo}`;
        break;
      case Teams.YGOfVN:
      case Teams.YGOfVN_Star:
        imagePath += `${StaticVariable.YGOfVNLogo}`;
        break;
      case Teams.FCAE:
      case Teams.FCAE_Star:
        imagePath += `${StaticVariable.FCAELogo}`;
        break;
      case Teams.CICC:
      case Teams.CICC_Star:
        imagePath += `${StaticVariable.CICCLogo}`;
        break;
      case Teams.LankFC:
      case Teams.LankFC_Star:
        imagePath += `${StaticVariable.LankFCLogo}`;
        break;
      //Quebec
      case Teams.SFC:
      case Teams.SFC_Star:
        imagePath += `${StaticVariable.SFCLogo}`;
        break;
      case Teams.VMU:
      case Teams.VMU_Star:
        imagePath += `${StaticVariable.VMULogo}`;
        break;
      case Teams.Stechco1:
      case Teams.Stechco1_Star:
      case Teams.Stechco2:
      case Teams.Stechco2_Star:
        imagePath += `${StaticVariable.StechcoLogo}`;
        break;
      case Teams.FC3Mien:
      case Teams.FC3Mien_Star:
        imagePath += `${StaticVariable.FC3MienLogo}`;
        break;
      case Teams.RBJunior:
      case Teams.RBJunior_Star:
        imagePath += `${StaticVariable.RBJuniorLogo}`;
        break;
      //Bristish Columbia
      case Teams.VietUnitedFC:
      case Teams.VietUnitedFC_Star:
        imagePath += `${StaticVariable.VietUnitedFCLogo}`;
        break;
    };
    return imagePath;
  }

  generateTeamName(team: Team, addProvince: boolean) {
    if (addProvince)
      return `${team.name} (${team.province})`;
    else
      return team.name;
  }

  enableMenuSwipe() {
    this.menuCtrl.swipeGesture(true, 'menu-content');
    this.menuCtrl.enable(true, 'menu-content');
  }
}
