"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decorators_1 = require("../decorators");
var PATH = (function () {
    function PATH() {
        this._path = '';
    }
    PATH.getInstance = function () {
        if (!PATH.instance) {
            PATH.instance = new PATH();
        }
        return PATH.instance;
    };
    Object.defineProperty(PATH.prototype, "prop", {
        get: function () {
            return this._path;
        },
        set: function (path) {
            this._path = path;
        },
        enumerable: true,
        configurable: true
    });
    return PATH;
}());
__decorate([
    decorators_1.Editable(false)
], PATH, "getInstance", null);
exports.PATH = PATH;
