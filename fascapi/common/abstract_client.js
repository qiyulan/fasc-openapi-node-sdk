"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClient = void 0;
var tslib_1 = require("tslib");
var crypto = (0, tslib_1.__importStar)(require("crypto"));
var form_data_1 = (0, tslib_1.__importDefault)(require("form-data"));
var r2curl_1 = (0, tslib_1.__importDefault)(require("r2curl"));
var sign_1 = (0, tslib_1.__importDefault)(require("./sign"));
var fetch_1 = (0, tslib_1.__importDefault)(require("./fetch"));
var models_1 = require("./models");
var fasc_openapi_sdk_exception_1 = (0, tslib_1.__importDefault)(require("./fasc_openapi_sdk_exception"));
var AbstractClient = /** @class */ (function () {
    function AbstractClient(_a) {
        var serverUrl = _a.serverUrl, credential = _a.credential, profile = _a.profile;
        this.credential = (0, tslib_1.__assign)({ appId: null, appSecret: null, accessToken: null }, credential);
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
    AbstractClient.prototype.request = function (_a) {
        var url = _a.url, reqMethod = _a.reqMethod, req = _a.req, options = _a.options;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var res, e_1;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.doRequest(url, req, reqMethod, options)];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AbstractClient.prototype.doRequest = function (url, req, reqMethod, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                if (this.profile.signMethod === models_1.SignMethod.hamcsha256) {
                    return [2 /*return*/, this.doRequestWithSign(url, req, reqMethod, options)];
                }
                else {
                    throw new fasc_openapi_sdk_exception_1.default("签名算法错误，仅支持HMAC-SHA256");
                }
                return [2 /*return*/];
            });
        });
    };
    AbstractClient.prototype.doRequestWithSign = function (url, data, reqMethod, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var timestamp, nonce, headers, reqData, form, key, params, signStr, signature, fetchParams, curl;
            var _a, _b;
            return (0, tslib_1.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        timestamp = new Date().getTime();
                        nonce = crypto.randomBytes(16).toString("hex");
                        headers = (_a = {},
                            _a[models_1.RequestParamsEnum.APP_ID] = this.credential.appId,
                            _a[models_1.RequestParamsEnum.SIGN_TYPE] = this.profile.signMethod,
                            _a[models_1.RequestParamsEnum.NONCE] = nonce,
                            _a[models_1.RequestParamsEnum.TIMESTAMP] = timestamp,
                            _a[models_1.RequestParamsEnum.SUBVERSION] = models_1.SUBVERSION,
                            _a["Content-Type"] = "application/x-www-form-urlencoded",
                            _a);
                        reqData = JSON.stringify(data) || "";
                        if (reqMethod === models_1.RequestParamsEnum.METHOD_POST && (options === null || options === void 0 ? void 0 : options.multipart)) {
                            form = new form_data_1.default();
                            for (key in data) {
                                form.append(key, data[key]);
                            }
                            reqData = form;
                            headers["Content-Type"] = form.getHeaders()["content-type"];
                        }
                        params = this.formatParams({
                            data: data,
                            appId: this.credential.appId,
                            signMethod: this.profile.signMethod,
                            nonce: nonce,
                            timestamp: timestamp,
                            accessToken: this.credential.accessToken,
                            subversion: models_1.SUBVERSION
                        });
                        signStr = sign_1.default.formatSignString(params);
                        signature = sign_1.default.sign({
                            signStr: signStr,
                            timestamp: timestamp,
                            appSecret: this.credential.appSecret,
                        });
                        headers[models_1.RequestParamsEnum.SIGN] = signature;
                        if (!this.credential.accessToken) {
                            reqData = null;
                            headers[models_1.RequestParamsEnum.GRANT_TYPE] = models_1.RequestParamsEnum.CLIENT_CREDENTIAL;
                        }
                        else {
                            headers[models_1.RequestParamsEnum.ACCESS_TOKEN] = this.credential.accessToken;
                        }
                        fetchParams = {
                            url: url,
                            baseURL: this.serverUrl,
                            method: reqMethod,
                            headers: headers,
                            data: (_b = {}, _b[models_1.RequestParamsEnum.DATA_KEY] = reqData, _b),
                            timeout: this.profile.reqTimeout * 1000,
                        };
                        curl = (0, r2curl_1.default)(fetchParams);
                        console.log(curl);
                        return [4 /*yield*/, (0, fetch_1.default)(fetchParams, this.profile.proxyProfile)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    AbstractClient.prototype.formatParams = function (_a) {
        var _b;
        var data = _a.data, appId = _a.appId, signMethod = _a.signMethod, nonce = _a.nonce, timestamp = _a.timestamp, _c = _a.accessToken, accessToken = _c === void 0 ? null : _c, subversion = _a.subversion;
        var signParams = (_b = {},
            _b[models_1.RequestParamsEnum.DATA_KEY] = JSON.stringify(data || ''),
            _b[models_1.RequestParamsEnum.APP_ID] = appId,
            _b[models_1.RequestParamsEnum.SIGN_TYPE] = signMethod,
            _b[models_1.RequestParamsEnum.NONCE] = nonce,
            _b[models_1.RequestParamsEnum.TIMESTAMP] = timestamp,
            _b[models_1.RequestParamsEnum.SUBVERSION] = subversion,
            _b);
        if (!accessToken) {
            signParams[models_1.RequestParamsEnum.GRANT_TYPE] = models_1.RequestParamsEnum.CLIENT_CREDENTIAL;
            delete signParams[models_1.RequestParamsEnum.DATA_KEY];
        }
        else {
            signParams[models_1.RequestParamsEnum.ACCESS_TOKEN] = accessToken;
        }
        return signParams;
    };
    return AbstractClient;
}());
exports.AbstractClient = AbstractClient;
