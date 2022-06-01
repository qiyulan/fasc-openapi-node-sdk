"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.euiClient = void 0;
const tslib_1 = require("tslib");
const Models = (0, tslib_1.__importStar)(require("./eui_model"));
const eui_client_1 = require("./eui_client");
exports.euiClient = {
    Client: eui_client_1.Client,
    Models,
};
