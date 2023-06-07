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
     * 将已添加的企业用户暂时禁用。禁用后，该企业暂时不能通过该应用系统使用法大大平台服务
     */
    Client.prototype.disable = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/disable", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
     */
    Client.prototype.enable = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/enable", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
   * 将已禁用的企业用户再次激活。激活后，该企业用户可继续通过该应用系统使用法大大平台服务
   */
    Client.prototype.unbind = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/unbind", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 获取企业的基本信息、认证状态、授权状态和范围等。注意：该接口返回的信息中不涉及隐私，因此不需要授权
     */
    Client.prototype.get = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/get", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 用于获取企业的实名身份信息。注意：只有经过企业授权后，应用系统方可获得此信息
     */
    Client.prototype.getIdentityInfo = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/get-identity-info", req: req, reqMethod: "POST" })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
