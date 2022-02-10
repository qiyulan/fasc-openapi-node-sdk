"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessTokenClient = void 0;
const tslib_1 = require("tslib");
const Models = (0, tslib_1.__importStar)(require("./access_token_model"));
const access_token_client_1 = require("./access_token_client");
exports.accessTokenClient = {
    Client: access_token_client_1.Client,
    Models,
};
