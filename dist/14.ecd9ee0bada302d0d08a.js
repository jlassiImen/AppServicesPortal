(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{znmF:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){return function(){}}(),o=e("pMnS"),r=e("Ip0R"),s=e("A7o+"),a=e("G+kB"),i=function(){function n(n,l,e){this.simpleLogin=n,this.activatedRoute=l,this.router=e,this.successMessage="",this.errorMessage="",this.userId="",this.tokenId=""}return n.prototype.ngOnInit=function(){this.successMessage="",this.errorMessage="",this.userId=this.activatedRoute.snapshot.queryParamMap.get("userId"),this.tokenId=this.activatedRoute.snapshot.queryParamMap.get("tokenId"),this.verifyConfirmation()},n.prototype.verifyConfirmation=function(){var n=this;this.simpleLogin.confirmationRegister({userId:this.userId,tokenId:""+this.tokenId}).subscribe(function(l){"200"==l.status?(n.errorMessage="",n.successMessage="Your account has been verified,you can now login"):n.errorMessage=l.message},function(l){console.error(l),n.successMessage="",n.errorMessage="An error has occured,please retry later"})},n}(),d=e("ZYCi"),c=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.successMessage)})}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.errorMessage)})}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","main-bg"],["style","margin-top: 20%;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,8,"div",[["class","sub-main-w3"],["style","margin: -2.5em 2.5em 2em;"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,7,"div",[["class","bg-content-w3pvt"],["style","margin: 0 auto;"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](4,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](6,16384,null,0,r.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](7,0,null,null,2,"a",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.router.navigate(["/login"])&&t),t},null,null)),(n()(),t["\u0275ted"](8,null,[" "," "])),t["\u0275pid"](131072,s.i,[s.j,t.ChangeDetectorRef])],function(n,l){var e=l.component;n(l,4,0,""!=e.successMessage),n(l,6,0,""!=e.errorMessage)},function(n,l){n(l,8,0,t["\u0275unv"](l,8,0,t["\u0275nov"](l,9).transform("cnx")))})}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-confirmation",[],null,null,null,f,c)),t["\u0275did"](1,114688,null,0,i,[a.a,d.a,d.k],null,null)],function(n,l){n(l,1,0)},null)}var h=t["\u0275ccf"]("app-confirmation",i,g,{},{},[]),v=e("t/Na"),I=e("2Nv7"),M=e("5Y89"),k=e("gIcY"),R=e("sE5F"),y=e("jbVo"),C=e("9ans"),b=function(){return function(){}}();e.d(l,"ConfirmationModuleNgFactory",function(){return w});var w=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,h]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[t.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,v.i,v.o,[r.DOCUMENT,t.PLATFORM_ID,v.m]),t["\u0275mpd"](4608,v.p,v.p,[v.i,v.n]),t["\u0275mpd"](5120,v.a,function(n,l){return[n,new I.a(l)]},[v.p,M.a]),t["\u0275mpd"](4608,v.l,v.l,[]),t["\u0275mpd"](6144,v.j,null,[v.l]),t["\u0275mpd"](4608,v.h,v.h,[v.j]),t["\u0275mpd"](6144,v.b,null,[v.h]),t["\u0275mpd"](4608,v.f,v.k,[v.b,t.Injector]),t["\u0275mpd"](4608,v.c,v.c,[v.f]),t["\u0275mpd"](4608,k.z,k.z,[]),t["\u0275mpd"](4608,k.g,k.g,[]),t["\u0275mpd"](4608,R.c,R.c,[]),t["\u0275mpd"](4608,R.g,R.b,[]),t["\u0275mpd"](5120,R.i,R.j,[]),t["\u0275mpd"](4608,R.h,R.h,[R.c,R.g,R.i]),t["\u0275mpd"](4608,R.f,R.a,[]),t["\u0275mpd"](5120,R.d,R.k,[R.h,R.f]),t["\u0275mpd"](5120,s.f,y.b,[v.c]),t["\u0275mpd"](4608,s.c,s.e,[]),t["\u0275mpd"](4608,s.h,s.d,[]),t["\u0275mpd"](4608,s.b,s.a,[]),t["\u0275mpd"](4608,s.j,s.j,[s.k,s.f,s.c,s.h,s.b,s.l,s.m]),t["\u0275mpd"](4608,a.a,a.a,[v.c,d.k]),t["\u0275mpd"](4608,C.a,C.a,[d.k]),t["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),t["\u0275mpd"](1073742336,d.l,d.l,[[2,d.r],[2,d.k]]),t["\u0275mpd"](1073742336,b,b,[]),t["\u0275mpd"](1073742336,v.e,v.e,[]),t["\u0275mpd"](1073742336,v.d,v.d,[]),t["\u0275mpd"](1073742336,k.x,k.x,[]),t["\u0275mpd"](1073742336,k.k,k.k,[]),t["\u0275mpd"](1073742336,k.t,k.t,[]),t["\u0275mpd"](1073742336,R.e,R.e,[]),t["\u0275mpd"](1073742336,s.g,s.g,[]),t["\u0275mpd"](1073742336,y.a,y.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,d.i,function(){return[[{path:"",component:i}]]},[]),t["\u0275mpd"](256,v.m,"XSRF-TOKEN",[]),t["\u0275mpd"](256,v.n,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,s.m,!1,[]),t["\u0275mpd"](256,s.l,void 0,[])])})}}]);