"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4114],{4114:(v,l,o)=>{o.r(l),o.d(l,{BeginPageModule:()=>B});var h=o(6895),c=o(433),m=o(8058),d=o(9430),a=o(6354),r=o(5463),i=o(1571),f=o(1083),g=o(1085);const u=[{path:"",component:(()=>{class t{constructor(e,n){this.route=e,this.navCtrl=n,this.countdown=10,this.groupA=[],this.groupB=[],this.divisions=[],this.playoffs=[],this.time1="8h30-9h30",this.time2="9h45-10h45",this.time3="11h-12h",this.groupA=["Team A1","Team A2","Team A3","Team A4"],this.groupB=["Team B1","Team B2","Team B3","Team B4"]}ngOnInit(){this.generateDivisions(this.groupA,this.groupB),this.startCountdown()}startCountdown(){const e=setInterval(()=>{this.countdown--,this.countdown<=0&&(clearInterval(e),this.generateTeams())},1e3)}generateTeams(){this.navCtrl.navigateRoot(r.F.Home)}generateDivisions(e,n){this.divisions=[{code:"",time:this.time1,field:a.I.Field1,teamA:e[0],teamB:e[1]},{code:"",time:this.time1,field:a.I.Field2,teamA:e[2],teamB:e[3]},{code:"",time:this.time1,field:a.I.Field3,teamA:n[0],teamB:n[1]},{code:"",time:this.time1,field:a.I.Field4,teamA:n[2],teamB:n[3]},{code:"",time:this.time2,field:a.I.Field1,teamA:e[0],teamB:e[2]},{code:"",time:this.time2,field:a.I.Field2,teamA:e[1],teamB:e[3]},{code:"",time:this.time2,field:a.I.Field3,teamA:n[0],teamB:n[2]},{code:"",time:this.time2,field:a.I.Field4,teamA:n[1],teamB:n[3]},{code:"",time:this.time3,field:a.I.Field1,teamA:e[0],teamB:e[3]},{code:"",time:this.time3,field:a.I.Field2,teamA:e[1],teamB:e[2]},{code:"",time:this.time3,field:a.I.Field3,teamA:n[0],teamB:n[3]},{code:"",time:this.time3,field:a.I.Field4,teamA:n[1],teamB:n[2]}]}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(d.gz),i.Y36(m.SH))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-begin"]],decls:6,vars:2,consts:[[3,"divisions"],[1,"happy-tournament"],[1,"btn"]],template:function(e,n){1&e&&(i._UZ(0,"app-toolbar-header"),i.TgZ(1,"ion-content"),i._UZ(2,"app-round-robin",0),i.TgZ(3,"div",1)(4,"span",2),i._uU(5),i.qZA()()()),2&e&&(i.xp6(2),i.Q6J("divisions",n.divisions),i.xp6(3),i.hij("Chu\u1ea9n b\u1ecb b\u1ed1c th\u0103m trong ",n.countdown," gi\xe2y"))},dependencies:[m.W2,f.T,g.H],styles:[".happy-tournament[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:10px;margin-right:10px;margin-bottom:20px}.happy-tournament-text[_ngcontent-%COMP%]{font-size:18px;color:#8a2be2;font-weight:700;padding:10px 5px;border-radius:8px;background-color:#f2f2f2;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-top:15px}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;background-color:#0ff;padding:20px;border-radius:50px;font-size:large;font-weight:600;color:#8b008b;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2)}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[d.Bz.forChild(u),d.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[h.ez,c.u5,m.Pc,p]}),t})()}}]);