"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docTemplateClient = void 0;
const tslib_1 = require("tslib");
const doc_template_client_1 = require("./doc_template_client");
const Models = (0, tslib_1.__importStar)(require("./doc_template_models"));
exports.docTemplateClient = {
    Client: doc_template_client_1.Client,
    Models,
};
