"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgClient = void 0;
var tslib_1 = require("tslib");
var org_client_1 = require("./org_client");
var Models = (0, tslib_1.__importStar)(require("./org_models"));
exports.orgClient = {
    Client: org_client_1.Client,
    Models: Models,
};
