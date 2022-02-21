"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessTokenClient = void 0;
const tslib_1 = require("tslib");
const Models = (0, tslib_1.__importStar)(require("./crop_model"));
const corp_client_1 = require("./corp_client");
exports.accessTokenClient = {
    Client: corp_client_1.Client,
    Models,
};
