"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var home_service_1 = require("./home.service");
exports.routerConfig = [{
        path: '',
        component: home_component_1.HomeComponent
    }];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.routerConfig), common_1.CommonModule],
        declarations: [
            home_component_1.HomeComponent
        ],
        providers: [
            home_service_1.HomeService
        ],
        exports: [
            home_component_1.HomeComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], HomeModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeModule;
//# sourceMappingURL=home.module.js.map