"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docClient = void 0;
var tslib_1 = require("tslib");
var doc_client_1 = require("./doc_client");
var Models = (0, tslib_1.__importStar)(require("./doc_models"));
exports.docClient = {
    Client: doc_client_1.Client,
    Models: Models,
};
