System.register(["angular2/core", "./demo.service"], function (exports_1, context_1) {
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
    var core_1, demo_service_1, addPost;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            }
        ],
        execute: function () {
            addPost = (function () {
                function addPost(_demoService) {
                    // Synchronous validators are passed in as the second
                    this._demoService = _demoService;
                }
                addPost.prototype.doPost = function () {
                    this._demoService.post(this.comment, this.call_post, this.category);
                };
                return addPost;
            }());
            addPost = __decorate([
                core_1.Component({
                    selector: 'add-post',
                    template: "\n  <form (ngSubmit)=\"doPost()\">\n\n   Title\n\n   <input type=\"text\" name=\"call_post\" id=\"username\" [(ngModel)] =\"call_post\" >\n\n\n\n      <br>\n\n\n       Category:\n       <input type=\"text\" name=\"category\" [(ngModel)] =\"category\" >\n\n\n\n\n        Comments:\n\n     <textarea  [(ngModel)] =\"comment\"> </textarea><br>\n\n\n\n  <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n\n  </form>",
                }),
                __metadata("design:paramtypes", [demo_service_1.DemoService])
            ], addPost);
            exports_1("addPost", addPost);
        }
    };
});
//# sourceMappingURL=addpost.js.map