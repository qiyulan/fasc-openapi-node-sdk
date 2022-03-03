"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billingClient = void 0;
const tslib_1 = require("tslib");
const billing_client_1 = require("./billing_client");
const Models = (0, tslib_1.__importStar)(require("./billing_models"));
exports.billingClient = {
    Client: billing_client_1.Client,
    Models,
};
