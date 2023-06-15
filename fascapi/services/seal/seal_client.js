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
    /**
     * 查询印章列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章列表数据
     */
    Client.prototype.getSealList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询印章详情 */
    Client.prototype.getSealDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/get-detail", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 查询企业用印员列表
     * 根据指定的企业主体openCorpId查询企业在法大大组织中管理的印章的用印人员列表
     */
    Client.prototype.getSealUserList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/get-user-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询成员被授权的印章列表 */
    Client.prototype.getUserSealList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/user/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询审核中的印章列表 */
    Client.prototype.getSealVerifyList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/verify/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取印章管理链接 */
    Client.prototype.getSealManageList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/manage/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取创建印章链接 */
    Client.prototype.getCreateSealList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/create/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 取印章详情链接 */
    Client.prototype.getAppointedSealUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/manage/get-appointed-seal-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取印章授权给成员链接 */
    Client.prototype.getSealGrantUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/grant/get-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取印章设置免验证签链接 */
    Client.prototype.getSealFreeSignUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/free-sign/get-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 解除印章授权 */
    Client.prototype.cancelSealGrant = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/grant/cancel", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 解除印章免验证签 */
    Client.prototype.cancelSealFreeSign = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/free-sign/cancel", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 修改印章 */
    Client.prototype.modifySeal = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/modify", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 删除印章 */
    Client.prototype.deleteSeal = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/seal/delete", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询个人签名列表 */
    Client.prototype.getPersonalSealList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/personal-seal/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取签名设置免验证签链接 */
    Client.prototype.getPersonalFreeSignUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/personal-seal/free-sign/get-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 解除签名免验证签 */
    Client.prototype.cancelPersonalFreeSign = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/personal-seal/free-sign/cancel", req: req, reqMethod: "POST" })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
