"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sealClient = void 0;
const tslib_1 = require("tslib");
const seal_client_1 = require("./seal_client");
const Models = (0, tslib_1.__importStar)(require("./seal_models"));
exports.sealClient = {
    Client: seal_client_1.Client,
    Models,
};
