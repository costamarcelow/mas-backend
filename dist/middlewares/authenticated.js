"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = __importDefault(require("../config/auth"));
function authenticated(request, response, next) {
    var headerAuthorization = request.headers.authorization;
    if (!headerAuthorization) {
        return {
            error: 'JWT token not found'
        };
    }
    var _a = headerAuthorization.split(''), token = _a[1];
    var verifyToken = (0, jsonwebtoken_1.verify)(token, auth_1.default.jwt.secret);
    if (!verifyToken) {
        throw new Error();
    }
    var _b = verifyToken, sub = _b.sub, role = _b.role;
    request.body = {
        id: sub,
        role: role
    };
    return next();
}
exports.default = authenticated;
