webpackJsonp([1,5],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 119;


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(138);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(35);
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
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent.prototype.onNavigation = function (page) {
        // this.loadedPage = page;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(246),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userinfo_userinfo_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobinfo_jobinfo_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jobinfo_jobs_table_jobs_table_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jobinfo_post_job_post_job_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__jobinfo_jobs_table_job_detail_job_detail_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__callback_callback_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__update_users_info_update_users_info_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__jobinfo_updatejob_updatejob_component__ = __webpack_require__(84);
/* unused harmony export authHttpServiceFactory */
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











function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); })
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__userinfo_userinfo_component__["a" /* UserinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__jobinfo_jobinfo_component__["a" /* JobinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__jobinfo_jobs_table_jobs_table_component__["a" /* JobsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__jobinfo_post_job_post_job_component__["a" /* PostJobComponent */],
            __WEBPACK_IMPORTED_MODULE_16__jobinfo_jobs_table_job_detail_job_detail_component__["a" /* JobDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_18__update_users_info_update_users_info_component__["a" /* UpdateUsersInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__jobinfo_updatejob_updatejob_component__["a" /* UpdatejobComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobinfo_jobinfo_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_page_welcome_page_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobinfo_post_job_post_job_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobinfo_jobs_table_job_detail_job_detail_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__callback_callback_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobinfo_updatejob_updatejob_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core import









var appRoutes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_3__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_7__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__jobinfo_jobinfo_component__["a" /* JobinfoComponent */] },
            { path: 'postjob', component: __WEBPACK_IMPORTED_MODULE_5__jobinfo_post_job_post_job_component__["a" /* PostJobComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__jobinfo_jobs_table_job_detail_job_detail_component__["a" /* JobDetailComponent */] }
        ] },
    { path: 'updatejob', component: __WEBPACK_IMPORTED_MODULE_8__jobinfo_updatejob_updatejob_component__["a" /* UpdatejobComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 134:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(249),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], JobsTableComponent.prototype, "jobs", void 0);
JobsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'jobs-table',
        template: __webpack_require__(252),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], JobsTableComponent);

var _a;
//# sourceMappingURL=jobs-table.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUsersInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateUsersInfoComponent = (function () {
    function UpdateUsersInfoComponent() {
    }
    UpdateUsersInfoComponent.prototype.ngOnInit = function () {
    };
    return UpdateUsersInfoComponent;
}());
UpdateUsersInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-users-info',
        template: __webpack_require__(255),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], UpdateUsersInfoComponent);

//# sourceMappingURL=update-users-info.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(35);
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
    function UserinfoComponent(router, route, auth) {
        this.router = router;
        this.route = route;
        this.auth = auth;
    }
    UserinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    UserinfoComponent.prototype.onClickToPostJob = function () {
        this.router.navigate(['postjob'], { relativeTo: this.route });
    };
    return UserinfoComponent;
}());
UserinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userinfo',
        template: __webpack_require__(256),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], UserinfoComponent);

var _a, _b, _c;
//# sourceMappingURL=userinfo.component.js.map

/***/ }),

/***/ 138:
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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#listOfJobs{\r\n    margin: 4rem 2rem;\r\n}\r\n\r\n.box{\r\n    margin-top:20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".container {\r\n    border:1px solid #d2d2e0;\r\n    margin-top: 2rem;\r\n}\r\n\r\n\r\n.buttonContainers{\r\n    text-align: right;\r\n}\r\n\r\n\r\n.applyButton {\r\n    margin: 10px;\r\n    width:15%;\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #4CAF50;\r\n}\r\n\r\n.applyButton:hover {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    cursor:pointer;\r\n}\r\n\r\n.saveButton{\r\n    margin:10px;\r\n    width: 15%;\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #f44336;\r\n}\r\n\r\n.saveButton:hover{\r\n    background-color: #f44336;\r\n    color: white;\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n\r\n.deleteButton {\r\n    margin:10px;\r\n    width: 15%;\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #f44336;\r\n}\r\n\r\n.deleteButton:hover{\r\n    background-color: #f44336;\r\n    color: white;\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.updateButton {\r\n    margin: 10px;\r\n    width:15%;\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #4CAF50;\r\n}\r\n\r\n.updateButton:hover {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".card{\r\n    margin-top: 10px;    \r\n    margin-bottom: 10px;\r\n}\r\n\r\n.viewButton{\r\n    background-color: #33bbff;\r\n}\r\n\r\n.viewButton:hover{\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".updateButton:hover{\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".btn-info:hover{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#wholepage{\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox {\r\n  margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  height: auto;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  callback works!\r\n</p>\r\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <app-userinfo></app-userinfo>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\">iDeel</a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/welcome\">Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\"  routerLink=\"/dashboard\" ><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Dashboard</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <jobs-table [jobs]=\"jobList\"></jobs-table>\r\n</div>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div>\r\n      <h1>Job Title: {{jobInfo?.title}}</h1><br>\r\n  </div>\r\n\r\n  <div>\r\n      <p>Job ID: {{jobInfo?.jobID}}</p><br>\r\n  </div>\r\n\r\n  <div>\r\n      <p>Description: {{jobInfo?.description}}</p><br>\r\n  </div>\r\n\r\n  <div>\r\n      <p>Company: {{jobInfo?.companyName}}</p><br>\r\n  </div>\r\n\r\n  <div>\r\n      <p>Location: {{jobInfo?.city}}</p><br>\r\n  </div>\r\n\r\n  <div>\r\n      <p>Salary: {{jobInfo?.salary}}</p><br>\r\n  </div>\r\n\r\n\r\n  <div class=\"buttonContainers\">\r\n      <div>\r\n        <button type=\"button\" class=\"applyButton\" (click)=\"applyJob()\">Apply</button>\r\n        <button type=\"button\" class=\"saveButton\" (click)=\"saveJob()\">Save</button>\r\n      </div>\r\n\r\n      <div>\r\n        <button type=\"button\" class=\"updateButton\" (click)=\"updateJob()\">Update Job</button>\r\n        <button type=\"button\" class=\"deleteButton\" (click)=\"deleteJob(jobInfo?.jobID)\">Delete</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n  <div class=\"col-sm-5\" *ngFor=\"let result of jobs\" id=\"eachCard\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block\" >\r\n        <h3 class=\"card-title\">{{result.companyName}}</h3>\r\n        <p class=\"card-text\">\r\n          Title: {{result.title}}<br>\r\n          {{result.description}}<br>\r\n          City: {{result.city}}<br>\r\n          Salary: {{result.salary}}<br></p>          \r\n        <a (click)=\"onClick(result.jobID)\" class=\"btn viewButton\">View</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h2 style=\"margin-bottom:20px\">Post Job</h2>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\r\n      <div class=\"form-group\">\r\n        <label>Title:</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Storage Cleaner\" name=\"title\" ngModel required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"My description\" name=\"description\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Company Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"My Company\" name=\"companyName\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Location</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"123 12th Lincoln, Seattle WA\" name=\"location\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Phone</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"123456789\" name=\"phoneNo\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Salary</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"321\" name=\"salary\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Start Date</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"startDate\" ngModel required>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label>End Date</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"endDate\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"jumbotron\">\r\n    <h2 style=\"margin-bottom:20px\">Update Job</h2>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"submimtUpdateForm(form.value)\">\r\n      <div class=\"form-group\">\r\n        <label>Title:</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Storage Cleaner\" name=\"title\" ngModel required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"My description\" name=\"description\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Company Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"My Company\" name=\"companyName\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>City</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Seattle\" name=\"city\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"123 12th Lincoln\" name=\"address\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Zipcode</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"98122\" name=\"zipcode\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Phone</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"123456789\" name=\"phoneNo\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Salary</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"321\" name=\"salary\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Start Date</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"startDate\" ngModel required>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label>End Date</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"endDate\" ngModel required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-default updateButton\">Update Job</button>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  update-users-info works!\r\n</p>\r\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"text-center\">\r\n    <img src=\"{{profile?.picture}}\" class=\"rounded\" alt=\"{{profile?.nickname}}\">\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"onClickToPostJob()\">POST</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">Auth0 - Angular</a>\r\n\r\n      <button\r\n        class=\"btn btn-primary btn-margin\"\r\n        routerlink=\"/welcome\">\r\n          Home\r\n      </button>\r\n\r\n      <button\r\n        class=\"btn btn-primary btn-margin\"\r\n        *ngIf=\"!auth.isAuthenticated()\"\r\n        (click)=\"auth.login()\">\r\n          Log In\r\n      </button>\r\n\r\n      <button\r\n        class=\"btn btn-primary btn-margin\"\r\n        *ngIf=\"auth.isAuthenticated()\"\r\n        (click)=\"auth.logout()\">\r\n          Log Out\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
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
        // host:string = 'http://localhost:3000';
        this.host = 'http://teamideel.azurewebsites.net';
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
    AppService.prototype.postJob = function (_jobID, _businessID, _title, _description, _companyName, _city, _zipcode, _address, _phoneNo, _salary, _startDate, _endDate, _availability) {
        this.body = {
            "jobID": _jobID,
            "businessID": _businessID,
            "title": _title,
            "description": _description,
            "companyName": _companyName,
            "city": _city,
            "zipcode": _zipcode,
            "address": _address,
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
    AppService.prototype.deleteJob = function (_jobID) {
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Method': 'DELETE' });
        return this.http.delete(this.host + '/api/jobs/' + _jobID, this.options)
            .subscribe(function (res) {
            if (res.status != 200) {
                console.log("Server Error");
            }
        });
    };
    AppService.prototype.updateJob = function (_jobID, _title, _description, _company, _city, _address, _zipcode, _salary) {
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Method': 'PUT' });
        this.options.append('Accept', 'application/json');
        this.body = {
            "title": _title,
            "description": _description,
            "companyName": _company,
            "city": _city,
            "address": _address,
            "zipcode": _zipcode,
            "salary": _salary,
        };
        console.log("inside updateJob");
        console.log(this.body);
        return this.http.put(this.host + '/api/jobs/' + _jobID, this.body, this.options)
            .subscribe(function (res) {
            if (res.status != 200) {
                console.log("Server Error");
            }
        });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, route) {
        this.router = router;
        this.route = route;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js___default.a.WebAuth({
            clientID: 'C0LbLetjlwsNGypHF25et8616cwi4xSM',
            domain: 'rileydu.auth0.com',
            responseType: 'token id_token',
            audience: 'https://rileydu.auth0.com/userinfo',
            //redirectUri: 'http://localhost:4200/callback',
            redirectUri: 'http://teamideel.azurewebsites.net/',
            // redirectUri: 'http://localhost:3000',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/dashboard'], { relativeTo: _this.route });
            }
            else if (err) {
                _this.router.navigate(['/welcome'], { relativeTo: _this.route });
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/welcome'], { relativeTo: this.route });
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__(247),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ 80:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(248),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(26);
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
    function JobinfoComponent(route, router, app$) {
        var _this = this;
        this.route = route;
        this.router = router;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-jobinfo',
        template: __webpack_require__(250),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _c || Object])
], JobinfoComponent);

var _a, _b, _c;
//# sourceMappingURL=jobinfo.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(26);
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
    function JobDetailComponent(route, app$, router) {
        var _this = this;
        this.route = route;
        this.app$ = app$;
        this.router = router;
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
    JobDetailComponent.prototype.updateJob = function () {
        //this.app$.updateJob(_jobID,_title,_description,_company,_city,_address,_zipcode,_salary);
        this.router.navigate(['updatejob']);
    };
    JobDetailComponent.prototype.deleteJob = function (_jobID) {
        this.app$.deleteJob(_jobID);
        this.router.navigate(['dashboard']);
    };
    return JobDetailComponent;
}());
JobDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-detail',
        template: __webpack_require__(251),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], JobDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=job-detail.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
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
        this.app$.getAllJobs()
            .subscribe(function (result) {
            _this.jobID = result.length + 1;
            _this.businessID = result.length + 1000;
            console.log(result);
        }, function () { }, function () { });
    }
    PostJobComponent.prototype.ngOnInit = function () {
    };
    PostJobComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.app$.postJob(this.jobID, this.businessID, form.title, form.description, form.companyName, form.city, form.zipcode, form.address, form.phoneNo, form.salary, form.startDate, form.endDate, true)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-job',
        template: __webpack_require__(253),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PostJobComponent);

var _a, _b;
//# sourceMappingURL=post-job.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatejobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatejobComponent = (function () {
    function UpdatejobComponent(app$, router) {
        this.app$ = app$;
        this.router = router;
    }
    UpdatejobComponent.prototype.ngOnInit = function () {
    };
    //Need to figure out how to pass the jobID that is being updated into this function
    UpdatejobComponent.prototype.submimtUpdateForm = function (form, jobID) {
        // console.log(form);
        jobID = 1;
        this.app$.updateJob(jobID, form.title, form.description, form.companyName, form.city, form.address, form.zipcode, form.salary);
        this.router.navigate(['dashboard']);
    };
    return UpdatejobComponent;
}());
UpdatejobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-updatejob',
        template: __webpack_require__(254),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UpdatejobComponent);

var _a, _b;
//# sourceMappingURL=updatejob.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(35);
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
    function WelcomePageComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    return WelcomePageComponent;
}());
WelcomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome-page',
        template: __webpack_require__(257),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], WelcomePageComponent);

var _a;
//# sourceMappingURL=welcome-page.component.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.bundle.js.map