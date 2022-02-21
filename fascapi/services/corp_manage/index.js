"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corpManageClient = void 0;
const tslib_1 = require("tslib");
const Models = (0, tslib_1.__importStar)(require("./corp_manage_models"));
const corp_manage_client_1 = require("./corp_manage_client");
exports.corpManageClient = {
    Client: corp_manage_client_1.Client,
    Models,
};
