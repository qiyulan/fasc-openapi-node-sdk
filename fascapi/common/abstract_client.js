"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClient = void 0;
const tslib_1 = require("tslib");
const crypto = (0, tslib_1.__importStar)(require("crypto"));
const form_data_1 = (0, tslib_1.__importDefault)(require("form-data"));
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
    async request({ url, reqMethod, req, options, cb, }) {
        if (typeof options === "function") {
            cb = options;
            options = {};
        }
        try {
            const res = await this.doRequest(url, req, reqMethod, options);
            cb && cb(null, res);
            return res;
        }
        catch (e) {
            cb && cb(e, null);
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
        let formatData = null;
        let form;
        if (reqMethod === "POST" && (options === null || options === void 0 ? void 0 : options.multipart)) {
            form = new form_data_1.default();
            for (const key in data) {
                form.append(key, data[key]);
            }
            formatData = form;
            headers["Content-Type"] = form.getHeaders()["content-type"];
        }
        else {
            url += "?bizContent=" + encodeURIComponent(JSON.stringify(data) || "");
        }
        const signStr = sign_1.default.formatSignString({
            data,
            appId: this.credential.appId,
            signMethod: this.profile.signMethod,
            nonce,
            timestamp,
            accessToken: this.credential.accessToken,
        });
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
            formatData = null;
            headers["X-FASC-Grant-Type"] = "client_credential";
        }
        const fetchParams = {
            url,
            baseURL: this.serverUrl,
            method: reqMethod,
            headers,
            data: formatData,
            timeout: this.profile.reqTimeout * 1000,
        };
        return await (0, fetch_1.default)(fetchParams, this.profile.proxyProfile);
    }
}
exports.AbstractClient = AbstractClient;
