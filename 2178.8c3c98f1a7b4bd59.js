"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2178],{2178:(T,u,o)=>{o.r(u),o.d(u,{PlayerResultPageModule:()=>Z});var i=o(6895),g=o(433),a=o(8058),r=o(9430),c=o(6939),t=o(1571);function h(e,n){1&e&&(t.TgZ(0,"th"),t._uU(1,"B\xe0n th\u1eafng"),t.qZA())}function p(e,n){1&e&&(t.TgZ(0,"th"),t._uU(1,"Ki\u1ebfn t\u1ea1o"),t.qZA())}function d(e,n){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.goals)}}function m(e,n){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.assists)}}function P(e,n){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.YNc(7,d,2,1,"td",5),t.YNc(8,m,2,1,"td",5),t.qZA()),2&e){const s=n.$implicit,l=t.oxw();t.xp6(2),t.Oqu(s.teamName),t.xp6(2),t.Oqu(s.playerName),t.xp6(2),t.Oqu(s.playerNumber),t.xp6(1),t.Q6J("ngIf",l.showGoalsStatic),t.xp6(1),t.Q6J("ngIf",!l.showGoalsStatic)}}const y=[{path:"",component:(()=>{class e{constructor(){this.playerResults=[],this.showGoalsStatic=!0,this.displayTitle="",this.showPlayersResult()}changValue(s){this.showGoalsStatic="goals"===s.detail.value,this.playerResults=[],this.showPlayersResult()}ngOnInit(){}showPlayersResult(){this.displayTitle=this.showGoalsStatic?"Danh s\xe1ch c\u1ea7u th\u1ee7 ghi b\xe0n":"Danh s\xe1ch c\u1ea7u th\u1ee7 ki\u1ebfn t\u1ea1o",this.playerResults.push(...c.u.Stechco1Players.teamMembers,...c.u.Stechco2Players.teamMembers),this.playerResults.filter(s=>this.showGoalsStatic?s.goals>0:s.assists>0).sort((s,l)=>this.showGoalsStatic?l.goals-s.goals:l.assists-s.assists)}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-player-result"]],decls:36,vars:4,consts:[["size","3"],["src","/MontrealSuperCup2023/assets/images/Logo.png"],["size","9"],[1,"team-name"],[1,"team-members"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"radioClass"],["value","goals",3,"ionChange"],["slot","end","value","goals"],["slot","end","value","assists"]],template:function(s,l){1&s&&(t.TgZ(0,"ion-content")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title")(4,"ion-grid")(5,"ion-row")(6,"ion-col",0),t._UZ(7,"ion-img",1),t.qZA(),t.TgZ(8,"ion-col",2)(9,"div",3),t._uU(10),t.qZA()()()()()(),t.TgZ(11,"ion-card-content")(12,"ion-list")(13,"table",4)(14,"thead")(15,"tr")(16,"th"),t._uU(17,"T\xean \u0111\u1ed9i"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"T\xean c\u1ea7u th\u1ee7"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"S\u1ed1 \xe1o"),t.qZA(),t.YNc(22,h,2,0,"th",5),t.YNc(23,p,2,0,"th",5),t.qZA()(),t.TgZ(24,"tbody"),t.YNc(25,P,9,5,"tr",6),t.qZA()()()()(),t.TgZ(26,"ion-list",7)(27,"ion-radio-group",8),t.NdJ("ionChange",function(R){return l.changValue(R)}),t.TgZ(28,"ion-item")(29,"ion-label"),t._uU(30,"Danh s\xe1ch ghi b\xe0n"),t.qZA(),t._UZ(31,"ion-radio",9),t.qZA(),t.TgZ(32,"ion-item")(33,"ion-label"),t._uU(34,"Danh s\xe1ch ki\u1ebfn t\u1ea1o"),t.qZA(),t._UZ(35,"ion-radio",10),t.qZA()()()()),2&s&&(t.xp6(10),t.Oqu(l.displayTitle),t.xp6(12),t.Q6J("ngIf",l.showGoalsStatic),t.xp6(1),t.Q6J("ngIf",!l.showGoalsStatic),t.xp6(2),t.Q6J("ngForOf",l.playerResults))},dependencies:[i.sg,i.O5,a.PM,a.FN,a.Zi,a.Dq,a.wI,a.W2,a.jY,a.Xz,a.Ie,a.Q$,a.q_,a.B7,a.se,a.Nd,a.U5,a.QI],styles:[".team-members[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .team-members[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px;text-align:center;border-bottom:1px solid #ddd}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f2f2f2}.team-name[_ngcontent-%COMP%]{font-size:30px;text-align:center;margin-top:20px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(y),r.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,g.u5,a.Pc,f]}),e})()}}]);