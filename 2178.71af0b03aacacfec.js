"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2178],{2178:(M,u,n)=>{n.r(u),n.d(u,{PlayerResultPageModule:()=>T});var r=n(6895),c=n(433),l=n(8058),h=n(9430),i=n(6939),d=n(5880),t=n(1571);function g(e,o){1&e&&(t.TgZ(0,"th"),t._uU(1,"B\xe0n th\u1eafng"),t.qZA())}function m(e,o){1&e&&(t.TgZ(0,"th"),t._uU(1,"Ki\u1ebfn t\u1ea1o"),t.qZA())}function P(e,o){1&e&&(t.TgZ(0,"th"),t._uU(1,"S\u1ed1 th\u1ebb v\u1ea3ng"),t.qZA())}function y(e,o){1&e&&(t.TgZ(0,"th"),t._uU(1,"S\u1ed1 th\u1ebb \u0111\u1ecf"),t.qZA())}function p(e,o){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.goals)}}function f(e,o){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.assists)}}function C(e,o){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.yellowCards)}}function Z(e,o){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.redCards)}}function w(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.YNc(7,p,2,1,"td",5),t.YNc(8,f,2,1,"td",5),t.YNc(9,C,2,1,"td",5),t.YNc(10,Z,2,1,"td",5),t.qZA()),2&e){const s=o.$implicit,a=t.oxw();t.xp6(2),t.Oqu(s.teamName),t.xp6(2),t.Oqu(s.playerName),t.xp6(2),t.Oqu(s.playerNumber),t.xp6(1),t.Q6J("ngIf",a.showGoalsStatic),t.xp6(1),t.Q6J("ngIf",a.showAssistsStatic),t.xp6(1),t.Q6J("ngIf",a.showYellowCardsStatic),t.xp6(1),t.Q6J("ngIf",a.showRedCardsStatic)}}const _=[{path:"",component:(()=>{class e{constructor(){this.imagePath=d.m.ImagesPath+"Logo.JPG",this.playerResults=[],this.showGoalsStatic=!0,this.showAssistsStatic=!1,this.showYellowCardsStatic=!1,this.showRedCardsStatic=!1,this.displayTitle=""}changValue(s){console.log(s.detail.value),this.showGoalsStatic="goals"===s.detail.value,this.showAssistsStatic="assists"===s.detail.value,this.showYellowCardsStatic="yellowCards"===s.detail.value,this.showRedCardsStatic="redCards"===s.detail.value,this.playerResults=[],this.showPlayersResult()}ngOnInit(){this.showPlayersResult()}showPlayersResult(){this.displayTitle=this.showGoalsStatic?"Danh s\xe1ch c\u1ea7u th\u1ee7 ghi b\xe0n":this.showAssistsStatic?"Danh s\xe1ch c\u1ea7u th\u1ee7 ki\u1ebfn t\u1ea1o":this.showYellowCardsStatic?"Danh s\xe1ch nh\u1eadn th\u1ebb v\xe0ng":"Danh s\xe1ch nh\u1eadn th\u1ebb \u0111\u1ecf",this.playerResults.push(...i.u.VietUnitedFCPlayers.teamMembers,...i.u.CalgaryVFCPlayers.teamMembers,...i.u.Stechco1Players.teamMembers,...i.u.Stechco2Players.teamMembers,...i.u.SFCPlayers.teamMembers,...i.u.VMUPlayers.teamMembers,...i.u.FC3MienPlayers.teamMembers,...i.u.RBJuniorPlayers.teamMembers,...i.u.CICCPlayers.teamMembers,...i.u.CTCPlayers.teamMembers,...i.u.FCKingstonPlayers.teamMembers,...i.u.KWFCPlayers.teamMembers,...i.u.BFCPlayers.teamMembers,...i.u.YGOfVNPlayers.teamMembers,...i.u.FCAEPlayers.teamMembers,...i.u.LankFCPlayers.teamMembers),this.playerResults=this.playerResults.filter(s=>this.showGoalsStatic?s.goals>0:this.showAssistsStatic?s.assists>0:this.showYellowCardsStatic?s.yellowCards>0:s.redCards>0).sort((s,a)=>this.showGoalsStatic?a.goals-s.goals:this.showGoalsStatic?a.assists-s.assists:this.showYellowCardsStatic?a.yellowCards-s.yellowCards:a.redCards-a.redCards)}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-player-result"]],decls:46,vars:7,consts:[["size","3"],[3,"src"],["size","9"],[1,"team-name"],[1,"team-members"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"radioClass"],["value","goals",3,"ionChange"],["slot","end","value","goals"],["slot","end","value","assists"],["slot","end","value","yellowCards"],["slot","end","value","redCards"]],template:function(s,a){1&s&&(t.TgZ(0,"ion-content")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title")(4,"ion-grid")(5,"ion-row")(6,"ion-col",0),t._UZ(7,"ion-img",1),t.qZA(),t.TgZ(8,"ion-col",2)(9,"div",3),t._uU(10),t.qZA()()()()()(),t.TgZ(11,"ion-card-content")(12,"ion-list")(13,"table",4)(14,"thead")(15,"tr")(16,"th"),t._uU(17,"T\xean \u0111\u1ed9i"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"T\xean c\u1ea7u th\u1ee7"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"S\u1ed1 \xe1o"),t.qZA(),t.YNc(22,g,2,0,"th",5),t.YNc(23,m,2,0,"th",5),t.YNc(24,P,2,0,"th",5),t.YNc(25,y,2,0,"th",5),t.qZA()(),t.TgZ(26,"tbody"),t.YNc(27,w,11,7,"tr",6),t.qZA()()()()(),t.TgZ(28,"ion-list",7)(29,"ion-radio-group",8),t.NdJ("ionChange",function(R){return a.changValue(R)}),t.TgZ(30,"ion-item")(31,"ion-label"),t._uU(32,"Danh s\xe1ch ghi b\xe0n"),t.qZA(),t._UZ(33,"ion-radio",9),t.qZA(),t.TgZ(34,"ion-item")(35,"ion-label"),t._uU(36,"Danh s\xe1ch ki\u1ebfn t\u1ea1o"),t.qZA(),t._UZ(37,"ion-radio",10),t.qZA(),t.TgZ(38,"ion-item")(39,"ion-label"),t._uU(40,"Danh s\xe1ch nh\u1eadn th\u1ebb v\xe0ng"),t.qZA(),t._UZ(41,"ion-radio",11),t.qZA(),t.TgZ(42,"ion-item")(43,"ion-label"),t._uU(44,"Danh s\xe1ch nh\u1eadn th\u1ebb \u0111\u1ecf"),t.qZA(),t._UZ(45,"ion-radio",12),t.qZA()()()()),2&s&&(t.xp6(7),t.s9C("src",a.imagePath),t.xp6(3),t.Oqu(a.displayTitle),t.xp6(12),t.Q6J("ngIf",a.showGoalsStatic),t.xp6(1),t.Q6J("ngIf",a.showAssistsStatic),t.xp6(1),t.Q6J("ngIf",a.showYellowCardsStatic),t.xp6(1),t.Q6J("ngIf",a.showRedCardsStatic),t.xp6(2),t.Q6J("ngForOf",a.playerResults))},dependencies:[r.sg,r.O5,l.PM,l.FN,l.Zi,l.Dq,l.wI,l.W2,l.jY,l.Xz,l.Ie,l.Q$,l.q_,l.B7,l.se,l.Nd,l.U5,l.QI],styles:[".team-members[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .team-members[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px;text-align:center;border-bottom:1px solid #ddd}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f2f2f2}.team-name[_ngcontent-%COMP%]{font-size:30px;text-align:center;margin-top:20px}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(_),h.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,c.u5,l.Pc,A]}),e})()}}]);