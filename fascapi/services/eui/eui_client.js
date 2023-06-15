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
    /** 获取企业授权链接 */
    Client.prototype.getCorpAuthUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/get-auth-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取个人授权链接 */
    Client.prototype.getUserAuthUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/user/get-auth-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 获取应用级资源访问链接
     * 获取法大大平台主体授权给应用可访问的资源链接
     */
    Client.prototype.getAppPageResourceUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/app-page-resource/get-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 获取用户级资源访问链接
     * 获取法大大登录用户访问资源的链接
     */
    Client.prototype.getUserPageResourceUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/user-page-resource/get-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /** 获取计费链接 */
    Client.prototype.getBillUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/billing/get-bill-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    return Client;
}(abstract_client_1.AbstractClient));
exports.Client = Client;
