"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClient = void 0;
const tslib_1 = require("tslib");
const crypto = (0, tslib_1.__importStar)(require("crypto"));
const form_data_1 = (0, tslib_1.__importDefault)(require("form-data"));
const r2curl_1 = (0, tslib_1.__importDefault)(require("r2curl"));
const sign_1 = (0, tslib_1.__importDefault)(require("./sign"));
const fetch_1 = (0, tslib_1.__importDefault)(require("./fetch"));
const models_1 = require("./models");
const fasc_openapi_sdk_exception_1 = (0, tslib_1.__importDefault)(require("./fasc_openapi_sdk_exception"));
class AbstractClient {
    constructor({ serverUrl, credential, profile }) {
        this.credential = { appId: null, appSecret: null, accessToken: null, ...credential };
        this.serverUrl = serverUrl;
        this.profile = {
            signMethod: (profile === null || profile === void 0 ? void 0 : profile.signMethod) || models_1.SignMethod.hamcsha256,
            reqTimeout: (profile === null || profile === void 0 ? void 0 : profile.reqTimeout) || 15,
            proxyProfile: {
                proxyFlag: false,
                proxyHost: "",
                proxyPort: 80,
            },
            language: (profile === null || profile === void 0 ? void 0 : profile.language) || "zh-CN",
        };
    }
    async request({ url, reqMethod, req, options, }) {
        try {
            const res = await this.doRequest(url, req, reqMethod, options);
            return res;
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    async doRequest(url, req, reqMethod, options) {
        if (this.profile.signMethod === models_1.SignMethod.hamcsha256) {
            return this.doRequestWithSign(url, req, reqMethod, options);
        }
        else {
            throw new fasc_openapi_sdk_exception_1.default("签名算法错误，仅支持HMAC-SHA256");
        }
    }
    async doRequestWithSign(url, data, reqMethod, options) {
        const timestamp = new Date().getTime();
        const nonce = crypto.randomBytes(16).toString("hex");
        const headers = {
            [models_1.RequestParamsEnum.APP_ID]: this.credential.appId,
            [models_1.RequestParamsEnum.SIGN_TYPE]: this.profile.signMethod,
            [models_1.RequestParamsEnum.NONCE]: nonce,
            [models_1.RequestParamsEnum.TIMESTAMP]: timestamp,
            "Content-Type": "application/x-www-form-urlencoded",
        };
        let reqData = JSON.stringify(data) || "";
        let form;
        if (reqMethod === models_1.RequestParamsEnum.METHOD_POST && (options === null || options === void 0 ? void 0 : options.multipart)) {
            form = new form_data_1.default();
            for (const key in data) {
                form.append(key, data[key]);
            }
            reqData = form;
            headers["Content-Type"] = form.getHeaders()["content-type"];
        }
        const params = this.formatParams({
            data,
            appId: this.credential.appId,
            signMethod: this.profile.signMethod,
            nonce,
            timestamp,
            accessToken: this.credential.accessToken,
        });
        const signStr = sign_1.default.formatSignString(params);
        const signature = sign_1.default.sign({
            signStr,
            timestamp,
            appSecret: this.credential.appSecret,
        });
        headers[models_1.RequestParamsEnum.SIGN] = signature;
        if (this.credential.accessToken !== null) {
            headers[models_1.RequestParamsEnum.ACCESS_TOKEN] = this.credential.accessToken;
        }
        else {
            reqData = null;
            headers[models_1.RequestParamsEnum.GRANT_TYPE] = models_1.RequestParamsEnum.CLIENT_CREDENTIAL;
        }
        const fetchParams = {
            url,
            baseURL: this.serverUrl,
            method: reqMethod,
            headers,
            data: { [models_1.RequestParamsEnum.DATA_KEY]: reqData },
            timeout: this.profile.reqTimeout * 1000,
        };
        const curl = (0, r2curl_1.default)(fetchParams);
        console.log(curl);
        return await (0, fetch_1.default)(fetchParams, this.profile.proxyProfile);
    }
    formatParams({ data, appId, signMethod, nonce, timestamp, accessToken = null, }) {
        const signParams = {
            [models_1.RequestParamsEnum.DATA_KEY]: JSON.stringify(data || ''),
            [models_1.RequestParamsEnum.APP_ID]: appId,
            [models_1.RequestParamsEnum.SIGN_TYPE]: signMethod,
            [models_1.RequestParamsEnum.NONCE]: nonce,
            [models_1.RequestParamsEnum.TIMESTAMP]: timestamp,
        };
        if (accessToken !== null) {
            signParams[models_1.RequestParamsEnum.ACCESS_TOKEN] = accessToken;
        }
        else {
            signParams[models_1.RequestParamsEnum.GRANT_TYPE] = models_1.RequestParamsEnum.CLIENT_CREDENTIAL;
            delete signParams[models_1.RequestParamsEnum.DATA_KEY];
        }
        return signParams;
    }
}
exports.AbstractClient = AbstractClient;
