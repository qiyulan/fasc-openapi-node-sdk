"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
var https_1 = (0, tslib_1.__importDefault)(require("https"));
var qs_1 = (0, tslib_1.__importDefault)(require("qs"));
axios_1.default.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios_1.default.defaults.withCredentials = true;
function default_1(_a, proxy) {
    var url = _a.url, baseURL = _a.baseURL, method = _a.method, headers = _a.headers, data = _a.data;
    var requestOptions = {
        url: url,
        baseURL: baseURL,
        method: method,
        headers: headers,
        data: data,
        withCredentials: true,
    };
    if (proxy.proxyFlag === true) {
        requestOptions.proxy = {
            host: proxy.proxyHost,
            port: proxy.proxyPort,
        };
        requestOptions.httpsAgent = new https_1.default.Agent({ keepAlive: true });
    }
    return axios_1.default.post(requestOptions.baseURL + url, qs_1.default.stringify(data), { headers: headers, withCredentials: true });
}
exports.default = default_1;
