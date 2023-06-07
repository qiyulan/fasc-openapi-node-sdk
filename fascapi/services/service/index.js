"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceClient = void 0;
var tslib_1 = require("tslib");
var Models = (0, tslib_1.__importStar)(require("./service_models"));
var service_client_1 = require("./service_client");
exports.serviceClient = {
    Client: service_client_1.Client,
    Models: Models,
};
