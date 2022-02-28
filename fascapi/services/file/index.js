"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileClient = void 0;
const tslib_1 = require("tslib");
const file_client_1 = require("./file_client");
const Models = (0, tslib_1.__importStar)(require("./file_models"));
exports.fileClient = {
    Client: file_client_1.Client,
    Models,
};
