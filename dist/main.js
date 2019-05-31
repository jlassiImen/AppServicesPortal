(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{text-align: left;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e3RleHQtYWxpZ246IGxlZnQ7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n      <form class=\"form-inline\">\n        <button id=\"qsLogoutBtn\"\n          class=\"btn btn-primary my-2 my-sm-0\"\n          *ngIf=\"auth.isAuthenticated()\"\n          (click)=\"auth.logout()\" type=\"button\">\n            Log Out\n        </button>\n      </form>\n  </div>\n</nav>\n\n  <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.auth.renewTokens();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./meteo/meteo.component */ "./src/app/meteo/meteo.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"],
                _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_12__["MeteoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"])
            ],
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meteo/meteo.component */ "./src/app/meteo/meteo.component.ts");



var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'meteo', component: _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_2__["MeteoComponent"] },
    { path: 'callback', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_1__["CallbackComponent"] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/callback/callback.component.css":
/*!*************************************************!*\
  !*** ./src/app/callback/callback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\" style=\"background-image: url('../../assets/img/back.png');\">\r\n    <div class=\"container\" style=\"\r\n    width: 50%;\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4 login-sec\" style=\"\r\n    width: 100%;\">\r\n\t\t    <h2 class=\"text-center\">Meteo App</h2>\r\n\t\t    <form class=\"login-form\">\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"text-uppercase\"> You are not logged in!</label>\r\n  </div>\r\n  \r\n    <div class=\"form-check\">\r\n    <label class=\"form-check-label\">\r\n    </label>\r\n     <button id=\"qsLoginBtn\"\r\n          class=\"btn btn-login float-right\"\r\n          *ngIf=\"!auth.isAuthenticated()\"\r\n          (click)=\"auth.login()\" type=\"button\">\r\n            Log In\r\n        </button>\r\n  </div>\r\n  \r\n</form>\r\n\r\n\t\t</div>\r\n\r\n</div></div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/meteo/meteo.component.css":
/*!*******************************************!*\
  !*** ./src/app/meteo/meteo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--\r\nAuthor: W3layouts\r\nAuthor URL: http://w3layouts.com\r\nLicense: Creative Commons Attribution 3.0 Unported\r\nLicense URL: http://creativecommons.org/licenses/by/3.0/\r\n--*/\r\n/*--reset--*/\r\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\r\narticle, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\r\nol,ul{list-style:none;margin:0px;padding:0px;}\r\nblockquote,q{quotes:none;}\r\nblockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}\r\ntable{border-collapse:collapse;border-spacing:0;}\r\n/*--start editing from here--*/\r\na{text-decoration:none;}\r\n.txt-rt{text-align:right;}\r\n/* text align right */\r\n.txt-lt{text-align:left;}\r\n/* text align left */\r\n.txt-center{text-align:center;}\r\n/* text align center */\r\n.float-rt{float:right;}\r\n/* float right */\r\n.float-lt{float:left;}\r\n/* float left */\r\n.clear{clear:both;}\r\n/* clear float */\r\n.pos-relative{position:relative;}\r\n/* Position Relative */\r\n.pos-absolute{position:absolute;}\r\n/* Position Absolute */\r\n.vertical-base{\tvertical-align:baseline;}\r\n/* vertical align baseline */\r\n.vertical-top{\tvertical-align:top;}\r\n/* vertical align top */\r\nnav.vertical ul li{\tdisplay:block;}\r\n/* vertical menu */\r\nnav.horizontal ul li{\tdisplay: inline-block;}\r\n/* horizontal menu */\r\nimg{max-width:100%;}\r\n/*--end reset--*/\r\nbody {\r\n     font-family: 'Roboto Condensed', sans-serif; \r\n background-size: cover;\r\n\tbackground-attachment: fixed;\r\n}\r\nh1 {\r\n    font-size: 3em;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-weight: 100;\r\n}\r\n/*-- w3ls-weather --*/\r\n.w3ls-weather {\r\n    padding: 0em 0 0;\r\n}\r\n.w3ls-weather-agileinfo {\r\n    width: 35%;\r\n    margin: 5em auto;\r\n    background: url('back.png')no-repeat center;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    border: 8px solid rgba(255, 255, 255, 0.85); \r\n border-radius: 50px;\r\n}\r\n/*-- weather --*/\r\n.weather-left {\r\n    float: left;\r\n    width: 75%;   \r\n}\r\n.weather-left-text {\r\n    padding:4em 2em 5em;\r\n    text-align: center;\r\n}\r\n.weather-right{\r\n\tfloat:right;\r\n\twidth:25%;\r\n\tbackground:#fff;\r\n}\r\n.weather-left  h4 {\r\n    font-size: 1.5em;\r\n    color: #fff;\r\n}\r\n.weather-left  h5 {\r\n    font-size: .9em;\r\n    color: #fff;\r\n    margin-top: 0.5em;\r\n}\r\n.weather-left span.glyphicon {\r\n    margin-right: 0.8em;\r\n}\r\nul.report li {\r\n    display: block;\r\n}\r\nul.report li a {\r\n    padding: 0.4em 1.5em;\r\n    background: #3F51B5; \r\n border-radius: 0 50px 50px 0;\r\n    color: #fff;\r\n    font-size: 1em;\r\n\tdisplay: inline-block;\r\n}\r\nul.report li:nth-child(2) {\r\n    margin-top: 1.2em;\r\n}\r\nul.report li:nth-child(2) a{\r\n\tpadding: 0.4em 1.2em .4em 0.8em;\r\n\tcolor: #3F51B5;\r\n\tbackground: #fff;\r\n\tmargin-left: -1em;\r\n\ttransition:.5s all;\r\n}\r\n.weather-right ul li {\r\n    display: block;\r\n\ttext-align: center;\r\n\tpadding: 1em;\r\n\tbackground: #F44336;\r\n}\r\n.weather-right ul li:nth-child(2){ \r\n\tbackground: #9C27B0;\r\n}\r\n.weather-right ul li:nth-child(3){ \r\n\tbackground: #03A9F4;\r\n}\r\n.weather-right ul li:nth-child(4){ \r\n\tbackground: #FFC107;\r\n}\r\nul.report li:nth-child(2) a span {\r\n    opacity:0;\r\n\t-moz-opacity:0;\r\n\ttransition:.5s all;\r\n}\r\nul.report li:nth-child(2) a:hover span{\r\n\topacity:1;\r\n\t-moz-opacity:1;\r\n}\r\nul.report li:nth-child(2) a:hover{\r\n\tmargin:0;\r\n}\r\nfigure.icons,.weather-text  {\r\n    float: left;\r\n\twidth: 0%;\r\n}\r\n.weather-right ul li:nth-child(1) figure.icons {\r\n    float: none;\r\n\twidth: 100%;\r\n}\r\n.weather-right h3 {\r\n    font-size: 1.5em;\r\n    color: #fff; \r\n}\r\ncanvas#clear-day,canvas#snow,canvas#partly-cloudy-night {\r\n    width: 80%;\r\n}\r\n.weather-right h4 {\r\n    font-size: 1em;\r\n    color: #fff;\r\n}\r\n.weather-right h5 {\r\n    font-size: .9em;\r\n    color: #fff;\r\n    margin-top: 0.5em;\r\n}\r\n/*-- //weather --*/\r\n/*-- copyright --*/\r\n.copyw3-agile {\r\n    margin: 2em 0;\r\n    text-align: center;\r\n}\r\n.copyw3-agile p {\r\n    font-size: 0.9em;\r\n    color: #fff;\r\n    line-height: 1.8em;\r\n    letter-spacing: 1px;\r\n    font-weight: 100;\r\n\tpadding:0 1em;\r\n}\r\n.copyw3-agile p a{\r\n    color: #fff;\r\n\ttransition: 0.5s all; \r\n}\r\n.copyw3-agile p a:hover{\r\n    color: #f44336;\t\r\n}\r\n/*-- //copyright --*/\r\n/*-- responsive-design --*/\r\n@media(max-width:1366px){\r\n.w3ls-weather-agileinfo { \r\n    margin: 4em auto; \r\n}\r\n}\r\n@media(max-width:1280px){\r\n.w3ls-weather-agileinfo {\r\n    width: 41%; \r\n}\r\n}\r\n@media(max-width:1080px){\r\n.w3ls-weather-agileinfo {\r\n    width: 45%;\r\n}\r\n}\r\n@media(max-width:991px){\r\n.w3ls-weather-agileinfo {\r\n    width: 52%;\r\n}\r\n}\r\n@media(max-width:800px){\r\n.w3ls-weather-agileinfo {\r\n    width: 65%;\r\n    margin: 3em auto;\r\n}\r\n.w3ls-weather {\r\n    padding: 2em 0 0;\r\n}\r\nh1 {\r\n    font-size: 2.6em; \r\n}\r\n}\r\n@media(max-width:676px){\r\n.w3ls-weather-agileinfo {\r\n    width: 70%; \r\n}\r\n.weather-left { \r\n    width: 70%;\r\n}\r\n.weather-right { \r\n    width: 30%; \r\n}  \r\n}\r\n@media(max-width:600px){\r\nh1 {\r\n    font-size: 2.3em;\r\n}\r\n.w3ls-weather-agileinfo { \r\n    margin: 2em auto;\r\n}\r\n}\r\n@media(max-width:480px){\r\nh1 {\r\n    font-size: 2em;\r\n}\r\n.weather-left h4 {\r\n    font-size: 1.3em; \r\n}\r\n.weather-right h3 {\r\n    font-size: 1.1em; \r\n}\r\ncanvas#partly-cloudy-day {\r\n    width: 50px !important;\r\n    height: 50px !important;\r\n}\r\nul.report li:nth-child(2) {\r\n    margin-top: 1em;\r\n}\r\n.w3ls-weather-agileinfo {\r\n    margin: 2em auto;\r\n    border-width: 6px;\r\n    width: 76%;\r\n}\r\n.weather-right ul li { \r\n    padding: 0.8em; \r\n}\r\n.weather-left h5 {\r\n    font-size: .8em; \r\n    margin-top: 0.8em;\r\n}\r\n.weather-left-text {\r\n    padding: 3em 1em; \r\n}\r\n}\r\n@media(max-width:414px){\r\nh1 {\r\n    font-size: 1.8em;\r\n}\r\n.weather-right h5 {\r\n    font-size: .8em;\r\n    color: #fff;\r\n    margin-top: 0.5em;\r\n} \r\n}\r\n@media(max-width:384px){\r\n.w3ls-weather-agileinfo {\r\n    margin: 1.5em auto;\r\n    border-width: 4px;\r\n    width: 87%;\r\n}\r\n.weather-right ul li {\r\n    padding: 0.8em .5em;\r\n}\r\n}\r\n@media(max-width:320px){\r\nh1 {\r\n    font-size: 1.6em;\r\n}\r\n.weather-left h5 {\r\n    font-size: .75em; \r\n}\r\nul.report li a {\r\n    padding: 0.4em 1em; \r\n    font-size: 0.9em; \r\n}\r\nul.report li:nth-child(2) {\r\n    margin-top: 0.5em;\r\n}\r\n.weather-right h5 {\r\n    font-size: .7em; \r\n}\r\n.weather-right h4 {\r\n    font-size: 0.9em; \r\n}\r\n.weather-right h3 {\r\n    font-size: 1em;\r\n}\r\n}\r\n/*-- //responsive-design --*/\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0ZW8vbWV0ZW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILFlBQVk7QUFDWiw0WkFBNFosUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQztBQUM1ZSx3RkFBd0YsY0FBYyxDQUFDO0FBQ3ZHLE1BQU0sZUFBZSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDN0MsYUFBYSxXQUFXLENBQUM7QUFDekIsb0RBQW9ELFVBQVUsQ0FBQyxZQUFZLENBQUM7QUFDNUUsTUFBTSx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoRCw4QkFBOEI7QUFDOUIsRUFBRSxvQkFBb0IsQ0FBQztBQUN2QixRQUFRLGdCQUFnQixDQUFDO0FBQUMscUJBQXFCO0FBQy9DLFFBQVEsZUFBZSxDQUFDO0FBQUMsb0JBQW9CO0FBQzdDLFlBQVksaUJBQWlCLENBQUM7QUFBQyxzQkFBc0I7QUFDckQsVUFBVSxXQUFXLENBQUM7QUFBQyxnQkFBZ0I7QUFDdkMsVUFBVSxVQUFVLENBQUM7QUFBQyxlQUFlO0FBQ3JDLE9BQU8sVUFBVSxDQUFDO0FBQUMsZ0JBQWdCO0FBQ25DLGNBQWMsaUJBQWlCLENBQUM7QUFBQyxzQkFBc0I7QUFDdkQsY0FBYyxpQkFBaUIsQ0FBQztBQUFDLHNCQUFzQjtBQUN2RCxnQkFBZ0IsdUJBQXVCLENBQUM7QUFBQyw0QkFBNEI7QUFDckUsZUFBZSxrQkFBa0IsQ0FBQztBQUFDLHVCQUF1QjtBQUMxRCxvQkFBb0IsYUFBYSxDQUFDO0FBQUMsa0JBQWtCO0FBQ3JELHNCQUFzQixxQkFBcUIsQ0FBQztBQUFDLG9CQUFvQjtBQUNqRSxJQUFJLGNBQWMsQ0FBQztBQUNuQixnQkFBZ0I7QUFDaEI7S0FDSywyQ0FBMkM7Q0FHNUMsc0JBQXNCO0NBQ3pCLDRCQUE0QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNs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Q0E7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7QUFDQSw0QkFBNEIiLCJmaWxlIjoic3JjL2FwcC9tZXRlby9tZXRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLVxyXG5BdXRob3I6IFczbGF5b3V0c1xyXG5BdXRob3IgVVJMOiBodHRwOi8vdzNsYXlvdXRzLmNvbVxyXG5MaWNlbnNlOiBDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIDMuMCBVbnBvcnRlZFxyXG5MaWNlbnNlIFVSTDogaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1xyXG4tLSovXHJcbi8qLS1yZXNldC0tKi9cclxuaHRtbCxib2R5LGRpdixzcGFuLGFwcGxldCxvYmplY3QsaWZyYW1lLGgxLGgyLGgzLGg0LGg1LGg2LHAsYmxvY2txdW90ZSxwcmUsYSxhYmJyLGFjcm9ueW0sYWRkcmVzcyxiaWcsY2l0ZSxjb2RlLGRlbCxkZm4sZW0saW1nLGlucyxrYmQscSxzLHNhbXAsc21hbGwsc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHR0LHZhcixiLHUsaSxkbCxkdCxkZCxvbCxuYXYgdWwsbmF2IGxpLGZpZWxkc2V0LGZvcm0sbGFiZWwsbGVnZW5kLHRhYmxlLGNhcHRpb24sdGJvZHksdGZvb3QsdGhlYWQsdHIsdGgsdGQsYXJ0aWNsZSxhc2lkZSxjYW52YXMsZGV0YWlscyxlbWJlZCxmaWd1cmUsZmlnY2FwdGlvbixmb290ZXIsaGVhZGVyLGhncm91cCxtZW51LG5hdixvdXRwdXQscnVieSxzZWN0aW9uLHN1bW1hcnksdGltZSxtYXJrLGF1ZGlvLHZpZGVve21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtmb250LXNpemU6MTAwJTtmb250OmluaGVyaXQ7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7fVxyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7ZGlzcGxheTogYmxvY2s7fVxyXG5vbCx1bHtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luOjBweDtwYWRkaW5nOjBweDt9XHJcbmJsb2NrcXVvdGUscXtxdW90ZXM6bm9uZTt9XHJcbmJsb2NrcXVvdGU6YmVmb3JlLGJsb2NrcXVvdGU6YWZ0ZXIscTpiZWZvcmUscTphZnRlcntjb250ZW50OicnO2NvbnRlbnQ6bm9uZTt9XHJcbnRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO31cclxuLyotLXN0YXJ0IGVkaXRpbmcgZnJvbSBoZXJlLS0qL1xyXG5he3RleHQtZGVjb3JhdGlvbjpub25lO31cclxuLnR4dC1ydHt0ZXh0LWFsaWduOnJpZ2h0O30vKiB0ZXh0IGFsaWduIHJpZ2h0ICovXHJcbi50eHQtbHR7dGV4dC1hbGlnbjpsZWZ0O30vKiB0ZXh0IGFsaWduIGxlZnQgKi9cclxuLnR4dC1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXI7fS8qIHRleHQgYWxpZ24gY2VudGVyICovXHJcbi5mbG9hdC1ydHtmbG9hdDpyaWdodDt9LyogZmxvYXQgcmlnaHQgKi9cclxuLmZsb2F0LWx0e2Zsb2F0OmxlZnQ7fS8qIGZsb2F0IGxlZnQgKi9cclxuLmNsZWFye2NsZWFyOmJvdGg7fS8qIGNsZWFyIGZsb2F0ICovXHJcbi5wb3MtcmVsYXRpdmV7cG9zaXRpb246cmVsYXRpdmU7fS8qIFBvc2l0aW9uIFJlbGF0aXZlICovXHJcbi5wb3MtYWJzb2x1dGV7cG9zaXRpb246YWJzb2x1dGU7fS8qIFBvc2l0aW9uIEFic29sdXRlICovXHJcbi52ZXJ0aWNhbC1iYXNle1x0dmVydGljYWwtYWxpZ246YmFzZWxpbmU7fS8qIHZlcnRpY2FsIGFsaWduIGJhc2VsaW5lICovXHJcbi52ZXJ0aWNhbC10b3B7XHR2ZXJ0aWNhbC1hbGlnbjp0b3A7fS8qIHZlcnRpY2FsIGFsaWduIHRvcCAqL1xyXG5uYXYudmVydGljYWwgdWwgbGl7XHRkaXNwbGF5OmJsb2NrO30vKiB2ZXJ0aWNhbCBtZW51ICovXHJcbm5hdi5ob3Jpem9udGFsIHVsIGxpe1x0ZGlzcGxheTogaW5saW5lLWJsb2NrO30vKiBob3Jpem9udGFsIG1lbnUgKi9cclxuaW1ne21heC13aWR0aDoxMDAlO31cclxuLyotLWVuZCByZXNldC0tKi9cclxuYm9keSB7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjsgICBcclxuXHQtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0LW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG4vKi0tIHczbHMtd2VhdGhlciAtLSovXHJcbi53M2xzLXdlYXRoZXIge1xyXG4gICAgcGFkZGluZzogMGVtIDAgMDtcclxufVxyXG4udzNscy13ZWF0aGVyLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbWFyZ2luOiA1ZW0gYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iYWNrLnBuZycpbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1MHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLyotLSB3ZWF0aGVyIC0tKi9cclxuLndlYXRoZXItbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NSU7ICAgXHJcbn1cclxuLndlYXRoZXItbGVmdC10ZXh0IHtcclxuICAgIHBhZGRpbmc6NGVtIDJlbSA1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndlYXRoZXItcmlnaHR7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcblx0d2lkdGg6MjUlO1xyXG5cdGJhY2tncm91bmQ6I2ZmZjtcclxufVxyXG4ud2VhdGhlci1sZWZ0ICBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLndlYXRoZXItbGVmdCAgaDUge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4ud2VhdGhlci1sZWZ0IHNwYW4uZ2x5cGhpY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC44ZW07XHJcbn1cclxudWwucmVwb3J0IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnVsLnJlcG9ydCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDAuNGVtIDEuNWVtO1xyXG4gICAgYmFja2dyb3VuZDogIzNGNTFCNTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG51bC5yZXBvcnQgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi10b3A6IDEuMmVtO1xyXG59XHJcbnVsLnJlcG9ydCBsaTpudGgtY2hpbGQoMikgYXtcclxuXHRwYWRkaW5nOiAwLjRlbSAxLjJlbSAuNGVtIDAuOGVtO1xyXG5cdGNvbG9yOiAjM0Y1MUI1O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0bWFyZ2luLWxlZnQ6IC0xZW07XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOi41cyBhbGw7IFxyXG5cdC1tb3otdHJhbnNpdGlvbjouNXMgYWxsO1xyXG5cdHRyYW5zaXRpb246LjVzIGFsbDtcclxufVxyXG4ud2VhdGhlci1yaWdodCB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMWVtO1xyXG5cdGJhY2tncm91bmQ6ICNGNDQzMzY7XHJcbn1cclxuLndlYXRoZXItcmlnaHQgdWwgbGk6bnRoLWNoaWxkKDIpeyBcclxuXHRiYWNrZ3JvdW5kOiAjOUMyN0IwO1xyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IHVsIGxpOm50aC1jaGlsZCgzKXsgXHJcblx0YmFja2dyb3VuZDogIzAzQTlGNDtcclxufVxyXG4ud2VhdGhlci1yaWdodCB1bCBsaTpudGgtY2hpbGQoNCl7IFxyXG5cdGJhY2tncm91bmQ6ICNGRkMxMDc7XHJcbn0gXHJcbnVsLnJlcG9ydCBsaTpudGgtY2hpbGQoMikgYSBzcGFuIHtcclxuICAgIG9wYWNpdHk6MDtcclxuXHQtbW96LW9wYWNpdHk6MDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246LjVzIGFsbDsgXHJcblx0LW1vei10cmFuc2l0aW9uOi41cyBhbGw7XHJcblx0dHJhbnNpdGlvbjouNXMgYWxsO1xyXG59XHJcbnVsLnJlcG9ydCBsaTpudGgtY2hpbGQoMikgYTpob3ZlciBzcGFue1xyXG5cdG9wYWNpdHk6MTtcclxuXHQtbW96LW9wYWNpdHk6MTtcclxufVxyXG51bC5yZXBvcnQgbGk6bnRoLWNoaWxkKDIpIGE6aG92ZXJ7XHJcblx0bWFyZ2luOjA7XHJcbn1cclxuZmlndXJlLmljb25zLC53ZWF0aGVyLXRleHQgIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiAwJTtcclxufVxyXG4ud2VhdGhlci1yaWdodCB1bCBsaTpudGgtY2hpbGQoMSkgZmlndXJlLmljb25zIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogI2ZmZjsgXHJcbn1cclxuY2FudmFzI2NsZWFyLWRheSxjYW52YXMjc25vdyxjYW52YXMjcGFydGx5LWNsb3VkeS1uaWdodCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLndlYXRoZXItcmlnaHQgaDUge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4vKi0tIC8vd2VhdGhlciAtLSovXHJcbi8qLS0gY29weXJpZ2h0IC0tKi9cclxuLmNvcHl3My1hZ2lsZSB7XHJcbiAgICBtYXJnaW46IDJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb3B5dzMtYWdpbGUgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuXHRwYWRkaW5nOjAgMWVtO1xyXG59XHJcbi5jb3B5dzMtYWdpbGUgcCBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGFsbDtcclxuXHQtbW96LXRyYW5zaXRpb246IDAuNXMgYWxsO1xyXG5cdHRyYW5zaXRpb246IDAuNXMgYWxsOyBcclxufVxyXG4uY29weXczLWFnaWxlIHAgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1x0XHJcbn1cclxuLyotLSAvL2NvcHlyaWdodCAtLSovXHJcbi8qLS0gcmVzcG9uc2l2ZS1kZXNpZ24gLS0qLyBcclxuQG1lZGlhKG1heC13aWR0aDoxMzY2cHgpe1xyXG4udzNscy13ZWF0aGVyLWFnaWxlaW5mbyB7IFxyXG4gICAgbWFyZ2luOiA0ZW0gYXV0bzsgXHJcbn1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjEyODBweCl7XHJcbi53M2xzLXdlYXRoZXItYWdpbGVpbmZvIHtcclxuICAgIHdpZHRoOiA0MSU7IFxyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDoxMDgwcHgpe1xyXG4udzNscy13ZWF0aGVyLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcbn0gXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xyXG4udzNscy13ZWF0aGVyLWFnaWxlaW5mbyB7XHJcbiAgICB3aWR0aDogNTIlO1xyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo4MDBweCl7XHJcbi53M2xzLXdlYXRoZXItYWdpbGVpbmZvIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDNlbSBhdXRvO1xyXG59XHJcbi53M2xzLXdlYXRoZXIge1xyXG4gICAgcGFkZGluZzogMmVtIDAgMDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDIuNmVtOyBcclxufVxyXG59IFxyXG5AbWVkaWEobWF4LXdpZHRoOjY3NnB4KXtcclxuLnczbHMtd2VhdGhlci1hZ2lsZWluZm8ge1xyXG4gICAgd2lkdGg6IDcwJTsgXHJcbn1cclxuLndlYXRoZXItbGVmdCB7IFxyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4ud2VhdGhlci1yaWdodCB7IFxyXG4gICAgd2lkdGg6IDMwJTsgXHJcbn0gIFxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NjAwcHgpe1xyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDIuM2VtO1xyXG59XHJcbi53M2xzLXdlYXRoZXItYWdpbGVpbmZvIHsgXHJcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0ODBweCl7XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi53ZWF0aGVyLWxlZnQgaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTsgXHJcbn1cclxuLndlYXRoZXItcmlnaHQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTsgXHJcbn1cclxuY2FudmFzI3BhcnRseS1jbG91ZHktZGF5IHtcclxuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG51bC5yZXBvcnQgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4udzNscy13ZWF0aGVyLWFnaWxlaW5mbyB7XHJcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbiAgICB3aWR0aDogNzYlO1xyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IHVsIGxpIHsgXHJcbiAgICBwYWRkaW5nOiAwLjhlbTsgXHJcbn1cclxuLndlYXRoZXItbGVmdCBoNSB7XHJcbiAgICBmb250LXNpemU6IC44ZW07IFxyXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbn1cclxuLndlYXRoZXItbGVmdC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDNlbSAxZW07IFxyXG59XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo0MTRweCl7XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuLndlYXRoZXItcmlnaHQgaDUge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufSBcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjM4NHB4KXtcclxuLnczbHMtd2VhdGhlci1hZ2lsZWluZm8ge1xyXG4gICAgbWFyZ2luOiAxLjVlbSBhdXRvO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgICB3aWR0aDogODclO1xyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDAuOGVtIC41ZW07XHJcbn1cclxufSBcclxuQG1lZGlhKG1heC13aWR0aDozMjBweCl7XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbn1cclxuLndlYXRoZXItbGVmdCBoNSB7XHJcbiAgICBmb250LXNpemU6IC43NWVtOyBcclxufVxyXG51bC5yZXBvcnQgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAxZW07IFxyXG4gICAgZm9udC1zaXplOiAwLjllbTsgXHJcbn1cclxudWwucmVwb3J0IGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxufVxyXG4ud2VhdGhlci1yaWdodCBoNSB7XHJcbiAgICBmb250LXNpemU6IC43ZW07IFxyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07IFxyXG59XHJcbi53ZWF0aGVyLXJpZ2h0IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbn1cclxuLyotLSAvL3Jlc3BvbnNpdmUtZGVzaWduIC0tKi9cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/meteo/meteo.component.html":
/*!********************************************!*\
  !*** ./src/app/meteo/meteo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"w3ls-weather\" *ngIf=\"auth.isAuthenticated()\" >\n\t\t<div class=\"w3ls-weather-agileinfo\"> \n\t\t\t<div class=\"weather-left\">\n\t\t\t\t<div class=\"weather-left-text\">\n\t\t\t\t\t<h4>{{address.region}} {{address.country}} </h4>\n\t\t\t\t\t<h5> {{ curentDate | date:'medium' }}</h5>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"report\">\n\t\t\t\t\t<li><a href=\"#\">{{meteoDetails.temperature}} °C</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"weather-right\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<figure class=\"icons\">\n\t\t\t\t\t\t\t<canvas id=\"partly-cloudy-day\" width=\"60\" height=\"60\"></canvas>\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t<h3>{{meteoDetails.temperature}} °C</h3>\n\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<figure class=\"icons\">\n\t\t\t\t\t\t\t<canvas id=\"clear-day\" width=\"40\" height=\"40\"></canvas>\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t<div class=\"weather-text\">\n\t\t\t\t\t\t\t<h4>Humidity</h4>\n\t\t\t\t\t\t\t<h5>{{meteoDetails.humidite}}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<figure class=\"icons\">\n\t\t\t\t\t\t\t<canvas id=\"snow\" width=\"40\" height=\"40\"></canvas>\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t<div class=\"weather-text\">\n\t\t\t\t\t\t\t<h4>Wind Speed</h4>\n\t\t\t\t\t\t\t<h5>{{meteoDetails.vitesseVent}}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<figure class=\"icons\">\n\t\t\t\t\t\t\t<canvas id=\"partly-cloudy-night\" width=\"40\" height=\"40\"></canvas>\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t<div class=\"weather-text\">\n\t\t\t\t\t\t\t<h4>Description</h4>\n\t\t\t\t\t\t\t<h5>{{meteoDetails.description}}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clear\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"clear\"></div>\n\t\t</div>  \n\t</div>\t\n\t"

/***/ }),

/***/ "./src/app/meteo/meteo.component.ts":
/*!******************************************!*\
  !*** ./src/app/meteo/meteo.component.ts ***!
  \******************************************/
/*! exports provided: MeteoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoComponent", function() { return MeteoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_meteoServices_meteo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/meteoServices/meteo.service */ "./src/app/services/meteoServices/meteo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var MeteoComponent = /** @class */ (function () {
    function MeteoComponent(meteo, auth) {
        this.meteo = meteo;
        this.auth = auth;
        this.meteoDetails = {
            temperature: "",
            humidite: "",
            vitesseVent: "",
            description: ""
        };
        this.curentDate = "";
        this.address = {
            home: "",
            postal_code: "",
            street: "",
            region: "",
            city: "",
            country: ""
        };
    }
    MeteoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meteo.detectLocation(function (position) { return _this.getCityName(position); });
    };
    // suite à la détection de la longitude et la latitude du client cette fonction va gérer l'ensemble des appels vers la suite des fonctions
    MeteoComponent.prototype.getCityName = function (position) {
        var _this = this;
        this.meteo.getPositionDetailsFromGoogleAPI(position.longitude, position.latitude)
            .subscribe(function (response) {
            //vérifier si la réponse de l'api geocoding a réussi
            if (response.status == "OK") {
                _this.meteo.getAddressObject(response).map(function (res2) {
                    _this.address = res2;
                    _this.meteo.getCityMeteo(res2).subscribe(function (meteoDetails) {
                        _this.meteoDetails.temperature = meteoDetails.main.temp;
                        _this.meteoDetails.humidite = meteoDetails.main.humidity;
                        _this.meteoDetails.vitesseVent = meteoDetails.wind.speed;
                        _this.meteoDetails.description = meteoDetails.weather[0].description;
                        _this.curentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
                    });
                });
            }
            // s'il y a une erreur lors de l'appel à l'api geocoding on demande au client de saisir un pays et une ville
            else {
                var country = prompt("Please enter a coutry code", "FR");
                if (country != null) {
                    _this.address.country = country;
                }
                var region = prompt("Please enter a city", "Paris");
                if (region != null) {
                    _this.address.region = region;
                }
                // console.log("xxxxxxxxxxxxx    "+JSON.stringify(this.address));
                _this.meteo.getCityMeteo(_this.address).subscribe(function (meteoDetails) {
                    _this.meteoDetails.temperature = meteoDetails.main.temp;
                    _this.meteoDetails.humidite = meteoDetails.main.humidity;
                    _this.meteoDetails.vitesseVent = meteoDetails.wind.speed;
                    _this.meteoDetails.description = meteoDetails.weather[0].description;
                    _this.curentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy/MM/dd', 'en');
                });
            }
        });
    };
    MeteoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meteo',
            template: __webpack_require__(/*! ./meteo.component.html */ "./src/app/meteo/meteo.component.html"),
            styles: [__webpack_require__(/*! ./meteo.component.css */ "./src/app/meteo/meteo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_meteoServices_meteo_service__WEBPACK_IMPORTED_MODULE_3__["MeteoService"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MeteoComponent);
    return MeteoComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth0-variables */ "./src/app/services/auth/auth0-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_4__["WebAuth"]({
            clientID: _auth0_variables__WEBPACK_IMPORTED_MODULE_2__["AUTH_CONFIG"].clientID,
            domain: _auth0_variables__WEBPACK_IMPORTED_MODULE_2__["AUTH_CONFIG"].domain,
            responseType: 'token id_token',
            redirectUri: _auth0_variables__WEBPACK_IMPORTED_MODULE_2__["AUTH_CONFIG"].callbackURL
        });
        this._idToken = '';
        this._accessToken = '';
        this._expiresAt = 0;
    }
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "idToken", {
        get: function () {
            return this._idToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.localLogin(authResult);
                _this.router.navigate(['/meteo']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.localLogin = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = (authResult.expiresIn * 1000) + Date.now();
        this._accessToken = authResult.accessToken;
        this._idToken = authResult.idToken;
        this._expiresAt = expiresAt;
    };
    AuthService.prototype.renewTokens = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.localLogin(authResult);
            }
            else if (err) {
                alert("Could not get a new token (" + err.error + ": " + err.error_description + ").");
                _this.logout();
            }
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time
        this._accessToken = '';
        this._idToken = '';
        this._expiresAt = 0;
        this.auth0.logout({
            returnTo: window.location.origin
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        return this._accessToken && Date.now() < this._expiresAt;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth0-variables.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth/auth0-variables.ts ***!
  \**************************************************/
/*! exports provided: AUTH_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CONFIG", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'RXtKNr033L5b38rUC1eyDjm3MQbquujL',
    domain: 'dev-oih21c7f.eu.auth0.com',
    callbackURL: 'http://localhost:3000/callback'
};


/***/ }),

/***/ "./src/app/services/meteoServices/meteo.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/meteoServices/meteo.service.ts ***!
  \*********************************************************/
/*! exports provided: MeteoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoService", function() { return MeteoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");





var MeteoService = /** @class */ (function () {
    function MeteoService(http) {
        this.http = http;
        this.key = "AIzaSyDGkAfGhqQ8kJxAeGpVerRgNn6TRFeylt0";
    }
    // detecter la position du client à l'aide du navigateur
    MeteoService.prototype.detectLocation = function (callback) {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                callback(position.coords);
            });
        }
        else {
            alert("No support for geolocation");
        }
    };
    //analyser la réponse de l'api geocoding de google afin d'extraite les information relatives au region et pays 
    MeteoService.prototype.getAddressObject = function (request) {
        var address_components = request.results[0].address_components;
        var ShouldBeComponent = {
            home: ["street_number"],
            postal_code: ["postal_code"],
            street: ["street_address", "route"],
            region: [
                "administrative_area_level_1",
                "administrative_area_level_2",
                "administrative_area_level_3",
                "administrative_area_level_4",
                "administrative_area_level_5"
            ],
            city: [
                "locality",
                "sublocality",
                "sublocality_level_1",
                "sublocality_level_2",
                "sublocality_level_3",
                "sublocality_level_4"
            ],
            country: ["country"]
        };
        var address = [{
                home: "",
                postal_code: "",
                street: "",
                region: "",
                city: "",
                country: ""
            }];
        address_components.forEach(function (component) {
            for (var shouldBe in ShouldBeComponent) {
                if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
                    if (shouldBe === "country") {
                        address[0][shouldBe] = component.short_name;
                    }
                    else {
                        address[0][shouldBe] = component.long_name;
                    }
                }
            }
        });
        // console.log("jjjjjjjjjjj    "+JSON.stringify(address));
        return address;
    };
    // appler l'api reverse geocoding de google avec la longitude et la latitude afin d'obtenir le pays et la region associé
    MeteoService.prototype.getPositionDetailsFromGoogleAPI = function (longitude, latitude) {
        var latLang = latitude + "," + longitude;
        var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLang + '&key=' + this.key;
        return this.http.get(geocodeURL).map(function (response) {
            // console.log("eeeeeeee    "+JSON.stringify(response));
            return response;
        });
    };
    // appler l'api meteo avec le pays et la region afin d'obtenir les informations relative à la meteo
    MeteoService.prototype.getCityMeteo = function (address) {
        var meteoURL = "https://api.openweathermap.org/data/2.5/weather?q=" + address.region + "," + address.country + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
        return this.http.get(meteoURL).map(function (data) {
            //console.log("sssssssssssssssssssss    "+JSON.stringify(data));
            return data;
        });
    };
    MeteoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeteoService);
    return MeteoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\stage\formation Angular\cityMeteo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map