"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceClient = void 0;
const tslib_1 = require("tslib");
const Models = (0, tslib_1.__importStar)(require("./service_models"));
const service_client_1 = require("./service_client");
exports.serviceClient = {
    Client: service_client_1.Client,
    Models,
};
