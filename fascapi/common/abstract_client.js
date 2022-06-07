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
            "X-FASC-App-Id": this.credential.appId,
            "X-FASC-Sign-Type": this.profile.signMethod,
            "X-FASC-Nonce": nonce,
            "X-FASC-Timestamp": timestamp,
            "Content-Type": "application/x-www-form-urlencoded",
        };
        let reqData = JSON.stringify(data) || "";
        let form;
        if (reqMethod === "POST" && (options === null || options === void 0 ? void 0 : options.multipart)) {
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
        headers["X-FASC-Sign"] = signature;
        if (this.credential.accessToken !== null) {
            headers["X-FASC-AccessToken"] = this.credential.accessToken;
        }
        else {
            reqData = null;
            headers["X-FASC-Grant-Type"] = "client_credential";
        }
        const fetchParams = {
            url,
            baseURL: this.serverUrl,
            method: reqMethod,
            headers,
            data: reqData,
            timeout: this.profile.reqTimeout * 1000,
        };
        const response = await (0, fetch_1.default)(fetchParams, this.profile.proxyProfile);
        const curl = (0, r2curl_1.default)(response);
        console.log(curl);
        return response;
    }
    formatParams({ data, appId, signMethod, nonce, timestamp, accessToken = null, }) {
        const signParams = {
            bizContent: JSON.stringify(data || ''),
            "X-FASC-App-Id": appId,
            "X-FASC-Sign-Type": signMethod,
            "X-FASC-Nonce": nonce,
            "X-FASC-Timestamp": timestamp,
        };
        if (accessToken !== null) {
            signParams["X-FASC-AccessToken"] = accessToken;
        }
        else {
            signParams["X-FASC-Grant-Type"] = "client_credential";
            delete signParams.bizContent;
        }
        return signParams;
    }
}
exports.AbstractClient = AbstractClient;
