"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9993],{9993:(M,r,o)=>{o.r(r),o.d(r,{TeamsListPageModule:()=>P});var l=o(6895),d=o(433),s=o(8058),u=o(9430),c=o(6939),p=o(5463),t=o(1571),f=o(5054);function T(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"ion-item",4),t.NdJ("click",function(){const g=t.CHM(n).$implicit,v=t.oxw();return t.KtG(v.loadTeamInfo(g.name))}),t.TgZ(1,"div",5),t._uU(2),t.qZA(),t.TgZ(3,"div",5),t._uU(4),t.qZA(),t._UZ(5,"img",6),t.qZA()}if(2&e){const n=a.$implicit,i=a.index,m=t.oxw();t.xp6(2),t.hij("#",i+1,""),t.xp6(2),t.AsE("",n.name," (",n.province,")"),t.xp6(1),t.Q6J("src",m.getTeamImageStyle(n.name),t.LSH)}}const h=[{path:"",component:(()=>{class e{constructor(n,i){this.commonFunctions=n,this.navCtrl=i,this.listTeams=[...c.u.SeedsTeam,...c.u.OntarioTeams,...c.u.QuebecTeams].sort((m,g)=>m.name>g.name?1:-1)}ngOnInit(){}getTeamImageStyle(n){return this.commonFunctions.getTeamImageStyle(n)}loadTeamInfo(n){this.navCtrl.navigateRoot(["/",p.F.TeamInfo,n])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.y),t.Y36(s.SH))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-teams-list"]],decls:6,vars:2,consts:[[3,"fullscreen"],[1,"group-container"],[1,"group-heading"],["class","team-item",3,"click",4,"ngFor","ngForOf"],[1,"team-item",3,"click"],[1,"team-name"],[1,"team-image",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-content",0)(1,"div",1)(2,"h2",2),t._uU(3,"Danh s\xe1ch \u0111\u1ed9i b\xf3ng tham gia gi\u1ea3i L\u1ea1c H\u1ed3ng Montreal 2023"),t.qZA(),t.TgZ(4,"ion-list"),t.YNc(5,T,6,4,"ion-item",3),t.qZA()()()),2&n&&(t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("ngForOf",i.listTeams))},dependencies:[l.sg,s.W2,s.Ie,s.q_],styles:[".group-container[_ngcontent-%COMP%]{background-color:#f2f2f2;border-radius:8px;padding:5px;margin-bottom:16px;text-align:center}.group-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:8px}.team-item[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:100px;height:100px;background-size:cover;background-position:center;margin-right:10px}.team-item[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:small}.team-image[_ngcontent-%COMP%]{width:40px;height:40px;background-size:cover;background-position:center;margin-right:5px}.team-name[_ngcontent-%COMP%]{flex-grow:1;margin-left:10px;font-size:large;font-weight:700;text-align:justify}.team-item[_ngcontent-%COMP%]:last-child{border-bottom:none}ion-title[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(h),u.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,d.u5,s.Pc,x]}),e})()}}]);