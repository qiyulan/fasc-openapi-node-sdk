"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateClient = void 0;
var tslib_1 = require("tslib");
var tempate_client_1 = require("./tempate_client");
var Models = (0, tslib_1.__importStar)(require("./template_models"));
exports.templateClient = {
    Client: tempate_client_1.Client,
    Models: Models
};
