System.register(["./demo.service", "angular2/core", "./home", "./about", "angular2/router", "./addpost"], function (exports_1, context_1) {
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
    var demo_service_1, core_1, home_1, about_1, router_1, addpost_1, AppComponent;
    return {
        setters: [
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (addpost_1_1) {
                addpost_1 = addpost_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_demoService) {
                    this._demoService = _demoService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getPost();
                    this.getCategory();
                };
                AppComponent.prototype.getPost = function () {
                    var _this = this;
                    this._demoService.getPost().subscribe(
                    // the first argument is a function which runs on success
                    function (data) { _this.posts = data; }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.error(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading '); });
                };
                AppComponent.prototype.getCategory = function () {
                    var _this = this;
                    this._demoService.getCategory().subscribe(
                    // the first argument is a function which runs on success
                    function (data) { _this.cat = data; }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.error(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading '); });
                };
                AppComponent.prototype.clicked = function (_id) {
                    this._demoService.clicked(_id);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'demo-app',
                    providers: [router_1.ROUTER_PROVIDERS],
                    templateUrl: "app/appviews/main.html",
                    styleUrls: ["app/appviews/main.css"],
                    directives: [router_1.ROUTER_DIRECTIVES, addpost_1.addPost]
                }),
                router_1.RouteConfig([
                    { path: '/', component: home_1.HomeComponent, as: 'Home' },
                    {
                        path: '/about',
                        name: 'About',
                        component: about_1.aboutComponent,
                    }
                ]),
                __metadata("design:paramtypes", [demo_service_1.DemoService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map