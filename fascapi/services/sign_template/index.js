"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTemplateClient = void 0;
const tslib_1 = require("tslib");
const sign_template_client_1 = require("./sign_template_client");
const Models = (0, tslib_1.__importStar)(require("./sign_template_models"));
exports.signTemplateClient = {
    Client: sign_template_client_1.Client,
    Models,
};
