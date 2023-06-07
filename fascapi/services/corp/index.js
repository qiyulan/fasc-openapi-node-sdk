"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corpClient = void 0;
var tslib_1 = require("tslib");
var Models = (0, tslib_1.__importStar)(require("./crop_model"));
var corp_client_1 = require("./corp_client");
exports.corpClient = {
    Client: corp_client_1.Client,
    Models: Models,
};
