"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userClient = void 0;
var tslib_1 = require("tslib");
var Models = (0, tslib_1.__importStar)(require("./user_models"));
var user_client_1 = require("./user_client");
exports.userClient = {
    Client: user_client_1.Client,
    Models: Models,
};
