"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const https_1 = (0, tslib_1.__importDefault)(require("https"));
axios_1.default.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
function default_1({ url, baseURL, method, headers, data }, proxy) {
    let requestOptions = {
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
    return (0, axios_1.default)(requestOptions);
}
exports.default = default_1;
