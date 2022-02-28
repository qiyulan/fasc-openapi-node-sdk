"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTemplateClient = exports.signTaskClient = exports.fileClient = exports.docTemplateClient = exports.corpManageClient = exports.corpClient = exports.billingClient = exports.accessTokenClient = exports.userClient = void 0;
var user_1 = require("./user");
Object.defineProperty(exports, "userClient", { enumerable: true, get: function () { return user_1.userClient; } });
var access_token_1 = require("./access_token");
Object.defineProperty(exports, "accessTokenClient", { enumerable: true, get: function () { return access_token_1.accessTokenClient; } });
var billing_1 = require("./billing");
Object.defineProperty(exports, "billingClient", { enumerable: true, get: function () { return billing_1.billingClient; } });
var corp_1 = require("./corp");
Object.defineProperty(exports, "corpClient", { enumerable: true, get: function () { return corp_1.corpClient; } });
var corp_manage_1 = require("./corp_manage");
Object.defineProperty(exports, "corpManageClient", { enumerable: true, get: function () { return corp_manage_1.corpManageClient; } });
var doc_template_1 = require("./doc_template");
Object.defineProperty(exports, "docTemplateClient", { enumerable: true, get: function () { return doc_template_1.docTemplateClient; } });
var file_1 = require("./file");
Object.defineProperty(exports, "fileClient", { enumerable: true, get: function () { return file_1.fileClient; } });
var sign_task_1 = require("./sign_task");
Object.defineProperty(exports, "signTaskClient", { enumerable: true, get: function () { return sign_task_1.signTaskClient; } });
var sign_template_1 = require("./sign_template");
Object.defineProperty(exports, "signTemplateClient", { enumerable: true, get: function () { return sign_template_1.signTemplateClient; } });
