"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2985],{9682:(f,l,o)=>{o.r(l),o.d(l,{ResultPageModule:()=>S});var d=o(6895),e=o(433),g=o(8058),c=o(9430),a=o(6354),n=o(1571),p=o(5054),T=o(1083),A=o(1085);const B=[{path:"",component:(()=>{class i{constructor(t,s,r){var m,u,C,F;this.route=t,this.commonFunctions=s,this.navCtrl=r,this.groupA=[],this.groupB=[],this.groupC=[],this.groupD=[],this.divisions=[],this.time1="8h30-9h30",this.time2="9h45-10h45",this.time3="11h-12h",this.time4="13h-14h",this.time5="14h15-15h15",this.time6="15h30-16h30",this.teamAssignments=this.route.snapshot.queryParams,console.log("this.teamAssignments",this.teamAssignments),this.groupA=JSON.parse(null===(m=this.teamAssignments)||void 0===m?void 0:m.groupA),this.groupB=JSON.parse(null===(u=this.teamAssignments)||void 0===u?void 0:u.groupB),this.groupC=JSON.parse(null===(C=this.teamAssignments)||void 0===C?void 0:C.groupC),this.groupD=JSON.parse(null===(F=this.teamAssignments)||void 0===F?void 0:F.groupD),this.commonFunctions.enableMenuSwipe()}generateTeamName(t){return this.commonFunctions.generateTeamName(t,!1)}generateDivisions(t,s,r,m){this.divisions=[{code:"",time:this.time1,field:a.I.Field1,teamA:this.generateTeamName(t[0]),teamB:this.generateTeamName(t[1]),resultA:0,resultB:0},{code:"",time:this.time1,field:a.I.Field2,teamA:this.generateTeamName(t[2]),teamB:this.generateTeamName(t[3]),resultA:0,resultB:0},{code:"",time:this.time1,field:a.I.Field3,teamA:this.generateTeamName(s[0]),teamB:this.generateTeamName(s[1]),resultA:0,resultB:0},{code:"",time:this.time1,field:a.I.Field4,teamA:this.generateTeamName(s[2]),teamB:this.generateTeamName(s[3]),resultA:0,resultB:0},{code:"",time:this.time2,field:a.I.Field1,teamA:this.generateTeamName(r[0]),teamB:this.generateTeamName(r[1]),resultA:0,resultB:0},{code:"",time:this.time2,field:a.I.Field2,teamA:this.generateTeamName(r[2]),teamB:this.generateTeamName(r[3]),resultA:0,resultB:0},{code:"",time:this.time2,field:a.I.Field3,teamA:this.generateTeamName(m[0]),teamB:this.generateTeamName(m[1]),resultA:0,resultB:0},{code:"",time:this.time2,field:a.I.Field4,teamA:this.generateTeamName(m[2]),teamB:this.generateTeamName(m[3]),resultA:0,resultB:0},{code:"",time:this.time3,field:a.I.Field1,teamA:this.generateTeamName(t[0]),teamB:this.generateTeamName(t[2]),resultA:0,resultB:0},{code:"",time:this.time3,field:a.I.Field2,teamA:this.generateTeamName(t[1]),teamB:this.generateTeamName(t[3]),resultA:0,resultB:0},{code:"",time:this.time3,field:a.I.Field3,teamA:this.generateTeamName(s[0]),teamB:this.generateTeamName(s[2]),resultA:0,resultB:0},{code:"",time:this.time3,field:a.I.Field4,teamA:this.generateTeamName(s[1]),teamB:this.generateTeamName(s[3]),resultA:0,resultB:0},{code:"",time:this.time4,field:a.I.Field1,teamA:this.generateTeamName(r[0]),teamB:this.generateTeamName(r[2]),resultA:0,resultB:0},{code:"",time:this.time4,field:a.I.Field2,teamA:this.generateTeamName(r[1]),teamB:this.generateTeamName(r[3]),resultA:0,resultB:0},{code:"",time:this.time4,field:a.I.Field3,teamA:this.generateTeamName(m[0]),teamB:this.generateTeamName(m[2]),resultA:0,resultB:0},{code:"",time:this.time4,field:a.I.Field4,teamA:this.generateTeamName(m[1]),teamB:this.generateTeamName(m[3]),resultA:0,resultB:0},{code:"",time:this.time5,field:a.I.Field1,teamA:this.generateTeamName(t[0]),teamB:this.generateTeamName(t[3]),resultA:0,resultB:0},{code:"",time:this.time5,field:a.I.Field2,teamA:this.generateTeamName(t[1]),teamB:this.generateTeamName(t[2]),resultA:0,resultB:0},{code:"",time:this.time5,field:a.I.Field3,teamA:this.generateTeamName(s[0]),teamB:this.generateTeamName(s[3]),resultA:0,resultB:0},{code:"",time:this.time5,field:a.I.Field4,teamA:this.generateTeamName(s[1]),teamB:this.generateTeamName(s[2]),resultA:0,resultB:0},{code:"",time:this.time6,field:a.I.Field1,teamA:this.generateTeamName(r[0]),teamB:this.generateTeamName(r[3]),resultA:0,resultB:0},{code:"",time:this.time6,field:a.I.Field2,teamA:this.generateTeamName(r[1]),teamB:this.generateTeamName(r[2]),resultA:0,resultB:0},{code:"",time:this.time6,field:a.I.Field3,teamA:this.generateTeamName(m[0]),teamB:this.generateTeamName(m[3]),resultA:0,resultB:0},{code:"",time:this.time6,field:a.I.Field4,teamA:this.generateTeamName(m[1]),teamB:this.generateTeamName(m[2]),resultA:0,resultB:0}]}ngOnInit(){this.generateDivisions(this.groupA,this.groupB,this.groupC,this.groupD)}generateTeams(){this.navCtrl.navigateRoot("home")}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(c.gz),n.Y36(p.y),n.Y36(g.SH))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-result"]],decls:6,vars:1,consts:[[1,"happy-tournament"],[1,"happy-tournament-text"],[3,"divisions"]],template:function(t,s){1&t&&(n._UZ(0,"app-toolbar-header"),n.TgZ(1,"ion-content")(2,"div",0)(3,"span",1),n._uU(4,"L\u1ecbch thi \u0111\u1ea5u v\xf2ng b\u1ea3ng"),n.qZA()(),n._UZ(5,"app-round-robin",2),n.qZA()),2&t&&(n.xp6(5),n.Q6J("divisions",s.divisions))},dependencies:[g.W2,T.T,A.H],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:small;font-weight:700}.happy-tournament[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:-10px;margin-left:10px;margin-right:10px}.happy-tournament-text[_ngcontent-%COMP%]{font-size:18px;color:#8a2be2;font-weight:700;padding:10px 5px;border-radius:8px;background-color:#f2f2f2;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-top:15px}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;background-color:#0ff;padding:20px;border-radius:50px;font-size:large;font-weight:600;color:#8b008b;margin-top:20px;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2)}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:5px;text-align:center;font-size:13px;border-bottom:1px solid #ccc}th[_ngcontent-%COMP%]{background-color:#f2f2f2}td[_ngcontent-%COMP%]{background-color:#fff}input[type=number][_ngcontent-%COMP%]{width:50px;text-align:center;border:none;background-color:#f2f2f2}input[type=number][_ngcontent-%COMP%]:focus{outline:none;background-color:#eaeaea}.spacer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:none;background-color:#adff2f;height:20px;font-weight:700}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.team-info[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:5px}.team-name[_ngcontent-%COMP%]{font-weight:700;margin-left:5px}"]}),i})()}];let N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[c.Bz.forChild(B),c.Bz]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[d.ez,e.u5,g.Pc,N]}),i})()},5880:(f,l,o)=>{o.d(l,{m:()=>d});let d=(()=>{class e{}return e.ImagesPath="/LacHongMontreal2023/assets/images/",e.CalgaryVFCLogo="CalgaryVFC.png",e.CTCLogo="CTC.JPEG",e.FCKingstonLogo="FCKingston.jpg",e.KWFCLogo="KWFC.jpg",e.BFCLogo="BFC.JPG",e.YGOfVNLogo="YGOfVN.png",e.FCAELogo="FCAE.jpg",e.CICCLogo="CICC.jpg",e.LankFCLogo="LankFC.jpg",e.SFCLogo="SFC.png",e.VMULogo="VMU.png",e.StechcoLogo="Stechco.png",e.FC3MienLogo="3MienFC.jpg",e.RBJuniorLogo="RBJunior.JPG",e.VietUnitedFCLogo="VietUnitedFC.jpg",e.Logo="Logo.JPG",e})()},4973:(f,l,o)=>{o.d(l,{p:()=>d});let d=(()=>{class e{}return e.CalgaryVFC="Calgary VFC",e.CalgaryVFC_Star="Calgary VFC(*)",e.CTC="CTC",e.CTC_Star="CTC(*)",e.FCKingston="FC Kingston",e.FCKingston_Star="FC Kingston(*)",e.KWFC="K-W FC",e.KWFC_Star="K-W FC(*)",e.BFC="BFC",e.BFC_Star="BFC(*)",e.YGOfVN="YG Of Vietnam",e.YGOfVN_Star="YG Of Vietnam(*)",e.FCAE="FC AE",e.FCAE_Star="FCAE(*)",e.CICC="CICC",e.CICC_Star="CICC(*)",e.LankFC="Lank FC",e.LankFC_Star="Lank FC(*)",e.SFC="SFC",e.SFC_Star="SFC(*)",e.VMU="VMU",e.VMU_Star="VMU(*)",e.Stechco1="Stechco 1",e.Stechco1_Star="Stechco 1(*)",e.Stechco2="Stechco 2",e.Stechco2_Star="Stechco 2(*)",e.FC3Mien="3 Mi\u1ec1n FC",e.FC3Mien_Star="3 Mi\u1ec1n FC(*)",e.RBJunior="RB Junior",e.RBJunior_Star="RB Junior(*)",e.VietUnitedFC="Viet United FC",e.VietUnitedFC_Star="Viet United FC(*)",e})()}}]);