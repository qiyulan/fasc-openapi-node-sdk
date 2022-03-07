"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateClient = void 0;
const tslib_1 = require("tslib");
const tempate_client_1 = require("./tempate_client");
const Models = (0, tslib_1.__importStar)(require("./template_models"));
exports.templateClient = {
    Client: tempate_client_1.Client,
    Models
};
