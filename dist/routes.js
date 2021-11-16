"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ActivyController_1 = require("./controller/ActivyController");
var AuthenticateController_1 = require("./controller/AuthenticateController");
var CourseUnitController_1 = require("./controller/CourseUnitController");
var UserController_1 = require("./controller/UserController");
var authenticated_1 = __importDefault(require("./middlewares/authenticated"));
var userController = new UserController_1.UserContoller();
var courseUnitController = new CourseUnitController_1.CourseUnitController();
var activyController = new ActivyController_1.ActivyController();
var authController = new AuthenticateController_1.AuthenticateController();
var routes = (0, express_1.Router)();
routes.get('/', userController.test);
routes.post('/auth', authController.create);
routes.post('/user', userController.create);
routes.get('/user', authenticated_1.default, userController.show);
routes.post('/activy', authenticated_1.default, activyController.create);
routes.get('/activy', authenticated_1.default, activyController.show);
routes.post('/courseunit', authenticated_1.default, courseUnitController.create);
routes.get('/courseunit', authenticated_1.default, courseUnitController.show);
exports.default = routes;
