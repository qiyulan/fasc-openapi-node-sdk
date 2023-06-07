"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var tslib_1 = require("tslib");
var url_1 = require("url");
var abstract_client_1 = require("../../common/abstract_client");
var sign_1 = (0, tslib_1.__importDefault)(require("../../common/sign"));
var models_1 = require("../../common/models");
var SYMBOL = '%s';
var EnvEnvironmentMap = new Map([
    [models_1.EuiEnvironmentEnum.SIT, "https://".concat(SYMBOL, ".sit-e.fadada.com")],
    [models_1.EuiEnvironmentEnum.UAT, "https://".concat(SYMBOL, ".uat-e.fadada.com")],
    [models_1.EuiEnvironmentEnum.PROD, "https://".concat(SYMBOL, ".e.fadada.com")],
]);
var Client = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Client, _super);
    function Client(clientConfig) {
        return _super.call(this, clientConfig) || this;
    }
    Client.prototype.getOpenCorpAuthorizeUrl = function (data, environmentEnum) {
        var openCorpId = data.openCorpId, corpName = data.corpName, authScopes = data.authScopes, redirectUrl = data.redirectUrl;
        var timestamp = new Date().getTime();
        var appId = this.credential.appId.toUpperCase();
        var signParams = {
            appId: appId,
            openCorpId: openCorpId,
            corpName: corpName,
            authScopes: authScopes,
            redirectUrl: redirectUrl
        };
        var signStr = sign_1.default.formatSignString(signParams);
        var signature = sign_1.default.sign({
            signStr: signStr,
            timestamp: timestamp,
            appSecret: this.credential.appSecret,
        });
        var params = new url_1.URLSearchParams();
        params.append('openCorpId', openCorpId);
        params.append('corpName', corpName);
        params.append('authScopes', authScopes);
        params.append('redirectUrl', redirectUrl);
        params.append('timestamp', String(timestamp));
        params.append('signature', signature);
        var host = EnvEnvironmentMap.get(environmentEnum).replace(SYMBOL, appId);
        return (host + '/authorize/list?' + decodeURIComponent(params.toString()));
    };
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒企业经办人进行授权操作，以授权应用系统访问该企业在法大大平台的某些数据和操作权限。
     * 在企业操作授权前，法大大平台要求企业及其经办人必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
    Client.prototype.getCorpAuthUrl = function (req) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.request({ url: "/corp/get-auth-url", req: req, reqMethod: "POST" })];
            });
        });
    };
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒用户进行授权操作，以授权应用系统访问用户在法大大平台的某些数据资源和操作权限。
     * 在用户操作授权前，法大大平台要求用户必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
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
    /**
     * 获取计费链接
     * 应用系统向法大大平台获取计费页面链接，用于账户信息查询或套餐订购
     */
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
