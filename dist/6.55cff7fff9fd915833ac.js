(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2Nv7":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var e=u("2WpN"),t=(u("5Y89"),function(){function l(l){this.loaderService=l}return l.prototype.intercept=function(l,n){var u=this;console.log("sssssssssssssssssssssssssssssssssssssss"),this.loaderService.show();var t=localStorage.getItem("token");if(console.log("saved toekn   "+t),t){var i=l.clone({headers:l.headers.set("Authorization",t)});return n.handle(i).pipe(Object(e.a)(function(){return u.loaderService.hide()}))}return n.handle(l).pipe(Object(e.a)(function(){return u.loaderService.hide()}))},l}())},"NQu+":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("Ip0R"),r=u("9ans"),a=u("xNAl"),s=u("G+kB"),d=function(){function l(l,n,u){this.meteo=l,this.auth=n,this.simpleLogin=u,this.meteoDetails={temperature:"",humidite:"",vitesseVent:"",description:""},this.curentDate="",this.address={region:"",country:""}}return l.prototype.ngOnInit=function(){var l=this;this.meteo.detectLocation(function(n){return l.getCityName(n)})},l.prototype.getCityName=function(l){var n=this;this.meteo.getPositionDetailsFromLocationIQAPI(l.longitude,l.latitude).subscribe(function(l){console.log("rrrrrrrr    "+JSON.stringify(l)),n.address.region=l.address.city,n.address.country=l.address.country_code,n.meteo.getCityMeteo(n.address).subscribe(function(l){n.meteoDetails.temperature=l.main.temp,n.meteoDetails.humidite=l.main.humidity,n.meteoDetails.vitesseVent=l.wind.speed,n.meteoDetails.description=l.weather[0].description,n.curentDate=Object(o.formatDate)(new Date,"yyyy/MM/dd","en")})})},l}(),c=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,48,"div",[["class","w3ls-weather"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,47,"div",[["align","center"],["class","w3ls-weather-agileinfo"],["style","margin: 10%"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,10,"div",[["class","weather-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","weather-left-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,[""," ",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),e["\u0275ppd"](8,2),(l()(),e["\u0275eld"](9,0,null,null,3,"ul",[["class","report"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[""," \xb0C"])),(l()(),e["\u0275eld"](13,0,null,null,34,"div",[["class","weather-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,33,"ul",[],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"figure",[["class","icons"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"canvas",[["height","60"],["id","partly-cloudy-day"],["width","60"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,[""," \xb0C"])),(l()(),e["\u0275eld"](20,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,8,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"figure",[["class","icons"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,0,"canvas",[["height","40"],["id","clear-day"],["width","40"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,4,"div",[["class","weather-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Humidity"])),(l()(),e["\u0275eld"](27,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,["",""])),(l()(),e["\u0275eld"](29,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,8,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"figure",[["class","icons"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,0,"canvas",[["height","40"],["id","snow"],["width","40"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,4,"div",[["class","weather-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Wind Speed"])),(l()(),e["\u0275eld"](36,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](37,null,["",""])),(l()(),e["\u0275eld"](38,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,8,"li",[],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,1,"figure",[["class","icons"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,0,"canvas",[["height","40"],["id","partly-cloudy-night"],["width","40"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,4,"div",[["class","weather-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Description"])),(l()(),e["\u0275eld"](45,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](46,null,["",""])),(l()(),e["\u0275eld"](47,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null))],null,function(l,n){var u=n.component;l(n,5,0,u.address.region,u.address.country);var t=e["\u0275unv"](n,7,0,l(n,8,0,e["\u0275nov"](n.parent,0),u.curentDate,"medium"));l(n,7,0,t),l(n,12,0,u.meteoDetails.temperature),l(n,19,0,u.meteoDetails.temperature),l(n,28,0,u.meteoDetails.humidite),l(n,37,0,u.meteoDetails.vitesseVent),l(n,46,0,u.meteoDetails.description)})}function m(l){return e["\u0275vid"](2,[e["\u0275pid"](0,o.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](2,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.auth.isAuthenticated()||u.simpleLogin.isLoggedIn())},null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-meteo",[],null,null,null,m,c)),e["\u0275did"](1,114688,null,0,d,[a.a,r.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var f=e["\u0275ccf"]("app-meteo",d,h,{},{},[]),g=u("t/Na"),v=u("2Nv7"),y=u("5Y89"),w=u("gIcY"),D=u("sE5F"),I=u("ZYCi"),C=function(){return function(){}}();u.d(n,"MeteoModuleNgFactory",function(){return N});var N=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,f]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,g.i,g.o,[o.DOCUMENT,e.PLATFORM_ID,g.m]),e["\u0275mpd"](4608,g.p,g.p,[g.i,g.n]),e["\u0275mpd"](5120,g.a,function(l,n){return[l,new v.a(n)]},[g.p,y.a]),e["\u0275mpd"](4608,g.l,g.l,[]),e["\u0275mpd"](6144,g.j,null,[g.l]),e["\u0275mpd"](4608,g.h,g.h,[g.j]),e["\u0275mpd"](6144,g.b,null,[g.h]),e["\u0275mpd"](4608,g.f,g.k,[g.b,e.Injector]),e["\u0275mpd"](4608,g.c,g.c,[g.f]),e["\u0275mpd"](4608,w.z,w.z,[]),e["\u0275mpd"](4608,w.g,w.g,[]),e["\u0275mpd"](4608,D.c,D.c,[]),e["\u0275mpd"](4608,D.g,D.b,[]),e["\u0275mpd"](5120,D.i,D.j,[]),e["\u0275mpd"](4608,D.h,D.h,[D.c,D.g,D.i]),e["\u0275mpd"](4608,D.f,D.a,[]),e["\u0275mpd"](5120,D.d,D.k,[D.h,D.f]),e["\u0275mpd"](4608,s.a,s.a,[g.c,I.k]),e["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),e["\u0275mpd"](1073742336,I.l,I.l,[[2,I.r],[2,I.k]]),e["\u0275mpd"](1073742336,C,C,[]),e["\u0275mpd"](1073742336,g.e,g.e,[]),e["\u0275mpd"](1073742336,g.d,g.d,[]),e["\u0275mpd"](1073742336,w.x,w.x,[]),e["\u0275mpd"](1073742336,w.k,w.k,[]),e["\u0275mpd"](1073742336,w.t,w.t,[]),e["\u0275mpd"](1073742336,D.e,D.e,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,I.i,function(){return[[{path:"",component:d}]]},[]),e["\u0275mpd"](256,g.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,g.n,"X-XSRF-TOKEN",[])])})},PG31:function(l,n,u){"use strict";var e=u("6blF"),t=u("9Z1F");function i(l){return Object(t.a)(l)(this)}e.a.prototype.catch=i,e.a.prototype._catch=i},xNAl:function(l,n,u){"use strict";u.d(n,"a",function(){return o}),u("BuZO"),u("PG31");var e=u("AytR"),t=u("CcnG"),i=u("t/Na"),o=function(){function l(l){this.http=l}return l.prototype.getIpLocation=function(){return this.http.get("http://extreme-ip-lookup.com/json/").map(function(l){return l})},l.prototype.detectLocation=function(l){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){l(n.coords)},function(l){alert("Please enable your GPS position future.")},{enableHighAccuracy:!0,maximumAge:0,timeout:1e7}):alert("No support for geolocation")},l.prototype.getPositionDetailsFromLocationIQAPI=function(l,n){return this.http.get("https://eu1.locationiq.com/v1/reverse.php?key="+e.a.meteoApiKey+"&lat="+n+"&lon="+l+"&format=json").map(function(l){return l})},l.prototype.getCityMeteo=function(l){return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+l.region+","+l.country+"&appid="+e.a.openweatherAppId+"&units=metric").map(function(l){return l})},l.ngInjectableDef=t.defineInjectable({factory:function(){return new l(t.inject(i.c))},token:l,providedIn:"root"}),l}()}}]);