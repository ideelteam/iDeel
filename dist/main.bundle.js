webpackJsonp([1,5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        // this.loadedPage = 'home';
    }
    AppComponent.prototype.onNavigation = function (page) {
        // this.loadedPage = page;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(189),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userinfo_userinfo_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jobinfo_jobinfo_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userinfo_buser_buser_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userinfo_euser_euser_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jobinfo_jobs_table_jobs_table_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__post_job_post_job_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__jobinfo_jobs_table_job_detail_job_detail_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Import




// Component Import




// Anything else










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__userinfo_userinfo_component__["a" /* UserinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__jobinfo_jobinfo_component__["a" /* JobinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__userinfo_buser_buser_component__["a" /* BUserComponent */],
            __WEBPACK_IMPORTED_MODULE_12__userinfo_euser_euser_component__["a" /* EUserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__jobinfo_jobs_table_jobs_table_component__["a" /* JobsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_16__post_job_post_job_component__["a" /* PostJobComponent */],
            __WEBPACK_IMPORTED_MODULE_17__jobinfo_jobs_table_job_detail_job_detail_component__["a" /* JobDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }, __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobinfo_jobinfo_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_page_welcome_page_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_job_post_job_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobinfo_jobs_table_job_detail_job_detail_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
// Core import






var routes = [
    { path: '', redirectTo: "welcome", pathMatch: "full" },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] },
    // { path: "eusers", component: EUserComponent },
    // { path: "busers", component: BUserComponent },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__jobinfo_jobinfo_component__["a" /* JobinfoComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__jobinfo_jobs_table_job_detail_job_detail_component__["a" /* JobDetailComponent */] }
        ] },
    { path: "postjob", component: __WEBPACK_IMPORTED_MODULE_4__post_job_post_job_component__["a" /* PostJobComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(191),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsTableComponent = (function () {
    function JobsTableComponent(route) {
        this.route = route;
    }
    JobsTableComponent.prototype.ngOnInit = function () {
    };
    JobsTableComponent.prototype.onClick = function (jobID) {
        this.route.navigate(["dashboard", jobID]);
    };
    return JobsTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], JobsTableComponent.prototype, "jobs", void 0);
JobsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'jobs-table',
        template: __webpack_require__(194),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], JobsTableComponent);

var _a;
//# sourceMappingURL=jobs-table.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BUserComponent = (function () {
    function BUserComponent() {
    }
    BUserComponent.prototype.ngOnInit = function () {
    };
    return BUserComponent;
}());
BUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-buser',
        template: __webpack_require__(196),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], BUserComponent);

//# sourceMappingURL=buser.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EUserComponent = (function () {
    function EUserComponent() {
    }
    EUserComponent.prototype.ngOnInit = function () {
    };
    return EUserComponent;
}());
EUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-euser',
        template: __webpack_require__(197),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], EUserComponent);

//# sourceMappingURL=euser.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserinfoComponent = (function () {
    function UserinfoComponent(router) {
        this.router = router;
    }
    UserinfoComponent.prototype.ngOnInit = function () {
    };
    UserinfoComponent.prototype.redirect = function () {
        this.router.navigate(['postjob']);
    };
    return UserinfoComponent;
}());
UserinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-userinfo',
        template: __webpack_require__(198),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], UserinfoComponent);

var _a;
//# sourceMappingURL=userinfo.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#listOfJobs{\n    margin: 4rem 2rem;\n}\n\n.box{\n    margin-top:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".container {\n    border:1px solid #d2d2e0;\n    margin-top: 2rem;\n}\n\n.applyButton {\n    margin: 10px;\n    width:15%;\n    background-color: white; \n    color: black; \n    border: 2px solid #4CAF50;\n}\n\n.applyButton:hover {\n    background-color: #4CAF50;\n    color: white;\n}\n\n.saveButton{\n    margin:10px;\n    width: 15%;\n    background-color: white; \n    color: black; \n    border: 2px solid #f44336;\n}\n\n.saveButton:hover{\n    background-color: #f44336;\n    color: white;\n}\n\n.buttonContainers{\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".card{\n    margin-top: 10px;    \n    margin-bottom: 10px;\n}\n\n.viewButton{\n    background-color: #33bbff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#userInfo {\n    margin: 5rem 1rem 2rem;\n}\n\n.btn-info{\n    background-color:#00e600;\n    margin:25px;\n    color:black;\n}\n\nli{\n    list-style: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports
exports.push([module.i, "@import url(https://www.w3schools.com/w3css/4/w3.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Raleway\", Arial, Helvetica, sans-serif}\n.myLink {display: none}\n\n/*body,h1,h2,h3,h4,h5,h6 {font-family: \"Raleway\", sans-serif}\nbody, html {\n    height: 100%;\n    line-height: 1.8;\n}\n.bgimg-1 {\n    background-position: center;\n    background-size: cover;\n    background-image: url(\"/w3images/mac.jpg\");\n    min-height: 100%;\n}\n.w3-bar .w3-button {\n    padding: 16px;\n}*/\n\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-weight: 400;\n    font-size: 15px;\n    text-transform: uppercase;\n}\n\ntextarea {\n    resize: vertical;\n    \n}\n\nh3 {\n    margin-top: -12px;\n}\n\n*:focus {\n    outline: none;\n}\n\np {\n    text-transform: none;\n}\n\nul {\n    list-style: none;\n}\n\nheader {\n    position: fixed;\n    width: 100%;\n    z-index: 1000;\n    background: #fff;\n    top: 0;\n    box-shadow: 1px 1px 3px rgba(20, 20, 20, 0);\n}\n\n.home header {\n    background: rgba(255, 255, 255, 0.6);\n    box-shadow: 1px 1px 3px rgba(20, 20, 20, 0.3);\n}\n\n\n\n.header-container, .clear {\n    clear: both;\n}\n\na {\n    \n    color: #2196F3;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n}\n\n    a:hover, a:focus {\n        color: #155B94;\n    }\n\nheader {\n    padding: 0;\n    margin: 0 0 10px 0;\n}\n\n    header .logo {\n        /*background: url('../image/26292858.png') no-repeat;*/\n        background-size: 25%;\n        font-size: 38px;\n        font-style: bold;\n        color: black;\n        text-transform: initial;\n        padding-left: 60px;\n        \n        width: 150px;\n        height: 50px;\n        float: left;\n        margin: 15px 0 0 15px;\n    }\n\n\n\n    header .navbar {\n        padding: 0 0 0 0;\n        margin: 20px 0 0 -400px;\n        float: right;\n        font-weight: 400;\n        height: 37px;\n        overflow: hidden;\n        font-weight: 700;\n    }\n\n        header .headerbar li {\n            list-style: none;\n            margin: 0 5px;\n        }\n\n            header .headerbar li a {\n                padding: 10px 20px;\n                line-height: 1.8em;\n                color: rgba(20, 20,20, 0.8);\n            }\n\n\n            header .headerbar li.active a {\n                color: #2196F3;\n                border-bottom: solid #2196F3 5px;\n                position: relative;\n            }\n\n.uppermenu {\n    background: #303030;\n    height:32px;\n}\n\n    .uppermenu ul {\n        float: right;\n        color: #999;\n        font-size: 13px;\n        margin: 8px 100px;\n    }\n\n.main-header {\n    margin: -10px 0 0 0;\n    height:60px;\n    \n}\n\n.uppermenu ul li {\n    float: left;\n    list-style: none;\n    margin: 0 5px;\n    line-height: 1.8em;\n}\n\n    .uppermenu ul li a {\n        color: #999;\n    }\n.avatar{\n    /*background: url('../image/26292858.png') no-repeat;*/\n    background-size: 100%;\n    width: 100px;\n    height: 100px;\n}\n\n.user_info li{\n    position:relative;\n    display: block;\n    margin-bottom: 20px;\n    margin-top: -15px;\n    left: -30px;\n    color: black\n    \n}\n\n.col_third{\n    float:left;\n    display: inline-block;\n    \n}\n\n.panel {\n    margin: 40px 13px;\n    height: 140px;  \n    position: relative;\n    -webkit-perspective: 600px;\n    -moz-perspective: 600px;\n}\n\n.boxes{\n    margin-top: 60px;\n}\n\n.panel .front,\n.panel .back {\n    text-align:left;\n}\n    \n.panel .front {\n    height: inherit;\n    \n    top: 0;\n    z-index: 900;\n    text-align: center;\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n       -moz-transform: rotateX(0deg) rotateY(0deg);\n    -webkit-transform-style: preserve-3d;\n       -moz-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n       -moz-backface-visibility: hidden;\n    transition: all .4s ease-in-out;\n}\n\n.panel .back {\n    height: inherit;\n    position: absolute;\n    top: 0;\n    z-index: 1000;\n    -webkit-transform: rotateY(-180deg);\n       -moz-transform: rotateY(-180deg);\n    -webkit-transform-style: preserve-3d;\n       -moz-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n       -moz-backface-visibility: hidden;\n    transition: all .4s ease-in-out;\n}\n.panel.flip .front {\n    z-index: 900;\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n}\n.panel.flip .back {\n    z-index: 1000;\n    -webkit-transform: rotateX(0deg) rotateY(0deg);\n    -moz-transform: rotateX(0deg) rotateY(0deg);\n}\n.box1{\n    background-color: #2196F3;\n    color: aliceblue;\n    font-style: bold;\n    width: 250px;\n    height: 150px;\n    margin: 0 auto;\n    padding: 20px;\n    border-radius: 10px;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n}\n.box2{\n    background-color: #0066B8;\n    color: aliceblue;\n    width: 250px;\n    height: 150px;\n    margin: 0 auto;\n    padding: 20px;\n    border-radius: 10px;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n}\n\n.search {\n    float:right;\n    width: 500px;\n    border-radius: 20px;\n    margin-right: 200px;\n    margin-top: 0;\n    border: solid 1px #eee;\n    height: 35px;\n    overflow: hidden;\n    position: relative;\n    background: #e5e5e5;\n}\n\n.searchbar {\n    border-radius: 20px;\n    margin-left: 20px;\n    width: 100%;\n    font-weight: 400;\n    font-size: 20px;\n    border: solid 0 #eee;\n    height: 35px;\n    overflow: hidden;\n    position: relative;\n    background: #e5e5e5;\n}\n\n.sidesearchbar {\n    border-radius: 0px;\n    margin-left: 0 auto;\n    width: auto;\n    font-weight: 400;\n    font-size: 20px;\n    border: solid 1px #eee;\n    height: 25px;\n    border-radius: 10px;\n    padding-left: 6px;\n    overflow: hidden;\n    position: relative;\n    background-color: #e5e5e5;\n}\n\n.search-container{\n    margin-top:-10px;\n    margin-bottom: -10px;\n}\n\n\n\n.uppermenu ul input[type=text] {\n    border: solid 0px;\n    height: 20px;\n    margin: 0 0 0 5px;\n    font-size: 13px;\n}\n\n.search-submit {\n    border-style: solid;\n    border-color: inherit;\n    border-width: 0px;\n    background: #bcb5b5;\n    height: 35px;\n    width: 70px;\n    position: absolute;\n    right: 0;\n    top: -3px;\n    cursor: pointer;\n    margin-right: 0;\n    margin-top: 4px;\n    margin-bottom: 0;\n}\n\n.search-submit i{\n    color: black;\n    font-size: 18px;\n    margin-left: 5px;\n    \n\n}\n\n.uppermenu .site-name {\n    float: left;\n    padding-left: 20px;\n    line-height: 1.8em;\n    margin: 8px 0px;\n    color: #999;\n    font-size: 13px;\n}\n\n.site-container {\nmargin-bottom: 35px;\n    /*box-shadow: 0px -5px 5px 2px rgba(0,0,0,0.1);*/\n}\n\n/*.container {\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 0 10px;\n    position: relative;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}*/\n\n[att^=h] {\n    text-transform: uppercase;\n}\n\n.page-title {\n    margin: 0;\n    height: inherit;\n    padding: 0 5px;\n    color: rgba(20, 20, 20, 0.3);\n    overflow: hidden;\n}\n\n    .page-title .breadcrumps {\n        margin: 0 0 10px 0;\n        padding: 0;\n    }\n\n        .page-title .breadcrumps a {\n            color: rgba(20, 20, 20, 0.4);\n            margin: 0 10px;\n            padding: 0;\n        }\n\n        .page-title .breadcrumps span {\n            color: rgba(20, 20, 20, 0.4);\n            margin: 0 10px;\n        }\n\n            .page-title .breadcrumps a:first-child, .page-title .breadcrumps span:first-child {\n                margin: 0 10px 0 0;\n            }\n\n            .page-title .breadcrumps span.active {\n                color: rgba(20, 20, 20, 0.8);\n            }\n\n    .page-title h1 {\n        color: rgba(20, 20, 20, 0.8);\n        margin: 0;\n        display: inline-block;\n        padding: 10px 0;\n        /*border-bottom: solid 3px #2196F3;*/\n    }\n\n\n\n/* page content */\n\n.page-content {\n    margin: 50px 0 0 0;\n}\n\n.home .page-content {\n    margin: 0px 0 0 0;\n}\n\n.page-content .sidemenu {\n    position: fixed;\n    width: 220px;\n    top: 110px;\n    \n}\n\n\n.page-content .content {\n    float: right;\n    width: 73%;\n    box-sizing: border-box;\n    padding: 15px;\n}\n\n.homepage{\n    float: right;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 15px;\n}\n\n.page-content .sidemenu .menu {\n    list-style: none;\n    border-radius: 3px;\n    padding: 5px 0 0 0;\n    border: solid rgba(0, 0, 0, 0.05) 1px;\n    border-top: solid rgba(20, 20, 20, 0.3) 2px;\n    border-bottom: solid rgba(20, 20, 20, 0.3) 2px;\n    margin: 15px 0;\n    /*box-shadow: 0px 1px 1px rgba(0, 0, 0, 1);*/\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n    .page-content .sidemenu .menu li {\n        padding: 0;\n        margin: 0;\n    }\n\n        .page-content .sidemenu .menu li a {\n            min-height: 20px;\n            height: auto;\n            display: block;\n            padding: 8px 15px;\n            border-bottom: solid rgba(0, 0, 0, 0.05) 1px;\n        }\n\n.mutibtn {\n    background: none;\n    border: none;\n    border-bottom: solid;\n    border-bottom-color: blue;\n    width: 30%;\n    margin: auto;\n}\n\n.truckpl {\n    position: absolute;\n    top: 60px;\n    margin: 0 0 0 101%;\n    border-style: solid;\n    border-color: #f2f2f2;\n    width: 70%;\n    background-color: #f2f2f2;\n    max-height:400px;\n}\n\n.sidemenupl{\n    position: absolute;\n    overflow-y: auto;\n    max-height: 434px;\n}\n\n.closebtndiv {\n    float: right;\n    height: 21px;\n    width: 56px;\n}\n\n.btn.closebtn {\n    position: fixed;\n    height: 20px;\n    width: 55px;\n    padding: 0 0 0 0;\n}\n\n.btnclear{\n    float:right;\n    border: none;\n    background: none;\n    margin-top: 18px;\n    margin-right: 25px;\n    color: #2196F3;\n    border-bottom: 1px solid #2196F3;\n}\n\n.btnclear:focus{\n    color: #2196F3;\n    border-color:#2196F3;\n}\n\n.btnclear:hover{\n    color: #0066B8;\n    border-color: #0066B8;\n}\n\n.btn:focus.closebtn {\n    position: fixed;\n    height: 20px;\n    width: 55px;\n    padding: 0 0 0 0;\n}\n\n.desc_div{\n    position: absolute;\n    top: 90px;\n    right:0%;\n    width: 230px;\n    \n}\n\n.desc{\n    width: 90px;\n    z-index: 999999;\n}\n\n.homebtn_div{\n    text-align: center;\n    margin-left: -200px;\n}\n\n.btn.homebtn{\n    display: inline-block;\n    margin-top: 70px;\n    margin-left: 200px;\n    width:90px;\n    \n    \n}\n\n#clt {\n    position: absolute;\n    margin: 100px 100px 100px 100px;\n    background-color: black;\n}\n\n.sideinfo {\n    list-style: none;\n    border-radius: 3px;\n    padding: 5px 0 0 0;\n    border: solid rgba(0, 0, 0, 0.05) 1px;\n    border-top: solid rgba(20, 20, 20, 0.3) 2px;\n    border-bottom: solid rgba(20, 20, 20, 0.3) 2px;\n    margin: 15px 0;\n    /*box-shadow: 0px 1px 1px rgba(0, 0, 0, 1);*/\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.page-content .sideinfo li {\n    height: auto;\n    display: block;\n    padding: 8px 15px;\n    border-bottom: solid rgba(0, 0, 0, 0.05) 1px;\n    font-weight: 700;\n    margin: 0;\n    text-transform: uppercase;\n    font-size: 13px;\n    position: relative;\n    cursor: pointer;\n}\n\n    .page-content .sideinfo li ul {\n        margin: 20px 0 10px;\n        padding: 0;\n    }\n\n        .page-content .sideinfo li ul li {\n            font-weight: 300;\n            text-transform: none;\n            font-size: 13px;\n        }\n\n.page-content .content {\n    margin: 25px 0 0 0;\n}\n\n.orgfont{\n    text-transform: initial;\n}\n\np {\n    line-height: 2em;\n}\n\n.page-content .content h4 {\n    font-style: italic;\n    font-weight: 300;\n    text-align: center;\n}\n\n.page-content .content ul {\n    text-transform: none;\n}\n\n    .page-content .content ul strong {\n        font-weight: 700;\n        text-transform: uppercase;\n        margin: 0 20px 0 0;\n    }\n\n    .page-content .content ul .hidden-content i {\n        margin: 10px 0 0 10px;\n        display: inline-block;\n    }\n\n    .page-content .content ul > li, .page-content .content ul > li {\n        margin: 15px 0;\n    }\n\n    .page-content .content ul ul > li, .page-content .content ul ul > li {\n        margin: 5px 0;\n    }\n\n    .page-content .content ul ul {\n        margin: 10px 0;\n    }\n\n    .page-content .content ul ul {\n        list-style: circle;\n    }\n\n.hidden-content, .hide-btn {\n    display: none;\n}\n\n    .hidden-content p {\n        font-style: normal;\n    }\n\n.page-content .content .hidden-content strong {\n    margin: 0 0 0 0;\n    display: inline-block !important;\n}\n\n.more-btn {\n    color: rgba(0, 0, 0, 0.5);\n    font-style: italic;\n    text-align: center;\n    position: absolute;\n    right: 10px;\n    font-size: 15px;\n    line-height: 1.5em;\n    top: 10px;\n}\n\n.content > div {\n    margin: 0 0 70px 0;\n}\n\n.content ul.expandable-list > li {\n    background: rgba(0, 0, 0, 0.04);\n    border-radius: 5px;\n    margin: 10px 0px;\n    min-height: 20px;\n    padding: 10px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n    position: relative;\n    cursor: pointer;\n}\n\n.content ul.members-list li {\n    font-weight: 700;\n}\n\n.content ul.expandable-list ol.opened {\n    background: #E6EAEB;\n}\n\n.content ul.members-list li:before {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    -webkit-font-smoothing: antialiased;\n    content: \"\\F007\";\n    color: rgba(0, 0, 0, 0.1);\n    margin: 0 20px 0 0;\n}\n\n.content ul.expandable-list ul {\n    margin: 0px;\n}\n\n.content ul.members-list li strong {\n    color: black;\n    text-transform: none;\n    font-style: italic;\n    margin: 0 20px 0 10px;\n    font-weight: 300;\n}\n\n.content ul.expandable-list li span:not(.more-btn) {\n    display: block;\n    margin: 3px 30px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 300;\n}\n\n.content ul.expandable-list li .hidden-content {\n    margin: 5px 0 10px;\n}\n\n\n.forms {\n    list-style: none;\n    background: rgba(0, 0, 0, 0.04);\n    border-radius: 5px;\n    margin: 10px 0px;\n    min-height: 20px;\n    padding: 0 10px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n    position: relative;\n    display: table;\n    width: 100%;\n}\n\n.message-input {\n    height: 100px;\n}\n\n.forms li {\n    margin: 40px 0;\n}\n\n    .forms li:after {\n        clear: both;\n    }\n\n\n.forms label {\n    display: inline-block;\n    width: 25%;\n    text-transform: uppercase;\n    padding: 10px 20px;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.forms .inputs {\n    float: right;\n    width: 73%;\n    text-transform: none;\n    border-radius: 5px;\n    padding: 8px 10px;\n    box-shadow: inset 1px 1px 3px rgba(20, 20, 20, 0.1);\n    border: solid rgba(0, 0, 0, 0.2) 1px;\n    box-sizing: border-box;\n}\n\n/* footer */\n\nfooter {\n    position: fixed;\n    bottom:0;\n    overflow: hidden;\n    width:100%;\n    background: #303030;\n    color: #999;\n    text-transform: uppercase;\n    font-size: 12px;\n    height: 44px;\n    box-sizing: border-box;\n}\n\n\n\n    footer a {\n        color: #999;\n    }\n\n        footer a:hover, footer a:focus {\n            color: #eee;\n        }\n\n.col {\n    width: 33.33%;\n    float: left;\n}\n\nfooter h2 {\n    color: white;\n    font-size: 20px;\n}\n\nfooter p {\n    color: #999;\n    max-width: 90%;\n    line-height: 1.3em;\n}\n\nfooter ul {\n    list-style: none;\n    float: left;\n    padding: 0;\n    margin: 10px 0;\n}\n\n    footer ul li {\n        float: left;\n        margin: 0 10px 0 0;\n    }\n\n        footer ul li a {\n            color: rgba(255, 255, 255, 0.8);\n        }\n\nfooter .social, footer .address {\n    float: right;\n}\n\nfooter .address {\n    margin: 10px 0;\n}\n\nfooter .social {\n    margin-right: 60px;\n    float: right;\n   \n}\n\n.social-icons {\n    \n    position:relative;\n    background: rgba(255, 255, 255, 0.8);\n    color: #303030;\n    border-radius: 30px;\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    line-height: 2em;\n    margin: -23px 3px;\n    box-shadow: 2px 1px 1px #303030;\n    font-size: 16px;\n}\n\n\n/* slider */\n\n.slider {\n    position: relative;\n    background: #fff;\n    color: white;\n    overflow: hidden;\n}\n\n.slider-img {\n    position: absolute;\n    height: 108%;\n    width: 108%;\n    margin: -3% -3% -3% -3%;\n    background-size: cover;\n    background-position: center;\n    opacity: 0.9;\n    display: none;\n}\n\n.slider-content {\n    display: none;\n    padding: 10px 30px;\n    margin: 0;\n}\n\n    .slider-content p {\n        line-height: 1.8em;\n    }\n\n    .slider-content .slider-btns {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        left: 0;\n    }\n\n        .slider-content .slider-btns a {\n            width: 33.3%;\n            float: left;\n            text-align: center;\n            padding: 20px 0px;\n            box-sizing: border-box;\n        }\n\n            .slider-content .slider-btns a i {\n                font-size: 30px;\n            }\n\n/*.slider > div .slider-content{\n\tposition: absolute;\n\twidth: 60%;\n\tright: 0;\n\ttop: 200px;\n\tdisplay: block;\n}\n\n.slider > div .slider-content p, .slider > div .slider-content h1{\n\ttext-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);\n\tmargin: 10px 0;\n\tpadding: 0;\n}\n\n.slider > div .slider-content p{\n\tmargin: 10px 0 30px 0;\n}\n*/\n.slider-menu-background {\n    position: absolute;\n    top: 150px;\n    z-index: 50;\n    right: 10px;\n    left: 10px;\n    height: 300px;\n    border-radius: 5px;\n    overflow: hidden;\n    background-size: 100%;\n    background-position: center center;\n    -webkit-filter: blur(7px);\n    -moz-filter: blur(7px);\n    -o-filter: blur(7px);\n    -ms-filter: blur(7px);\n    filter: blur(7px);\n}\n\n.slider-menu {\n    position: absolute;\n    top: 150px;\n    z-index: 100;\n    right: 10px;\n    left: 10px;\n    height: 300px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n    .slider-menu h2 {\n        color: white;\n        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);\n    }\n\n    .slider-menu .menu {\n        list-style: none;\n        margin: 0;\n        width: 250px;\n        background: rgba(20, 20, 20, 0.5);\n        padding: 0;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n    }\n\n        .slider-menu .menu li {\n            padding: 0;\n            margin: 0;\n        }\n\n            .slider-menu .menu li a, .slider-menu .menu li a:focus {\n                height: 20px;\n                display: block;\n                border-bottom: solid rgba(0, 0, 0, 0.05) 1px;\n                padding: 10px 20px;\n                background: transparent;\n                /*box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);*/\n                color: #ecf0f1;\n                opacity: 1;\n                box-shadow: inset -3px 0px 10px -2px rgba(0, 0, 0, 0.5);\n                border: 0 solid white;\n            }\n\n            .slider-menu .menu li.slider-title {\n                padding: 20px 30px;\n                height: 20px;\n                background: #2196F3;\n                color: #ffffff;\n                display: block;\n                font-size: 17px;\n                font-weight: 700;\n            }\n\n            .slider-menu .menu li a:hover, .slider-menu .menu li.active a {\n                background: #ffffff;\n                color: #303030;\n                opacity: 1;\n                box-shadow: inset -3px 0px 10px -2px rgba(0, 0, 0, 0.5);\n                border: 0 solid white;\n            }\n\n.slider-menu-content {\n    position: absolute;\n    left: 250px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.7);\n}\n\n.slider-down-arrow, .slider-down-arrow:focus, .slider-down-arrow:hover {\n    position: absolute;\n    height: 40px;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: 100;\n    background: rgba(255, 255, 255, 0.2);\n    box-shadow: -1px -1px 3px rgba(20, 20, 20, 0.2);\n    text-align: center;\n    text-shadow: -1px -1px 3px rgba(20, 20, 20, 0.3);\n    line-height: 2.5em;\n    color: white;\n    font-size: 15px;\n    box-sizing: border-box;\n}\n\n\n.btn, .btn:focus {\n    display: inline-block;\n    padding: 8px 20px;\n    background: #2196F3;\n    border-radius: 3px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n    margin: 0;\n    color: white;\n    border: 0 white solid;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n    .btn:hover {\n        background: #0066B8;\n        color: white;\n        box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.5);\n    }\n\n.slider .btn {\n    margin: 0 5px 5px 0;\n}\n\n.post_div{\n    position: absolute;\n    right: 5%;\n    width: 120px;\n    height: -100px;\n}\n\n.post-button, .post-button:focus, .post-button:hover {\n    position:fixed;\n    float: right;\n    font-size: 13px;\n    padding: 10px 50px;\n    text-transform: uppercase;\n    margin: -50px auto;\n    display: inline-block;\n    z-index: 99999;\n}\n\n.btn.searchs {\n    float: right;\n    margin-right: 10%;\n}\n\n.catbtn{\n    margin-left: 45%;\n}\n\n.btn.category{\n    float: right;\n    margin-right: 3px;\n    position: fixed;\n    margin-top: -15px;\n}\n\n/* stats */\n\n.stats {\n    margin-top: 0;\n    padding: 40px 0 50px 0;\n    color: white;\n    background: #fff;\n    text-align: center;\n    box-sizing: border-box;\n}\n\n.page-section {\n    position: relative;\n    height: 400px;\n    box-sizing: border-box;\n}\n\n.stats i {\n    font-size: 70px;\n    display: block;\n    color: #fff;\n    background: #2196F3;\n    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n    height: 150px;\n    width: 150px;\n    border-radius: 80px;\n    line-height: 2.1em;\n    text-align: center;\n    margin: 0 auto;\n    box-sizing: border-box;\n}\n\n.stats span {\n    font-size: 30px;\n    padding: 30px 0 0 0;\n    display: block;\n    color: #303030;\n    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);\n    margin: 0;\n    line-height: 0.8em;\n}\n\n.stats .caption {\n    font-size: 20px;\n    padding: 5px 0 0 0;\n    margin: 0px 0;\n}\n\n/* stats */\n\n.testmonials {\n    color: #303030;\n    background: #fff;\n    text-align: center;\n    padding: 50px 0;\n    box-sizing: border-box;\n}\n\n    .testmonials > div {\n        width: 500px;\n        margin: auto;\n    }\n\n    .testmonials p {\n        text-transform: uppercase;\n        line-height: 1.2em;\n        margin-left: 160px;\n        text-align: left;\n    }\n\n    .testmonials .fa-quote-left {\n        left: 50%;\n        position: absolute;\n        margin: -20px 0 0 -150px;\n        font-size: 30px;\n        color: #95a5a6;\n    }\n\n    .testmonials .fa-quote-right {\n        left: 50%;\n        bottom: 0;\n        position: absolute;\n        margin: 0 0 30px 250px;\n        font-size: 30px;\n        color: #95a5a6;\n    }\n\n.person-info {\n    margin: 0px;\n    width: 200px;\n    text-align: left;\n    position: absolute;\n    right: -100px;\n    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);\n}\n\n.person-photo {\n    width: 70px;\n    height: 70px;\n    border-radius: 50px;\n    background-size: cover;\n    background-position: center center;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n    float: left;\n}\n\n.person-info h3 {\n    margin: 0px;\n}\n\n.page-section:not(.slider) {\n    display: table;\n    width: 100%;\n}\n\n/* moreinfo */\n\n.info {\n    background: #303030;\n    text-align: center;\n    padding: 100px 0;\n    box-sizing: border-box;\n    margin: 0 0 50px 0;\n}\n\n    .info h2 {\n        text-align: left;\n        color: rgba(255, 255, 255, 0.9);\n        margin: 50px 0 30px 50px;\n        font-size: 30px;\n    }\n\n.card {\n    border-radius: 3px;\n    min-height: 320px;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.9);\n    padding: 5px 20px;\n    border: solid rgba(0, 0, 0, 0.05) 1px;\n    border-top: solid rgba(20, 20, 20, 0.3) 2px;\n    border-bottom: solid rgba(0, 0, 0, 0.3) 1px;\n    margin: 0 15px;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n    .card h3 i {\n        margin: 0 15px 0 0;\n        font-size: 20px;\n    }\n\n    .card h3 i {\n        margin-left: 15px;\n    }\n\n    .card p {\n        opacity: 0.8;\n    }\n\n/* login */\n\n#welcome {\n    font-size: 20px;\n    margin-top: 55px;\n    text-align: center;\n}\n\n#login-box {\n    margin: 15px auto;\n    width: 440px;\n    padding: 20px 70px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n    box-sizing: border-box;\n}\n\n    #login-box .inputs {\n        width: 70%;\n    }\n\n    #login-box label {\n        margin: 0;\n        text-align: left;\n        padding: 10px 0 10px 0;\n    }\n\n.login-logo {\n    background: url('http://i.imgur.com/XmenBtq.png') no-repeat;\n    background-size: 100%;\n    width: 80px;\n    height: 80px;\n    margin: 15px auto 20px;\n    display: block;\n}\n\n.google{\n    /*background: url('../image/btn_google_signin_dark_normal_web.png') no-repeat;*/\n    background-size: 100%;\n    width: 180px;\n    height: 40px;\n    margin: 15px auto 20px;\n    display: block;\n    \n}\n\n#fbd{\n    width: 180px;\n    height: 32px;\n    margin: 15px auto 20px;\n    display: block;\n    overflow: hidden;\n    border-radius: 4px;\n}\n\n.facebook{\n    /*background: url('../image/Facebook.png') no-repeat;*/\n    background-size: 100%;\n    margin-left: 2px;\n    margin-right: 2px;\n    width: 260px;\n    height: 40px;\n    \n    display: block;\n    \n}\n\n.signin-btn, .signin-btn:hover, .signin-btn:focus {\n    margin: 20px auto;\n    display: block;\n    font-size: 15px;\n    text-transform: uppercase;\n}\n\n.error-msg {\n    color: #e74c3c;\n    text-align: center;\n    display: none;\n}\n\n\n#forgot {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n}\n\n#register-link {\n    display: block;\n    text-align: center;\n    margin: 30px auto;\n}\n\n.only-mobile {\n    display: none !important;\n}\n\np.solid {border-style: solid;}\n\n.SalesCode{\n    display: inline;\n    \n}\n\n.Description{\n    display: inline-block;\n    border: 1px solid;\n    padding: 10px;\n}\n\n/* responsive */\n\n/*@media (min-width: 768px) and (max-width: 991px) {\n    .container {\n        width: 750px;\n    }\n\n    header .logo {\n        width: 110px;\n        height: 35px;\n        float: left;\n        margin: 5px 0 0 15px;\n    }\n\n    header {\n        height: 107px;\n    }\n\n    body {\n        font-size: 12px;\n    }\n\n    .uppermenu ul, .uppermenu .site-name {\n        font-size: 12px;\n    }\n\n    .stats .container .caption {\n        font-size: 15px;\n        padding: 5px 0 0 0;\n        margin: 0px 0;\n    }\n\n    .page-content .sidemenu {\n        position: fixed;\n        width: 230px;\n        top: 140px;\n    }\n\n    .page-content .content {\n        float: right;\n        width: 65%;\n    }\n}\n\n\n@media (min-width: 992px) and (max-width: 1199px) {\n    .container {\n        width: 970px;\n    }\n}\n\n@media (min-width: 1200px) {\n    .container {\n        width: 1000px;\n    }\n}\n\n/* mobile */\n\nheader .navmenu-toggle {\n    display: none;\n}\n\n/*@media (max-width: 768px) {\n    body {\n        font-size: 12px;\n    }\n\n    .container {\n        width: 100%;\n    }\n\n    .only-mobile {\n        display: block !important;\n    }\n\n    .hide-mobile, .site-name, .uppermenu {\n        display: none;\n    }\n\n    .welcome-msg {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        right: 0;\n        text-align: center;\n        z-index: 1000;\n        color: white;\n        text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);\n    }\n\n    header .logo {\n        float: left;\n        margin: 0px 0 10px 80px;\n    }\n\n    header .navmenu-toggle {\n        float: left;\n        font-size: 40px;\n        text-align: center;\n        color: #303030;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n        line-height: 1em;\n        padding: 10px;\n        cursor: pointer;\n        display: block;\n    }\n\n    header .searchbar {\n        position: fixed;\n        display: inline-block;\n    }\n\n        header .searchbar li {\n            float: none;\n            display: block;\n            margin: 0;\n        }\n\n    header .navbar {\n        background: #303030;\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 20%;\n        bottom: 0;\n        height: 100%;\n        z-index: 100000;\n        padding: 0;\n        color: white;\n        box-shadow: inset -10px 0px 20px -2px rgba(0, 0, 0, 0.4);\n        display: none;\n    }\n\n        header .navbar.navopened {\n            display: block;\n        }\n\n    body.navopened {\n        position: absolute;\n        left: 80%;\n    }\n\n    header .navbar li {\n        float: none;\n        display: block;\n        margin: 0;\n    }\n\n        header .navbar li a {\n            color: white;\n            padding: 10px 20px;\n            display: block;\n            border: 0 solid white;\n        }\n\n            header .navbar li.active a, header .navbar li a:hover {\n                color: rgba(255, 255, 255, 1);\n                background: rgba(255, 255, 255, 0.1);\n                border: 0 solid white;\n            }\n\n    .page-section:not(.slider) {\n        height: auto !important;\n        min-height: 400px !important;\n        padding: 20px 0;\n    }\n\n    .testmonials, .testmonials > div {\n        width: 100%;\n        margin: auto;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n        .testmonials p {\n            text-transform: uppercase;\n            line-height: 1.2em;\n            margin-left: 0;\n            text-align: left;\n        }\n\n        .testmonials .fa-quote-left {\n            left: 50%;\n            position: inherit;\n            font-size: 30px;\n            color: #95a5a6;\n        }\n\n        .testmonials .fa-quote-right {\n            display: none;\n        }\n\n    .person-info {\n        margin: 0px;\n        width: 200px;\n        text-align: left;\n        position: absolute;\n        right: 10px;\n        text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);\n    }\n\n    .col {\n        float: none;\n        width: 100%;\n        margin: 20px 0;\n    }\n\n    .person-photo {\n        display: none;\n    }\n\n    .person-info h3 {\n        margin: 0px;\n    }\n\n    footer .container > *:not(.clear), footer .container ul {\n        float: none;\n        width: 100%;\n        margin: 10px 0;\n        display: block;\n        height: 30px;\n    }\n\n    footer .container .address {\n        display: none;\n    }\n\n    .page-content .sidemenu {\n        float: none;\n        width: 100%;\n        position: inherit;\n        top: 0;\n    }\n\n    .page-content .content {\n        float: none;\n        width: 100%;\n    }\n\n    .page-content .content {\n        clear: both;\n    }\n\n    footer {\n        height: auto;\n    }\n\n        footer .container > *:after {\n            clear: both;\n        }\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-buser></app-buser>\n    </div>\n    <div class=\"col-md-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" >iDeel</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerlinkActive=\"active\" routerLink=\"/welcome\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\"  routerlinkActive=\"active\" routerLink=\"/dashboard\" ><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Dashboard</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <jobs-table [jobs]=\"jobList\"></jobs-table>\n</div>\n\n<nav aria-label=\"Page navigation example\" style=\"margin-top: 20px\">\n  <ul class=\"pagination justify-content-end\">\n    <li class=\"page-item disabled\">\n      <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" href=\"#\">Next</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n      <h1>Job Title: {{jobInfo?.title}}</h1><br>\n  </div>\n\n  <div>\n      <p>Job ID: {{jobInfo?.jobID}}</p><br>\n  </div>\n\n  <div>\n      <p>Description: {{jobInfo?.description}}</p><br>\n  </div>\n\n  <div>\n      <p>Company: {{jobInfo?.companyName}}</p><br>\n  </div>\n\n  <div>\n      <p>Location: {{jobInfo?.city}}</p><br>\n  </div>\n\n  <div>\n      <p>Salary: {{jobInfo?.salary}}</p><br>\n  </div>\n\n\n  <div class=\"buttonContainers\">\n      <button type=\"button\" class=\"applyButton\" (click)=\"applyJob()\">Apply</button>\n\n      <button type=\"button\" class=\"saveButton\" (click)=\"saveJob()\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-sm-5\" *ngFor=\"let result of jobs; let i = index\" id=\"eachCard\">\n    <div class=\"card\">\n      <div class=\"card-block\" >\n        <h3 class=\"card-title\">{{result.companyName}}</h3>\n        <p class=\"card-text\">\n          Title: {{result.title}}<br>\n          {{result.description}}<br>\n          City: {{result.city}}<br>\n          Salary: {{result.salary}}<br></p>          \n        <a (click)=\"onClick(i)\" class=\"btn viewButton\">View</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"jumbotron\">\n    <h2 style=\"margin-bottom:20px\">Post Job</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n      <div class=\"form-group\">\n        <label>Title:</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Storage Cleaner\" name=\"title\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My description\" name=\"description\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Company Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My Company\" name=\"companyName\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Location</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123 12th Lincoln, Seattle WA\" name=\"location\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Phone</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123456789\" name=\"phoneNo\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Salary</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"321\" name=\"salary\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Start Date</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"startDate\" ngModel required>\n      </div>\n      \n      <div class=\"form-group\">\n        <label>End Date</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"endDate\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  buser works!\n</p>-->\n<app-userinfo></app-userinfo>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "\n<p>\n  euser works!\n</p>\n<app-userinfo></app-userinfo>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" id=\"userInfo\">\n    <img src=\"https://tse1.mm.bing.net/th?id=OIP.FjewODdZ7qH0pRWT3HWblQEsDJ&pid=15.1\" class=\"img-thumbnail rounded mx-auto d-block\" alt=\"profile picture\">\n    </div>\n    <div class=\"text-center\">        \n        <div class=\"btn-group\" >\n            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Selections\n            </button>\n            <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" (click) = \"onClick()\" href=\"#\">View Information</a>\n                <a class=\"dropdown-item\" href=\"#\">List of Interests</a>\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\">Logout</a>\n            </div>\n        </div>\n        \n   \n        <div>\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"redirect()\">\n                POST \n            </button>\n        </div> \n        \n    </div>\n</div>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<p id=\"welcome\">Welcome to iDeel</p>\n        <div class=\"forms\" id=\"login-box\">\n\t\t<div class=\"error-msg\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i> Please Enter Your Username and Password</div>\n\n\t\t\t<a class=\"login-logo\" routerLink=\"/dashboard\"></a>\n\t\t\t<label for=\"username\">Username</label>\n\t\t\t<input name=\"username\" id=\"username\" spellcheck=\"false\" class=\"inputs\" required=\"required\">\n\t\t\t<div class=\"clear\"></div>\n\t\t\t<label for=\"password\">Password</label>\n\t\t\t<input id=\"password\" name=\"password\" class=\"inputs\" type=\"password\" required=\"required\">\n\t\t\t<div class=\"clear\"></div>\n\t\t\t<button id=\"login\" routerlinkActive=\"active\" routerLink=\"/dashboard\" class=\"btn signin-btn\" >Sign In</button>\n\n        </div>\n        <a class=\"google\"></a>\n        <div id=\"fbd\"><a class=\"facebook\"></a></div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.host = 'http://localhost:3000';
        this.userId = "";
    }
    AppService.prototype.getAllJobs = function () {
        return this.http.get(this.host + '/api/jobs')
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getOneJob = function (jobID) {
        return this.http.get(this.host + '/api/jobs/' + jobID)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.postJob = function (_jobID, _businessID, _title, _description, _companyName, _city, _phoneNo, _salary, _startDate, _endDate, _availability) {
        this.body = {
            "jobID": _jobID,
            "businessID": _businessID,
            "title": _title,
            "description": _description,
            "companyName": _companyName,
            "city": _city,
            "phoneNo": _phoneNo,
            "salary": _salary,
            "startDate": _startDate,
            "endDate": _endDate,
            "availability": _availability
        };
        console.log(this.body);
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.host + '/api/jobs', this.body, this.options)
            .map(function (res) { return res.json(); });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(190),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobinfoComponent = (function () {
    function JobinfoComponent(route, location, app$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.app$ = app$;
        app$.getAllJobs()
            .subscribe(function (result) {
            _this.jobList = result;
        }, function () { }, function () { });
    }
    JobinfoComponent.prototype.ngOnInit = function () {
    };
    return JobinfoComponent;
}());
JobinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* Component */])({
        selector: 'app-jobinfo',
        template: __webpack_require__(192),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]) === "function" && _c || Object])
], JobinfoComponent);

var _a, _b, _c;
//# sourceMappingURL=jobinfo.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobDetailComponent = (function () {
    function JobDetailComponent(route, app$) {
        var _this = this;
        this.route = route;
        this.app$ = app$;
        this.jobID = this.route.snapshot.params['id'];
        this.app$.getOneJob(this.jobID)
            .subscribe(function (result) {
            _this.jobInfo = result;
        }, function () { }, function () { });
    }
    JobDetailComponent.prototype.ngOnInit = function () {
    };
    JobDetailComponent.prototype.applyJob = function () {
        //Need to write this
    };
    JobDetailComponent.prototype.saveJob = function () {
        //Need to write this
    };
    return JobDetailComponent;
}());
JobDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-job-detail',
        template: __webpack_require__(193),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object])
], JobDetailComponent);

var _a, _b;
//# sourceMappingURL=job-detail.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostJobComponent = (function () {
    function PostJobComponent(app$, router) {
        var _this = this;
        this.app$ = app$;
        this.router = router;
        this.businessID = 1;
        this.app$.getAllJobs()
            .subscribe(function (result) {
            _this.counter = result.length;
        }, function () { }, function () { });
    }
    PostJobComponent.prototype.ngOnInit = function () {
    };
    PostJobComponent.prototype.submitForm = function (form) {
        var _this = this;
        console.log(form);
        console.log("Counter: " + this.counter);
        this.app$.postJob(this.counter, this.businessID, form.title, form.description, form.companyName, form.location, form.phoneNo, form.salary, form.startDate, form.endDate, true)
            .subscribe(function (result) {
            _this.postResponse = JSON.stringify(result),
                function (err) { return console.log("Error HTTP Post Service"); },
                function () { return console.log("Data has been posted"); },
                console.log(_this.postResponse);
        });
        this.router.navigate(['dashboard']);
    };
    return PostJobComponent;
}());
PostJobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-post-job',
        template: __webpack_require__(195),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PostJobComponent);

var _a, _b;
//# sourceMappingURL=post-job.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomePageComponent = (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    return WelcomePageComponent;
}());
WelcomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-welcome-page',
        template: __webpack_require__(199),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], WelcomePageComponent);

//# sourceMappingURL=welcome-page.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(116);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[235]);
//# sourceMappingURL=main.bundle.js.map