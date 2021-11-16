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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activy = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var CourseUnit_1 = require("./CourseUnit");
var Activy = /** @class */ (function () {
    function Activy() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Activy.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Activy.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Activy.prototype, "activy_date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Activy.prototype, "courseUnitId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Activy.prototype, "grade", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Activy.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return CourseUnit_1.CourseUnit; }, function (course_unit) { return course_unit.activies; }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", CourseUnit_1.CourseUnit)
    ], Activy.prototype, "course_unit", void 0);
    Activy = __decorate([
        (0, typeorm_1.Entity)("activies"),
        __metadata("design:paramtypes", [])
    ], Activy);
    return Activy;
}());
exports.Activy = Activy;
