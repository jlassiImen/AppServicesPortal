(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"f+ep":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),i=u("Ip0R"),r=u("gIcY"),s=u("9ans"),a=u("G+kB"),d=function(){function l(l,n,u,e){this.auth=l,this.router=n,this.fb=u,this.simpleLogin=e,this.successMessage="",this.errorMessage="",this.validation_messages={email:[{type:"required",message:"Email is required"},{type:"pattern",message:"Enter a valid email"}],password:[{type:"required",message:"Password is required"},{type:"minlength",message:"Password must be at least 5 characters long"},{type:"pattern",message:"Your password must contain at least one uppercase, one lowercase, and one number"}]}}return l.prototype.ngOnInit=function(){this.createForms()},l.prototype.createForms=function(){this.userDetailsForm=this.fb.group({email:new r.f("",r.u.compose([r.u.required,r.u.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new r.f("",r.u.compose([r.u.minLength(5),r.u.required,r.u.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]))})},l.prototype.onSubmitUserDetails=function(l){var n=this;this.simpleLogin.authenticate(l).subscribe(function(l){200==l.status?(localStorage.setItem("userEmail",l.email),localStorage.setItem("firstName",l.firstName),n.router.navigateByUrl("/categories")):(n.successMessage="",n.errorMessage="Invalid credentials")},function(l){console.error(l),n.successMessage="",n.errorMessage="An error has occured,please retry later"})},l}(),c=u("ZYCi"),p=e["\u0275crt"]({encapsulation:0,styles:[[".contact_from[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{background-color:#fff}"]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.successMessage)})}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.errorMessage)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"label",[["class","bmd-label-floating"],["for","email"],["style","margin: -5% 21%;color: red;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","help-block with-errors"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.userDetailsForm.get("email").hasError(n.context.$implicit.type)&&(u.userDetailsForm.get("email").dirty||u.userDetailsForm.get("email").touched))},null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"label",[["class","bmd-label-floating"],["for","password"],["style","margin: -9% 21%;color: red;position: absolute;width: 100%;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.message)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","help-block with-errors"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](2,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.userDetailsForm.get("password").hasError(n.context.$implicit.type)&&(u.userDetailsForm.get("password").dirty||u.userDetailsForm.get("password").touched))},null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,64,"div",[["class","main-bg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,63,"div",[["class","sub-main-w3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,62,"div",[["class","bg-content-w3pvt"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","top-content-style"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["alt",""],["src","../../assets/img/user.png"],["style","\n    background-color: white;\n"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](6,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](8,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](9,0,null,null,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,11).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmitUserDetails(o.userDetailsForm.value)&&t),t},null,null)),e["\u0275did"](10,16384,null,0,r.w,[],null,null),e["\u0275did"](11,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,r.c,null,[r.h]),e["\u0275did"](13,16384,null,0,r.n,[[4,r.c]],null,null),(l()(),e["\u0275eld"](14,0,null,null,1,"p",[["class","legend"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Welcome"])),(l()(),e["\u0275eld"](16,0,null,null,12,"div",[["class","input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,7,"input",[["formControlName","email"],["id","email"],["name","email"],["placeholder","Your E-mail"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,18)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,18).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,18)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,18)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](18,16384,null,0,r.d,[e.Renderer2,e.ElementRef,[2,r.a]],null,null),e["\u0275did"](19,16384,null,0,r.s,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,r.j,function(l){return[l]},[r.s]),e["\u0275prd"](1024,null,r.k,function(l){return[l]},[r.d]),e["\u0275did"](22,671744,null,0,r.g,[[3,r.c],[6,r.j],[8,null],[6,r.k],[2,r.y]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.l,null,[r.g]),e["\u0275did"](24,16384,null,0,r.m,[[4,r.l]],null,null),(l()(),e["\u0275eld"](25,0,null,null,0,"span",[["class","focus-input100"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](27,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](28,0,null,null,0,"span",[["class","fa fa-envelope"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,13,"div",[["class","input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,7,"input",[["formControlName","password"],["id","password"],["name","password"],["placeholder","Your password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,31)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,31).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,31)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,31)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](31,16384,null,0,r.d,[e.Renderer2,e.ElementRef,[2,r.a]],null,null),e["\u0275did"](32,16384,null,0,r.s,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,r.j,function(l){return[l]},[r.s]),e["\u0275prd"](1024,null,r.k,function(l){return[l]},[r.d]),e["\u0275did"](35,671744,null,0,r.g,[[3,r.c],[6,r.j],[8,null],[6,r.k],[2,r.y]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.l,null,[r.g]),e["\u0275did"](37,16384,null,0,r.m,[[4,r.l]],null,null),(l()(),e["\u0275eld"](38,0,null,null,1,"a",[["a",""],["style","float: left;"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.router.navigate(["/forgotPassword"])&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" Forgot Password ? "])),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](41,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](42,0,null,null,0,"span",[["class","fa fa-unlock"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"button",[["class","btn submit"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,0,"span",[["class","fa fa-sign-in"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,1,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,0,"hr",[["style","height: 2px; border-top: 1px solid #000;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,2,"div",[["class","col-lg-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Or"])),(l()(),e["\u0275eld"](52,0,null,null,1,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,0,"hr",[["style","height: 2px;  border-top: 1px solid #000;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,1,"h4",[["style","font-size: 16px;float: left;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Autho0 Login "])),(l()(),e["\u0275eld"](56,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.auth.login()&&e),e},null,null)),(l()(),e["\u0275eld"](57,0,null,null,0,"img",[["alt","auth0"],["src","../../assets/img/auth0.png"],["style","max-width: 50px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Not a member? "])),(l()(),e["\u0275eld"](60,0,null,null,1,"a",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.router.navigate(["/register"])&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" Sign up now "])),(l()(),e["\u0275eld"](62,0,null,null,2,"div",[["class","copyright"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" By logging in, you agree to our Terms of Service, Privacy Policy, Community Guidelines and Cookie Policy. "]))],function(l,n){var u=n.component;l(n,6,0,""!=u.successMessage),l(n,8,0,""!=u.errorMessage),l(n,11,0,u.userDetailsForm),l(n,19,0,""),l(n,22,0,"email"),l(n,27,0,u.validation_messages.email),l(n,32,0,""),l(n,35,0,"password"),l(n,41,0,u.validation_messages.password)},function(l,n){var u=n.component;l(n,9,0,e["\u0275nov"](n,13).ngClassUntouched,e["\u0275nov"](n,13).ngClassTouched,e["\u0275nov"](n,13).ngClassPristine,e["\u0275nov"](n,13).ngClassDirty,e["\u0275nov"](n,13).ngClassValid,e["\u0275nov"](n,13).ngClassInvalid,e["\u0275nov"](n,13).ngClassPending),l(n,17,0,e["\u0275nov"](n,19).required?"":null,e["\u0275nov"](n,24).ngClassUntouched,e["\u0275nov"](n,24).ngClassTouched,e["\u0275nov"](n,24).ngClassPristine,e["\u0275nov"](n,24).ngClassDirty,e["\u0275nov"](n,24).ngClassValid,e["\u0275nov"](n,24).ngClassInvalid,e["\u0275nov"](n,24).ngClassPending),l(n,30,0,e["\u0275nov"](n,32).required?"":null,e["\u0275nov"](n,37).ngClassUntouched,e["\u0275nov"](n,37).ngClassTouched,e["\u0275nov"](n,37).ngClassPristine,e["\u0275nov"](n,37).ngClassDirty,e["\u0275nov"](n,37).ngClassValid,e["\u0275nov"](n,37).ngClassInvalid,e["\u0275nov"](n,37).ngClassPending),l(n,43,0,!u.userDetailsForm.valid)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,y,p)),e["\u0275did"](1,114688,null,0,d,[s.a,c.k,r.e,a.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e["\u0275ccf"]("app-login",d,w,{},{},[]),I=u("t/Na"),F=u("sE5F"),R=function(){return function(){}}();u.d(n,"LoginModuleNgFactory",function(){return k});var k=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,C]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,I.i,I.o,[i.DOCUMENT,e.PLATFORM_ID,I.m]),e["\u0275mpd"](4608,I.p,I.p,[I.i,I.n]),e["\u0275mpd"](5120,I.a,function(l){return[l]},[I.p]),e["\u0275mpd"](4608,I.l,I.l,[]),e["\u0275mpd"](6144,I.j,null,[I.l]),e["\u0275mpd"](4608,I.h,I.h,[I.j]),e["\u0275mpd"](6144,I.b,null,[I.h]),e["\u0275mpd"](4608,I.f,I.k,[I.b,e.Injector]),e["\u0275mpd"](4608,I.c,I.c,[I.f]),e["\u0275mpd"](4608,r.x,r.x,[]),e["\u0275mpd"](4608,r.e,r.e,[]),e["\u0275mpd"](4608,F.c,F.c,[]),e["\u0275mpd"](4608,F.g,F.b,[]),e["\u0275mpd"](5120,F.i,F.j,[]),e["\u0275mpd"](4608,F.h,F.h,[F.c,F.g,F.i]),e["\u0275mpd"](4608,F.f,F.a,[]),e["\u0275mpd"](5120,F.d,F.k,[F.h,F.f]),e["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),e["\u0275mpd"](1073742336,c.l,c.l,[[2,c.r],[2,c.k]]),e["\u0275mpd"](1073742336,R,R,[]),e["\u0275mpd"](1073742336,I.e,I.e,[]),e["\u0275mpd"](1073742336,I.d,I.d,[]),e["\u0275mpd"](1073742336,r.v,r.v,[]),e["\u0275mpd"](1073742336,r.i,r.i,[]),e["\u0275mpd"](1073742336,r.r,r.r,[]),e["\u0275mpd"](1073742336,F.e,F.e,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,c.i,function(){return[[{path:"",component:d}]]},[]),e["\u0275mpd"](256,I.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,I.n,"X-XSRF-TOKEN",[])])})}}]);