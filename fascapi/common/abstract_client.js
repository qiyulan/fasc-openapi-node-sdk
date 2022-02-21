"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClient = void 0;
const tslib_1 = require("tslib");
const crypto = (0, tslib_1.__importStar)(require("crypto"));
const skd_version_1 = require("./skd_version");
const sign_1 = (0, tslib_1.__importDefault)(require("./sign"));
const fetch_1 = (0, tslib_1.__importDefault)(require("./fetch"));
const models_1 = require("./models");
const fasc_openapi_sdk_exception_1 = (0, tslib_1.__importDefault)(require("./fasc_openapi_sdk_exception"));
class AbstractClient {
    constructor({ serverUrl, credential, profile }) {
        this.credential = { appId: null, appSecret: null, accessToken: null, ...credential };
        this.sdkVersion = skd_version_1.sdkVersion;
        this.serverUrl = serverUrl;
        this.profile = {
            signMethod: (profile === null || profile === void 0 ? void 0 : profile.signMethod) || models_1.SignMethod.hamcsha256,
            reqTimeout: (profile === null || profile === void 0 ? void 0 : profile.reqTimeout) || 60,
            proxyProfile: {
                proxyFlag: false,
                proxyHost: "",
                proxyPort: "",
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
        }
        catch (e) {
            cb && cb(e, null);
            throw e;
        }
    }
    async doRequest(url, req, reqMethod, options) {
        if (this.profile.signMethod === models_1.SignMethod.hamcsha256) {
            return this.doRequestWithSign(url, req, reqMethod, options);
        }
        else {
            // TODO 提醒不支持的签名方式
        }
    }
    async doRequestWithSign(url, data, reqMethod, options) {
        let res;
        try {
            const timestamp = new Date().getTime();
            const nonce = crypto.randomBytes(16).toString("hex");
            const config = {
                method: reqMethod,
                timeout: this.profile.reqTimeout * 1000,
                headers: {
                    "X-FASC-App-Id": this.credential.appId,
                    "X-FASC-Sign-Type": this.profile.signMethod,
                    "X-FASC-Nonce": nonce,
                    "X-FASC-Timestamp": timestamp,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            };
            const dataStr = new URLSearchParams(data).toString();
            let form;
            if (reqMethod === "POST" && !(options === null || options === void 0 ? void 0 : options.multipart)) {
                config.body = { bizContent: JSON.stringify(data) };
            }
            if (reqMethod === "POST" && (options === null || options === void 0 ? void 0 : options.multipart)) {
                form = new FormData();
                for (const key in data) {
                    form.append(key, data[key]);
                }
                config.body = form;
                config.headers["Content-Type"] = "multipart/form-data";
            }
            if (reqMethod === "GET") {
                url += "?" + new URLSearchParams(data).toString();
            }
            url = this.serverUrl + url;
            const signStr = sign_1.default.formatSignString({
                data,
                appId: this.credential.appId,
                signMethod: this.profile.signMethod,
                nonce,
                timestamp,
                accessToken: this.credential.accessToken,
                appSecret: this.credential.appSecret,
            });
            const signature = sign_1.default.sign({
                signStr,
                timestamp,
                appSecret: this.credential.appSecret,
            });
            config.headers["X-FASC-Sign"] = signature;
            if (this.credential.accessToken !== null) {
                config.headers["X-FASC-AccessToken"] = this.credential.accessToken;
                config.body = null;
            }
            else {
                config.headers["X-FASC-Grant-Type"] = "client_credential";
            }
            console.info("config: ", config);
            console.info("url: ", url);
            res = await (0, fetch_1.default)(url, config, this.profile.proxyProfile);
        }
        catch (e) {
            throw new fasc_openapi_sdk_exception_1.default(e.message);
        }
        return this.parseResponse(res);
    }
    async parseResponse(res) {
        if (res) {
            if (res.status !== 200) {
            }
            else {
                const data = await res.json();
                console.info("响应数据：", data);
            }
        }
        else {
            throw new fasc_openapi_sdk_exception_1.default(`响应为空(${res})`);
        }
    }
}
exports.AbstractClient = AbstractClient;
