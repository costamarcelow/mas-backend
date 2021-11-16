"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
require("./database");
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var error_1 = __importDefault(require("./middlewares/error"));
var server_1 = __importDefault(require("./config/server"));
var app = (0, express_1.default)();
var port = server_1.default.server.port;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(error_1.default);
app.listen(port, function () { return console.log('Server started'); });
