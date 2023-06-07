"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTaskClient = void 0;
var tslib_1 = require("tslib");
var sign_task_client_1 = require("./sign_task_client");
var Models = (0, tslib_1.__importStar)(require("./sign_task_models"));
exports.signTaskClient = {
    Client: sign_task_client_1.Client,
    Models: Models,
};
