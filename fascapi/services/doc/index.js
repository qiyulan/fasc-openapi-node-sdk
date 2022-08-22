"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docClient = void 0;
const tslib_1 = require("tslib");
const doc_client_1 = require("./doc_client");
const Models = (0, tslib_1.__importStar)(require("./doc_models"));
exports.docClient = {
    Client: doc_client_1.Client,
    Models,
};
