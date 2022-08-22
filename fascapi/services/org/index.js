"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgClient = void 0;
const tslib_1 = require("tslib");
const org_client_1 = require("./org_client");
const Models = (0, tslib_1.__importStar)(require("./org_models"));
exports.orgClient = {
    Client: org_client_1.Client,
    Models,
};
