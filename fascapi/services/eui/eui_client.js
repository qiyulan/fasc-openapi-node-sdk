"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const tslib_1 = require("tslib");
const url_1 = require("url");
const abstract_client_1 = require("../../common/abstract_client");
const sign_1 = (0, tslib_1.__importDefault)(require("../../common/sign"));
const models_1 = require("../../common/models");
const SYMBOL = '%s';
const EnvEnvironmentMap = new Map([
    [models_1.EuiEnvironmentEnum.SIT, `https://${SYMBOL}.sit-e.fadada.com`],
    [models_1.EuiEnvironmentEnum.UAT, `https://${SYMBOL}.uat-e.fadada.com`],
    [models_1.EuiEnvironmentEnum.PROD, `https://${SYMBOL}.e.fadada.com`],
]);
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super(clientConfig);
    }
    getOpenCorpAuthorizeUrl(data, environmentEnum) {
        const { openCorpId, corpName, authScopes, redirectUrl } = data;
        const timestamp = new Date().getTime();
        const appId = this.credential.appId.toUpperCase();
        const signParams = {
            appId,
            openCorpId,
            corpName,
            authScopes,
            redirectUrl
        };
        const signStr = sign_1.default.formatSignString(signParams);
        const signature = sign_1.default.sign({
            signStr,
            timestamp,
            appSecret: this.credential.appSecret,
        });
        const params = new url_1.URLSearchParams();
        params.append('openCorpId', openCorpId);
        params.append('corpName', corpName);
        params.append('authScopes', authScopes);
        params.append('redirectUrl', redirectUrl);
        params.append('timestamp', String(timestamp));
        params.append('signature', signature);
        const host = EnvEnvironmentMap.get(environmentEnum).replace(SYMBOL, appId);
        return (host + '/authorize/list?' + decodeURIComponent(params.toString()));
    }
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒企业经办人进行授权操作，以授权应用系统访问该企业在法大大平台的某些数据和操作权限。
     * 在企业操作授权前，法大大平台要求企业及其经办人必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
    async getCorpAuthUrl(req) {
        return this.request({ url: "/corp/get-auth-url", req, reqMethod: "POST" });
    }
    /**
     * 应用系统向法大大平台获取一个页面链接，用于提醒用户进行授权操作，以授权应用系统访问用户在法大大平台的某些数据资源和操作权限。
     * 在用户操作授权前，法大大平台要求用户必须先完成登录和实名认证 (即: Authorization的前提是必须先完成Authentication)
     */
    async getUserAuthUrl(req) {
        return this.request({ url: "/user/get-auth-url", req, reqMethod: "POST" });
    }
    /**
     * 获取应用级资源访问链接
     * 获取法大大平台主体授权给应用可访问的资源链接
     */
    async getAppPageResourceUrl(req) {
        return this.request({ url: "/app-page-resource/get-url", req, reqMethod: "POST" });
    }
    /**
     * 获取用户级资源访问链接
     * 获取法大大登录用户访问资源的链接
     */
    async getUserPageResourceUrl(req) {
        return this.request({ url: "/user-page-resource/get-url", req, reqMethod: "POST" });
    }
    /**
     * 获取计费链接
     * 应用系统向法大大平台获取计费页面链接，用于账户信息查询或套餐订购
     */
    async getBillUrl(req) {
        return this.request({ url: "/billing/get-bill-url", req, reqMethod: "POST" });
    }
}
exports.Client = Client;
