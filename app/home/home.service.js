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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.createSchema = function () {
        alasql("CREATE TABLE student (name string, email string, dob string, city string)");
    };
    HomeService.prototype.insertData = function () {
        alasql('INSERT INTO student SELECT * FROM ?', [[
                {
                    "name": "Madrid",
                    "email": "madrid@yopmail.com",
                    "dob": "01/02/2016",
                    "city": "indore"
                },
                {
                    "name": "Hari",
                    "email": "hari@yopmail.com",
                    "dob": "11/05/2016",
                    "city": "pithampur"
                },
                {
                    "name": "Jhon",
                    "email": "jhon@yopmail.com",
                    "dob": "25/27/2016",
                    "city": "dhar"
                }
            ]]);
    };
    HomeService.prototype.getData = function () {
        return alasql('SELECT * FROM student');
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map