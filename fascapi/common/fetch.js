"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const https_1 = (0, tslib_1.__importDefault)(require("https"));
const qs_1 = (0, tslib_1.__importDefault)(require("qs"));
axios_1.default.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios_1.default.defaults.withCredentials = true;
function default_1({ url, baseURL, method, headers, data }, proxy) {
    const requestOptions = {
        url,
        baseURL,
        method,
        headers,
        data,
        withCredentials: true,
    };
    if (proxy.proxyFlag === true) {
        requestOptions.proxy = {
            host: proxy.proxyHost,
            port: proxy.proxyPort,
        };
        requestOptions.httpsAgent = new https_1.default.Agent({ keepAlive: true });
    }
    return axios_1.default.post(requestOptions.baseURL + url, qs_1.default.stringify(data), { headers, withCredentials: true });
}
exports.default = default_1;
