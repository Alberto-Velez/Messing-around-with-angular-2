System.register(["angular2/http", "rxjs/Rx", "rxjs/add/operator/map", "angular2/core"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var http_1, Rx_1, http_2, core_1, DemoService;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DemoService = (function () {
                function DemoService(http) {
                    this.http = http;
                }
                DemoService.prototype.post = function (comment, value, category) {
                    var endpoint = 'http://localhost:3000/calls';
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var body = JSON.stringify({ "value": value,
                        "comment": comment,
                        "category": category });
                    return this.http.post(endpoint, body)
                        .map(function (res) { return res.json(); }).subscribe();
                };
                DemoService.prototype.clicked = function (_id) {
                    var endpoint = 'http://localhost:3000/delete';
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    var body = JSON.stringify({ "_id": _id });
                    return this.http.post(endpoint, body, options)
                        .map(function (res) { return res.json(); }).subscribe();
                };
                // Uses http.get() to load a single JSON file
                DemoService.prototype.getPost = function () {
                    return this.http.get('/name').map(function (res) { return res.json(); });
                };
                DemoService.prototype.getCategory = function () {
                    return this.http.get('/cat').map(function (res) { return res.json(); });
                };
                // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
                // The entire operation will result in an error state if any single request fails.
                DemoService.prototype.getBooksAndMovies = function () {
                    return Rx_1.Observable.forkJoin(this.http.get('/app/books.json').map(function (res) { return res.json(); }), this.http.get('/app/movies.json').map(function (res) { return res.json(); }));
                };
                return DemoService;
            }());
            DemoService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], DemoService);
            exports_1("DemoService", DemoService);
        }
    };
});
//# sourceMappingURL=demo.service.js.map