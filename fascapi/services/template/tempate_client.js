"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var tslib_1 = require("tslib");
var abstract_client_1 = require("../../common/abstract_client");
var Client = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Client, _super);
    function Client(clientConfig) {
        return _super.call(this, clientConfig) || this;
    }
    /** 查询文档模板列表 */
    Client.prototype.getDocTemplateList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/doc-template/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询文档模板详情 */
    Client.prototype.getDocTemplateDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/doc-template/get-detail", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 启用/停用文档模板 */
    Client.prototype.setDocTemplateStatus = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/doc-template/set-status", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 删除文档模板 */
    Client.prototype.deleteDocTemplate = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/doc-template/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询签署任务模板列表 */
    Client.prototype.getSignTemplateList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-template/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询签署任务模板详情 */
    Client.prototype.getSignTemplateDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-template/get-detail", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 启用/停用签署任务模板 */
    Client.prototype.setSignTemplateStatus = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-template/set-status", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 删除签署任务模板 */
    Client.prototype.deleteSignTemplate = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/sign-template/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取模板管理链接 */
    Client.prototype.getTemplateManageUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/template/manage/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取模板新增链接 */
    Client.prototype.getTemplateCreateUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/template/create/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取模板编辑链接 */
    Client.prototype.getTemplateEditUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/template/edit/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取模板预览链接 */
    Client.prototype.getTemplatePreviewUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/template/preview/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询应用文档模板列表 */
    Client.prototype.getAppDocTemplateList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-doc-template/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询应用文档模板详情 */
    Client.prototype.getAppDocTemplateDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-doc-template/get-detail", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 启用/停用应用文档模板 */
    Client.prototype.setAppDocTemplateStatus = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-doc-template/set-status", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 删除应用文档模板 */
    Client.prototype.deleteAppDocTemplate = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-doc-template/delete", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询应用签署任务模板列表 */
    Client.prototype.getAppSignTemplateList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-sign-template/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询应用签署任务模板详情 */
    Client.prototype.getAppSignTemplateDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-sign-template/get-detail", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 启用/停用应用签署任务模板 */
    Client.prototype.setAppSignTemplateStatus = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-sign-template/set-status", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取应用模板新增链接 */
    Client.prototype.getAppTemplateCreateUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-template/create/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取应用模板编辑链接 */
    Client.prototype.getAppTemplateEditUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-template/edit/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 获取应用模板预览链接 */
    Client.prototype.getAppTemplatePreviewUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-template/preview/get-url", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 创建业务控件 */
    Client.prototype.createAppField = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-field/create", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 修改业务控件 */
    Client.prototype.modifyAppField = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-field/modify", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 设置业务控件状态 */
    Client.prototype.setAppFieldStatus = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-field/set-status", reqMethod: "POST", req: req })];
            });
        });
    };
    /** 查询业务控件列表 */
    Client.prototype.getAppFieldList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-field/get-list", reqMethod: "POST", req: req })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
