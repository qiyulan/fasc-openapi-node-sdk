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
}
exports.Client = Client;
