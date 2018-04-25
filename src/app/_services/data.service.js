"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../../environments/environment");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._apiUrl = environment_1.environment.baseApiUrl + '/api/v1/auth';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        var headers = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + this.token });
        this.options = new http_1.HttpHeaderResponse({ headers: headers });
        // console.log(currentUser);
        //this.getUserByName();
        // this.getMyChatPear();
    }
    DataService.prototype.chkLoggedin = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        return false;
    };
    DataService.prototype.getCurrentUserName = function () {
        return JSON.parse(localStorage.getItem('currentUser')).username;
    };
    DataService.prototype.getMyApplication = function (applications) {
        if (applications) {
            for (var application in applications) {
                if (applications[application].UserName === this.getCurrentUserName()) {
                    return applications[application];
                }
            }
        }
        return {};
    };
    DataService.prototype.isEmptyObject = function (obj) {
        return (obj && (Object.keys(obj).length === 0));
    };
    DataService.prototype.getCurrentUser = function () {
        // get users from api
        return this.http.get(this._apiUrl + '/user/' + this.getCurrentUserName(), this.options);
    };
    DataService.prototype.getUserByUsername = function (uname) {
        // get users from api
        return this.http.get(this._apiUrl + '/user/' + uname, this.options);
    };
    DataService.prototype.getMainCategories = function () {
        // get CategoryJson from api
        return this.http.get(this._apiUrl + '/categories', this.options);
    };
    DataService.prototype.getJobs = function () {
        // get public Jobs from api
        return this.http.get(this._apiUrl + '/jobs', this.options);
    };
    DataService.prototype.getLovedJobs = function () {
        // get public Jobs from api
        return this.http.get(this._apiUrl + '/loved/jobs', this.options);
    };
    DataService.prototype.getJobsByCategory = function (cat) {
        // get public Jobs from api
        return this.http.get(this._apiUrl + '/category/:category' + cat, this.options);
    };
    DataService.prototype.getJobsByUsername = function (username) {
        // get public Jobs from api
        return this.http.get(this._apiUrl + '/timeline/' + username, this.options);
    };
    DataService.prototype.getMyChatPear = function () {
        return this.http.get(this._apiUrl + '/chat/chatpear', this.options);
    };
    DataService.prototype.post = function (url, json) {
        return this.http.post(environment_1.environment.baseApiUrl + url, json);
    };
    DataService.prototype.ngOnInit = function () { };
    //helper functions
    //limited words
    DataService.prototype.excertp_view = function (para, num) {
        var splited = para.split(' ', num ? num : 3);
        return splited.join(' ');
    };
    //count objects item
    DataService.prototype.countJsonObj = function (obj) {
        if (obj) {
            return Object.keys(obj).length;
        }
        else {
            var num = 0;
            return num;
        }
    };
    //job ownership varify
    DataService.prototype.isMyJob = function (job) {
        if (job.UserName === this.getCurrentUserName()) {
            return true;
        }
        else {
            return false;
        }
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
