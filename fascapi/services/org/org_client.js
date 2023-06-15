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
    /** 获取组织管理链接 */
    Client.prototype.getCorpOrgManageUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/organization/manage/get-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询部门列表 */
    Client.prototype.getCorpDeptList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/dept/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询部门详情 */
    Client.prototype.getCorpDeptDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/dept/get-detail", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 创建部门 */
    Client.prototype.createCorpDept = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/dept/create", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 修改部门 */
    Client.prototype.modifyCorpDept = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/dept/modify", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 删除部门 */
    Client.prototype.deleteCorpDept = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/dept/delete", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询企业成员列表 */
    Client.prototype.getMemberList = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/get-list", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 查询企业成员详情 */
    Client.prototype.getMemberDetail = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/get-detail", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 创建成员 */
    Client.prototype.crateCorpMember = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/create", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 修改成员 */
    Client.prototype.modifyCorpMember = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/modify", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 删除成员 */
    Client.prototype.deleteCorpMember = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/delete", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取成员激活链接 */
    Client.prototype.getActiveMemberUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/get-active-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 设置成员所属部门 */
    Client.prototype.setMemberDept = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/set-dept", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 设置成员状态 */
    Client.prototype.setMemberStatus = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/member/set-status", req: req, reqMethod: "POST" })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
