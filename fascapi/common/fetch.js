"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_fetch_1 = (0, tslib_1.__importDefault)(require("node-fetch"));
const HttpsProxyAgent = require("https-proxy-agent");
function default_1(url, options, proxy) {
    const instanceOptions = options || {};
    if (!options.agent && proxy.proxyFlag) {
        instanceOptions.agent = new HttpsProxyAgent(proxy.proxyHost + proxy.proxyPort ? `:${proxy.proxyPort}` : "");
    }
    return (0, node_fetch_1.default)(url, instanceOptions);
}
exports.default = default_1;
