"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.euiClient = void 0;
var tslib_1 = require("tslib");
var Models = (0, tslib_1.__importStar)(require("./eui_model"));
var eui_client_1 = require("./eui_client");
exports.euiClient = {
    Client: eui_client_1.Client,
    Models: Models,
};
